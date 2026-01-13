ag-Grid Aurelia Component
==============

This project contains the Aurelia Component for use with ag-Grid Community Edition.

Usage
==============

Please refer to www.ag-grid.com for full documentation on ag-Grid and Aurelia integration. Also take a look a the provided examples below.

Frameworks Supported
====================
Migration and Getting Started guides:

[Migration Guide](https://www.ag-grid.com/javascript-data-grid/migration/)

[API Reference](https://www.ag-grid.com/javascript-data-grid/reference/)

[Docs](https://www.ag-grid.com/javascript-data-grid/getting-started/)

In your main entry.
```
aurelia.use
    .standardConfiguration()
    .plugin('ag-grid-aurelia-plugin');
```

In your view model
```
export class MyGridPage {
    gridOptions = {
        onGridReady: params => {
            console.log('Grid is ready!!');
            console.log('1st col field = ' + this.gridOptions.columnDefs[0].field);
            this.api = params.api;
        }   
    }
    
    bind() {
        this.api.setGridOption('rowData', [{id: 1, name: 'Shane'}, {id: 2, name: 'Sean'}]);
    }

    onIdClicked(row){
        console.log('id clicked ' + row.id);
    }
    
    onGridReady() {
        console.log('Grid is ready!!');
        console.log('1st col field = ' + this.gridOptions.columnDefs[0].field);
    }
}  

```
In your view template.  Here we are adding columns using markup. ColumnDefs can be added from your view model if you wish.
```
<template>
    <div style="width: 100%; height: 350px;">
      <ag-grid-aurelia grid-options.bind="gridOptions" class="ag-material"
                       row-height.bind="48"
                       grid-ready.call="onGridReady()">

        <ag-grid-column header-name="My Group Column">
          <ag-grid-column header-name="Id" field="id">
              <ag-cell-template>
                <button md-button class="btn accent"  click.delegate="params.context.onIdClicked(params.data)">${params.value}</button>
              </ag-cell-template>
          </ag-grid-column>
          <ag-grid-column header-name="Name" field="name" >
          </ag-grid-column>
        </ag-grid-column>
      </ag-grid-aurelia>
    </div>

</template>
```

Building
==============

To build:
- npm install
- npm run build

To develop:
- npm install
- npm run watch
