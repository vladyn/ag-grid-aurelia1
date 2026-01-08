import {autoinject, Container, transient, ViewResources} from "aurelia-framework";
import {VanillaFrameworkOverrides, IFrameworkOverrides, AgPromise} from "ag-grid-community";

@autoinject()
@transient()
export class AureliaFrameworkFactory implements IFrameworkOverrides {
    setInterval(action: any, interval?: any): AgPromise<number> {
        return new AgPromise(resolve => {
            resolve(window.setInterval(action, interval));
        });
    }
    shouldWrapOutgoing?: boolean;
    isFrameworkComponent(comp: any): boolean {
        throw new Error("Method not implemented.");
    }
    renderingEngine: "vanilla" | "react";
    getDocLink(path?: string): string {
        throw new Error("Method not implemented.");
    }
    private _container: Container;
    private _viewResources: ViewResources;
    private _baseFrameworkFactory: IFrameworkOverrides = new VanillaFrameworkOverrides();

    public setContainer(container: Container): void {
        this._container = container;
    }

    public setViewResources(viewResources: ViewResources): void {
        this._viewResources = viewResources;
    }

    setTimeout(action: any, interval?: any): void {
        this._baseFrameworkFactory.setInterval(action, interval);
    }

    addEventListener(element: HTMLElement, type: string, listener: EventListener | EventListenerObject, useCapture?: boolean): void {
        this._baseFrameworkFactory.addEventListener(element, type, listener, useCapture);
    }

    wrapIncoming<T>(callback: () => T, source?: any): T {
        return this._baseFrameworkFactory.wrapIncoming(callback, source);
    }

    wrapOutgoing<T>(callback: () => T, source?: any): T {
        return this._baseFrameworkFactory.wrapOutgoing(callback);
    }

    frameworkComponent(name: string): any {
        return this._baseFrameworkFactory.frameworkComponent(name);
    }

    // Add any additional missing methods based on the IFrameworkOverrides interface
    // You may need to check the ag-grid documentation for the complete interface
}
