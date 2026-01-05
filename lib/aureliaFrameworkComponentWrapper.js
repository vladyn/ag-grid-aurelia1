// ag-grid-aurelia-plugin v31.3.4
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, TaskQueue, transient, ViewCompiler } from "aurelia-framework";
import { BaseComponentWrapper, Bean } from 'ag-grid-community';
let AureliaFrameworkComponentWrapper = class AureliaFrameworkComponentWrapper extends BaseComponentWrapper {
    taskQueue;
    _viewCompiler;
    _container;
    _viewResources;
    constructor(taskQueue, _viewCompiler) {
        super();
        this.taskQueue = taskQueue;
        this._viewCompiler = _viewCompiler;
    }
    createWrapper(template) {
        let that = this;
        class DynamicComponent extends BaseGuiComponent {
            constructor() {
                super(that.taskQueue, that._viewCompiler);
            }
            init(params) {
                super.init(params, template.template, that._viewResources, that._container);
            }
            hasMethod(name) {
                return wrapper.getFrameworkComponentInstance() && wrapper.getFrameworkComponentInstance()[name] != null;
            }
            callMethod(name, args) {
                const componentRef = this.getFrameworkComponentInstance();
                return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args);
            }
            addMethod(name, callback) {
                wrapper[name] = callback;
            }
        }
        const wrapper = new DynamicComponent();
        return wrapper;
    }
    setContainer(container) {
        this._container = container;
    }
    setViewResources(viewResources) {
        this._viewResources = viewResources;
    }
};
AureliaFrameworkComponentWrapper = __decorate([
    autoinject(),
    transient(),
    Bean("frameworkComponentWrapper"),
    __metadata("design:paramtypes", [TaskQueue, ViewCompiler])
], AureliaFrameworkComponentWrapper);
export { AureliaFrameworkComponentWrapper };
class BaseGuiComponent {
    _taskQueue;
    _viewCompiler;
    _params;
    _view;
    constructor(taskQueue, viewCompiler) {
        this._taskQueue = taskQueue;
        this._viewCompiler = viewCompiler;
    }
    init(params, template, viewResources, container) {
        this._params = params;
        let bindingContext = { params: params };
        let viewFactory = this._viewCompiler.compile(template, viewResources);
        this._view = viewFactory.create(container);
        let controllers = this._view.controllers;
        //initialize each controller
        if (controllers && controllers.length) {
            controllers.forEach((c) => {
                c.viewModel.params = params;
            });
            this._view.bind(bindingContext);
            //ICellRenderer doesn't have a guiAttached method so
            //we call attach on the queue;
            this._taskQueue.queueMicroTask(() => this._view.attached());
        }
        else {
            this._view.bind(bindingContext);
        }
    }
    getGui() {
        return this._view.fragment;
    }
    destroy() {
        this._view.returnToCache();
    }
    refresh(params) {
        return false;
    }
    getFrameworkComponentInstance() {
        let controllers = this._view.controllers;
        //only one controller is allowed in editor template
        if (controllers &&
            controllers.length == 1 &&
            controllers[0].viewModel) {
            let editorVm = controllers[0].viewModel;
            //this is a 'hack' because we don't have params.bind="" in the template
            //must reset params or it will be nothing
            editorVm.params = this._params;
            return editorVm;
        }
        return null;
    }
}
