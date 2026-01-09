// ag-grid-aurelia-plugin v31.3.8
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, customElement, noView, processContent, TargetInstruction } from "aurelia-framework";
/**
 * Function will move the elements innerHtml to a template property
 * and then remove html from the element so that Aurelia will not render
 * the template elements
 * @param compiler
 * @param resources
 * @param element
 * @param instruction
 */
function parseElement(compiler, resources, element, instruction) {
    let html = element.innerHTML;
    if (html !== '') {
        instruction.template = html;
    }
    element.innerHTML = '';
}
function getTemplate(targetInstruction) {
    return `<template>` + targetInstruction.elementInstruction.template + `</template>`;
}
let AgCellTemplate = class AgCellTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgCellTemplate = __decorate([
    customElement('ag-cell-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgCellTemplate);
export { AgCellTemplate };
let AgEditorTemplate = class AgEditorTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgEditorTemplate = __decorate([
    customElement('ag-editor-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgEditorTemplate);
export { AgEditorTemplate };
let AgFilterTemplate = class AgFilterTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgFilterTemplate = __decorate([
    customElement('ag-filter-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgFilterTemplate);
export { AgFilterTemplate };
let AgHeaderTemplate = class AgHeaderTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgHeaderTemplate = __decorate([
    customElement('ag-header-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgHeaderTemplate);
export { AgHeaderTemplate };
let AgHeaderGroupTemplate = class AgHeaderGroupTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgHeaderGroupTemplate = __decorate([
    customElement('ag-header-group-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgHeaderGroupTemplate);
export { AgHeaderGroupTemplate };
let AgPinnedRowTemplate = class AgPinnedRowTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgPinnedRowTemplate = __decorate([
    customElement('ag-pinned-row-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgPinnedRowTemplate);
export { AgPinnedRowTemplate };
let AgDateTemplate = class AgDateTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgDateTemplate = __decorate([
    customElement('ag-date-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgDateTemplate);
export { AgDateTemplate };
let AgFullWidthRowTemplate = class AgFullWidthRowTemplate {
    template;
    constructor(targetInstruction) {
        this.template = getTemplate(targetInstruction);
    }
};
AgFullWidthRowTemplate = __decorate([
    customElement('ag-full-width-row-template'),
    noView(),
    autoinject(),
    processContent(parseElement),
    __metadata("design:paramtypes", [TargetInstruction])
], AgFullWidthRowTemplate);
export { AgFullWidthRowTemplate };
