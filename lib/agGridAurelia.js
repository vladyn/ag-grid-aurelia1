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
import { ComponentUtil, Grid } from "ag-grid-community";
import { bindable, child, children, Container, customElement, inlineView, TaskQueue, ViewResources } from "aurelia-framework";
import { AureliaFrameworkFactory } from "./aureliaFrameworkFactory";
import { generateBindables } from "./agUtils";
import { AgDateTemplate, AgFullWidthRowTemplate } from './agTemplate';
import { AureliaFrameworkComponentWrapper } from "./aureliaFrameworkComponentWrapper";
let AgGridAurelia = class AgGridAurelia {
    taskQueue;
    auFrameworkFactory;
    container;
    viewResources;
    aureliaFrameworkComponentWrapper;
    // not intended for user to interact with. so putting _ in so if user gets reference
    // to this object, they kind'a know it's not part of the agreed interface
    _nativeElement;
    _initialised = false;
    _destroyed = false;
    gridOptions;
    context;
    gridParams;
    // making these public, so they are accessible to people using the aurelia component references
    api;
    columnApi;
    columns = [];
    fullWidthRowTemplate;
    dateTemplate;
    constructor(element, taskQueue, auFrameworkFactory, container, viewResources, aureliaFrameworkComponentWrapper) {
        this.taskQueue = taskQueue;
        this.auFrameworkFactory = auFrameworkFactory;
        this.container = container;
        this.viewResources = viewResources;
        this.aureliaFrameworkComponentWrapper = aureliaFrameworkComponentWrapper;
        this._nativeElement = element;
        // create all the events generically. this is done generically so that
        // if the list of grid events change, we don't need to change this code.
        ComponentUtil.EVENTS.forEach((eventName) => {
            //create an empty event
            this[eventName] = () => {
            };
        });
    }
    attached() {
        // initialize the grid in the queue
        // because of bug in @children
        // https://github.com/aurelia/templating/issues/403
        this.taskQueue.queueTask(this.initGrid.bind(this));
    }
    initGrid() {
        this._initialised = false;
        this._destroyed = false;
        this.auFrameworkFactory.setContainer(this.container);
        this.auFrameworkFactory.setViewResources(this.viewResources);
        this.aureliaFrameworkComponentWrapper.setContainer(this.container);
        this.aureliaFrameworkComponentWrapper.setViewResources(this.viewResources);
        this.gridParams = {
            globalEventListener: this.globalEventListener.bind(this),
            frameworkFactory: this.auFrameworkFactory,
            seedBeanInstances: {
                frameworkComponentWrapper: this.aureliaFrameworkComponentWrapper
            }
        };
        if (this.columns && this.columns.length > 0) {
            this.gridOptions.columnDefs = this.columns
                .map((column) => {
                return column.toColDef();
            });
        }
        if (this.fullWidthRowTemplate) {
            this.gridOptions.fullWidthCellRenderer =
                { template: this.fullWidthRowTemplate.template };
        }
        if (this.dateTemplate) {
            this.gridOptions.dateComponentFramework =
                { template: this.dateTemplate.template };
        }
        new Grid(this._nativeElement, this.gridOptions, this.gridParams);
        this.api = this.gridOptions.api;
        this.columnApi = this.gridOptions.columnApi;
        this._initialised = true;
    }
    /**
     * Called by Aurelia whenever a bound property changes
     */
    propertyChanged(propertyName, newValue, oldValue) {
        // emulate an Angular2 SimpleChanges Object
        let changes = {};
        changes[propertyName] = { currentValue: newValue, previousValue: oldValue };
        if (this._initialised) {
            ComponentUtil.processOnChange(changes, this.api);
        }
    }
    detached() {
        if (this._initialised) {
            // need to do this before the destroy, so we know not to emit any events
            // while tearing down the grid.
            this._destroyed = true;
            this.api.destroy();
        }
    }
    globalEventListener(eventType, event) {
        // if we are tearing down, don't emit events
        if (this._destroyed) {
            return;
        }
        // generically look up the eventType
        let emitter = this[eventType];
        if (emitter) {
            emitter(event);
        }
        else {
            console.log('ag-Grid-aurelia: could not find EventEmitter: ' + eventType);
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], AgGridAurelia.prototype, "gridOptions", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], AgGridAurelia.prototype, "context", void 0);
__decorate([
    children('ag-grid-column'),
    __metadata("design:type", Array)
], AgGridAurelia.prototype, "columns", void 0);
__decorate([
    child('ag-full-width-row-template'),
    __metadata("design:type", AgFullWidthRowTemplate)
], AgGridAurelia.prototype, "fullWidthRowTemplate", void 0);
__decorate([
    child('ag-date-template'),
    __metadata("design:type", AgDateTemplate)
], AgGridAurelia.prototype, "dateTemplate", void 0);
AgGridAurelia = __decorate([
    customElement('ag-grid-aurelia'),
    generateBindables(ComponentUtil.ALL_PROPERTIES.filter((property) => property !== 'gridOptions')),
    generateBindables(ComponentUtil.EVENTS)
    // <slot> is required for @children to work.  https://github.com/aurelia/templating/issues/451#issuecomment-254206622
    ,
    inlineView(`<template><slot></slot></template>`),
    __metadata("design:paramtypes", [Element,
        TaskQueue,
        AureliaFrameworkFactory,
        Container,
        ViewResources,
        AureliaFrameworkComponentWrapper])
], AgGridAurelia);
export { AgGridAurelia };
