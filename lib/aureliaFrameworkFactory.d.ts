// ag-grid-aurelia-plugin v31.3.7
import { Container, ViewResources } from "aurelia-framework";
import { IFrameworkOverrides, AgPromise } from "ag-grid-community";
export declare class AureliaFrameworkFactory implements IFrameworkOverrides {
    setInterval(action: any, interval?: any): AgPromise<number>;
    shouldWrapOutgoing?: boolean;
    isFrameworkComponent(comp: any): boolean;
    renderingEngine: "vanilla" | "react";
    getDocLink(path?: string): string;
    private _container;
    private _viewResources;
    private _baseFrameworkFactory;
    setContainer(container: Container): void;
    setViewResources(viewResources: ViewResources): void;
    setTimeout(action: any, interval?: any): void;
    addEventListener(element: HTMLElement, type: string, listener: EventListener | EventListenerObject, useCapture?: boolean): void;
    wrapIncoming<T>(callback: () => T, source?: any): T;
    wrapOutgoing<T>(callback: () => T, source?: any): T;
    frameworkComponent(name: string): any;
}
