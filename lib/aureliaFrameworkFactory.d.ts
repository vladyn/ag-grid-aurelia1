// ag-grid-aurelia-plugin v31.3.4
import { Container, ViewResources } from "aurelia-framework";
import { IFrameworkOverrides, AgPromise, FrameworkOverridesIncomingSource } from "ag-grid-community";
export declare class AureliaFrameworkFactory implements IFrameworkOverrides {
    setInterval(action: any, interval?: any): AgPromise<number>;
    addEventListener(element: HTMLElement, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    wrapIncoming: <T>(callback: () => T, source?: FrameworkOverridesIncomingSource) => T;
    wrapOutgoing: <T>(callback: () => T) => T;
    shouldWrapOutgoing?: boolean;
    frameworkComponent(name: string, components?: any): void;
    isFrameworkComponent(comp: any): boolean;
    renderingEngine: "vanilla" | "react";
    getDocLink(path?: string): string;
    private _container;
    private _viewResources;
    private _baseFrameworkFactory;
    setContainer(container: Container): void;
    setViewResources(viewResources: ViewResources): void;
    setTimeout(action: any, timeout?: any): void;
    addEventListenerOutsideAngular(element: HTMLElement, type: string, listener: EventListener | EventListenerObject, useCapture?: boolean): void;
}
