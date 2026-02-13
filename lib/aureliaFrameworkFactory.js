// ag-grid-aurelia-plugin v31.3.10
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, transient } from "aurelia-framework";
import { VanillaFrameworkOverrides, AgPromise } from "ag-grid-community-v31";
let AureliaFrameworkFactory = class AureliaFrameworkFactory {
    setInterval(action, interval) {
        return new AgPromise(resolve => {
            resolve(window.setInterval(action, interval));
        });
    }
    shouldWrapOutgoing;
    isFrameworkComponent(comp) {
        throw new Error("Method not implemented.");
    }
    renderingEngine;
    getDocLink(path) {
        throw new Error("Method not implemented.");
    }
    _container;
    _viewResources;
    _baseFrameworkFactory = new VanillaFrameworkOverrides();
    setContainer(container) {
        this._container = container;
    }
    setViewResources(viewResources) {
        this._viewResources = viewResources;
    }
    setTimeout(action, interval) {
        this._baseFrameworkFactory.setInterval(action, interval);
    }
    addEventListener(element, type, listener, useCapture) {
        this._baseFrameworkFactory.addEventListener(element, type, listener, useCapture);
    }
    wrapIncoming(callback, source) {
        return this._baseFrameworkFactory.wrapIncoming(callback, source);
    }
    wrapOutgoing(callback, source) {
        return this._baseFrameworkFactory.wrapOutgoing(callback);
    }
    frameworkComponent(name) {
        return this._baseFrameworkFactory.frameworkComponent(name);
    }
};
AureliaFrameworkFactory = __decorate([
    autoinject(),
    transient()
], AureliaFrameworkFactory);
export { AureliaFrameworkFactory };
