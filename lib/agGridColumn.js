// ag-grid-aurelia-plugin v31.3.10
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AgGridColumn_1;
import { autoinject, child, children, customElement, inlineView } from "aurelia-framework";
import { AgCellTemplate, AgEditorTemplate, AgFilterTemplate, AgHeaderGroupTemplate, AgHeaderTemplate, AgPinnedRowTemplate } from "./agTemplate";
import { generateBindables } from "./agUtils";
let AgGridColumn = AgGridColumn_1 = class AgGridColumn {
    mappedColumnProperties = {
        "hideCol": "hide" // hide exists in aurelia-templating-resources and will conflict
    };
    childColumns = [];
    cellTemplate;
    editorTemplate;
    filterTemplate;
    headerTemplate;
    headerGroupTemplate;
    pinnedRowTemplate;
    constructor() {
    }
    hasChildColumns() {
        return this.childColumns && this.childColumns.length > 0;
    }
    toColDef() {
        let colDef = this.createColDefFromGridColumn();
        if (this.hasChildColumns()) {
            colDef["children"] = AgGridColumn_1.getChildColDefs(this.childColumns);
        }
        const defaultAction = (templateName) => {
            let self = this;
            if (self[templateName]) {
                const frameworkName = templates[templateName].frameworkName;
                colDef[frameworkName] = { template: self[templateName].template };
                delete colDef[templateName];
            }
        };
        const editorAction = (templateName) => {
            if (colDef.editable === undefined) {
                colDef.editable = true;
            }
            defaultAction(templateName);
        };
        const templates = {
            cellTemplate: {
                frameworkName: 'cellRendererFramework'
            },
            editorTemplate: {
                frameworkName: 'cellEditorFramework',
                action: editorAction
            },
            filterTemplate: {
                frameworkName: 'filterFramework'
            },
            headerTemplate: {
                frameworkName: 'headerComponentFramework'
            },
            headerGroupTemplate: {
                frameworkName: 'headerGroupComponentFramework'
            },
            pinnedRowTemplate: {
                frameworkName: 'pinnedRowCellRendererFramework'
            }
        };
        const addTemplate = (templateName) => {
            const action = templates[templateName].action ? templates[templateName].action : defaultAction;
            action(templateName);
        };
        Object.keys(templates)
            .forEach(addTemplate);
        return colDef;
    }
    static getChildColDefs(childColumns) {
        return childColumns
            .filter(column => !column.hasChildColumns())
            .map((column) => {
            return column.toColDef();
        });
    }
    ;
    createColDefFromGridColumn() {
        let colDef = {};
        for (let prop in this) {
            // only map this property if it's been actually been set
            if (this[prop] === undefined) {
                continue;
            }
            let colDefProperty = this.mappedColumnProperties[prop] ? this.mappedColumnProperties[prop] : prop;
            colDef[colDefProperty] = this[prop];
        }
        delete colDef.childColumns;
        return colDef;
    }
    ;
};
__decorate([
    children('ag-grid-column'),
    __metadata("design:type", Array)
], AgGridColumn.prototype, "childColumns", void 0);
__decorate([
    child('ag-cell-template'),
    __metadata("design:type", AgCellTemplate)
], AgGridColumn.prototype, "cellTemplate", void 0);
__decorate([
    child('ag-editor-template'),
    __metadata("design:type", AgEditorTemplate)
], AgGridColumn.prototype, "editorTemplate", void 0);
__decorate([
    child('ag-filter-template'),
    __metadata("design:type", AgFilterTemplate)
], AgGridColumn.prototype, "filterTemplate", void 0);
__decorate([
    child('ag-header-template'),
    __metadata("design:type", AgHeaderTemplate)
], AgGridColumn.prototype, "headerTemplate", void 0);
__decorate([
    child('ag-header-group-template'),
    __metadata("design:type", AgHeaderGroupTemplate)
], AgGridColumn.prototype, "headerGroupTemplate", void 0);
__decorate([
    child('ag-pinned-row-template'),
    __metadata("design:type", AgPinnedRowTemplate)
], AgGridColumn.prototype, "pinnedRowTemplate", void 0);
AgGridColumn = AgGridColumn_1 = __decorate([
    customElement('ag-grid-column-m3'),
    generateBindables(["colId", "sort", "sortedAt", "sortingOrder", "field", "headerValueGetter", "hideCol", "pinned",
        "tooltipField", "headerTooltip", "valueGetter", "keyCreator", "floatingFilterComponentFramework", "rowDrag",
        "width", "minWidth", "maxWidth", "cellClass", "cellStyle", "cellRenderer", "cellRendererFramework",
        "cellRendererParams", "cellEditor", "cellEditorFramework", "cellEditorParams", "floatingCellRenderer",
        "floatingCellRendererFramework", "floatingCellRendererParams", "cellFormatter", "floatingCellFormatter",
        "getQuickFilterText", "aggFunc", "rowGroupIndex", "pivotIndex", "comparator", "checkboxSelection", "suppressMenu",
        "suppressSorting", "suppressMovable", "suppressFilter", "unSortIcon", "suppressSizeToFit", "suppressResize",
        "suppressAutoSize", "suppressToolPanel", "suppressKeyboardEvent", "enableRowGroup", "enablePivot", "enableValue",
        "editable", "suppressNavigable", "newValueHandler", "volatile", "filter", "filterFramework", "filterParams",
        "cellClassRules", "onCellValueChanged", "onCellClicked", "onCellDoubleClicked", "onCellContextMenu", "icons",
        "enableCellChangeFlash", "headerName", "columnGroupShow", "headerClass", "toolPanelClass", "children", "groupId", "openByDefault",
        "marryChildren", "headerCheckboxSelection", "headerCheckboxSelectionFilteredOnly", "type", "valueSetter",
        "pinnedRowCellRenderer", "pinnedRowCellRendererFramework", "pinnedRowCellRendererParams", "valueFormatter",
        "pinnedRowValueFormatter", "valueParser", "allowedAggFuncs", "rowGroup", "showRowGroup", "pivot", "equals", "pivotComparator",
        "menuTabs", "colSpan", "suppressPaste", "template", "templateUrl", "pivotValueColumn", "pivotTotalColumnIds", "headerComponent",
        "headerComponentFramework", "headerComponentParams", "floatingFilterComponent", "floatingFilterComponentParams",
        "lockPinned"])
    // <slot> is required for @children to work.  https://github.com/aurelia/templating/issues/451#issuecomment-254206622
    ,
    inlineView(`<template><slot></slot></template>`),
    autoinject(),
    __metadata("design:paramtypes", [])
], AgGridColumn);
export { AgGridColumn };
