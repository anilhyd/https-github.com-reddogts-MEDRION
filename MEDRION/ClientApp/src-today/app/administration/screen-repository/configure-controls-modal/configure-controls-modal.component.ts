import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { GridApi } from 'ag-grid-community';
import { currencyOptionsConstant, titleOptionsConstant } from 'src/app/constants/service.constants';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { ConfigureControlsAddComponent } from './configure-controls-add/configure-controls-add.component';

@Component({
  selector: 'app-configure-controls-modal',
  templateUrl: './configure-controls-modal.component.html',
  styleUrls: ['./configure-controls-modal.component.scss']
})
export class ConfigureControlsModalComponent implements OnInit {

  formFields;
  titleOptions = titleOptionsConstant;
  columnDefs;
  gridApi: GridApi;
  rowData;
  gridOptions;

  loadTeam = false;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  frameworkComponents;
  context;

  constructor(
    public modalRef: MDBModalRef,
    private modalService: MDBModalService
  ) {
    this.columnDefs = [
      {
        "headerName": "Sl No",
        "field": "sno",
      },
      {
        "headerName": "Control Label",
        "field": "contl_lbl",
      },{
        "headerName": "Control Type",
        "field": "cntrl_type",
      },{
        "headerName": "Mandatory",
        "field": "mandatory",
      },{
        "headerName": "Values",
        "field": "values",
      },{
        "headerName": "State",
        "field": "state",
      },{
        headerName: "",
        field: "value",
        cellRenderer: "deleteRenderer",
        colId: "params",
        width: 50,
        sortable: false,
        cellStyle: { "overflow": 'visible' }
      }
    ]

    this.rowData = [
      {
        "id": 1,
        "sno":"1",
        "contl_lbl": "Strength and Units", "cntrl_type": "Dropdown","values":"mg, grams, ml","mandatory":"yes","state":"Active"
      }
    ]

    this.gridOptions = {
      pagination: true,
      rowSelection: 'single',
      rowHeight: 32,

      defaultColDef: {
        sortable: true,
        suppressNavigable: true,
        cellClass: 'no-border',
        suppressMovable: true,

      }
    }

    this.context = { componentParent: this };
    this.frameworkComponents = {
      deleteRenderer: EditAndDeleteOperationsRenderer
    };  
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadTeam = true;
    }, 350);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
      this.gridApi.startEditingCell(params);
    }, 500);
  }

  addRow() {
    this.modalService.show(ConfigureControlsAddComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-sm modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
  }

  onSetGridApi(gridApi) {
    this.gridApi = gridApi;
  }


}
