// ag-grid-aurelia-plugin v31.3.4
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, transient } from "aurelia-framework";
import { VanillaFrameworkOverrides } from "ag-grid-community";
let AureliaFrameworkFactory = class AureliaFrameworkFactory {
    setInterval(action, interval) {
        throw new Error("Method not implemented.");
    }
    addEventListener(element, type, listener, options) {
        throw new Error("Method not implemented.");
    }
    wrapIncoming;
    wrapOutgoing;
    shouldWrapOutgoing;
    frameworkComponent(name, components) {
        throw new Error("Method not implemented.");
    }
    isFrameworkComponent(comp) {
        throw new Error("Method not implemented.");
    }
    renderingEngine;
    getDocLink(path) {
        throw new Error("Method not implemented.");
    }
    _container;
    _viewResources;
    _baseFrameworkFactory = new VanillaFrameworkOverrides(); // todo - inject this
    setContainer(container) {
        this._container = container;
    }
    setViewResources(viewResources) {
        this._viewResources = viewResources;
    }
    setTimeout(action, timeout) {
        window.setTimeout(action, timeout);
    }
    addEventListenerOutsideAngular(element, type, listener, useCapture) {
        element.addEventListener(type, listener, useCapture);
    }
};
AureliaFrameworkFactory = __decorate([
    autoinject(),
    transient()
], AureliaFrameworkFactory);
export { AureliaFrameworkFactory };
