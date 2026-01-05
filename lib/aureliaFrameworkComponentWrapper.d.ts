// ag-grid-aurelia-plugin v31.3.4
import { Container, TaskQueue, ViewCompiler, ViewResources } from "aurelia-framework";
import { BaseComponentWrapper, FrameworkComponentWrapper, WrappableInterface } from 'ag-grid-community';
export declare class AureliaFrameworkComponentWrapper extends BaseComponentWrapper<WrappableInterface> implements FrameworkComponentWrapper {
    private taskQueue;
    private _viewCompiler;
    private _container;
    private _viewResources;
    constructor(taskQueue: TaskQueue, _viewCompiler: ViewCompiler);
    createWrapper(template: any): WrappableInterface;
    setContainer(container: Container): void;
    setViewResources(viewResources: ViewResources): void;
}
