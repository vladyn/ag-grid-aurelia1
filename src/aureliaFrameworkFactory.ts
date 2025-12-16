import {autoinject, Container, transient, ViewResources} from "aurelia-framework";
import {VanillaFrameworkOverrides, IFrameworkOverrides, AgPromise, FrameworkOverridesIncomingSource} from "ag-grid-community";

@autoinject()
@transient()
export class AureliaFrameworkFactory implements IFrameworkOverrides {
    setInterval(action: any, interval?: any): AgPromise<number> {
        throw new Error("Method not implemented.");
    }
    addEventListener(element: HTMLElement, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
        throw new Error("Method not implemented.");
    }
    wrapIncoming: <T>(callback: () => T, source?: FrameworkOverridesIncomingSource) => T;
    wrapOutgoing: <T>(callback: () => T) => T;
    shouldWrapOutgoing?: boolean;
    frameworkComponent(name: string, components?: any) {
        throw new Error("Method not implemented.");
    }
    isFrameworkComponent(comp: any): boolean {
        throw new Error("Method not implemented.");
    }
    renderingEngine: "vanilla" | "react";
    getDocLink(path?: string): string {
        throw new Error("Method not implemented.");
    }
    private _container: Container;
    private _viewResources: ViewResources;
    private _baseFrameworkFactory: IFrameworkOverrides = new VanillaFrameworkOverrides();    // todo - inject this

    public setContainer(container: Container): void {
        this._container = container;
    }

    public setViewResources(viewResources: ViewResources): void {
        this._viewResources = viewResources;
    }

    setTimeout(action: any, timeout?: any): void {
        window.setTimeout(action, timeout);
    }

    addEventListenerOutsideAngular(element: HTMLElement, type: string, listener: EventListener | EventListenerObject, useCapture?: boolean): void {
        element.addEventListener(type, listener, useCapture);
    }
}
