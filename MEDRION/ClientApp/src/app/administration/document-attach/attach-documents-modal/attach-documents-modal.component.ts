import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { GridApi } from 'ag-grid-community';
import { DeleteOperationsRenderer } from 'src/app/common/client-grid/delete-operations.component';
import { DocumentTypeAddComponent } from 'src/app/common/document-type-add/document-type-add.component';

@Component({
  selector: 'app-attach-documents-modal',
  templateUrl: './attach-documents-modal.component.html',
  styleUrls: ['./attach-documents-modal.component.scss']
})
export class AttachDocumentsModalComponent implements OnInit {


  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;

  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) {
    this.columnDefs = [
      {
        "headerName": "Document Type",
        "field": "doc_type"
      },
      {
        "name": "Mandatory",
        "field": "mandatory"
      },
      {
        "headerName": "Supports Multiple Documents",
        "field": "sup_mul_doc"
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
      deleteRenderer: DeleteOperationsRenderer
    };  
  }

  onGridReady(params) {
    this.gridApi = params.api;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
      this.gridApi.startEditingCell(params);
    }, 500);
  }

  deleteRow(){

  }

  ngOnInit() {
    this.rowData = [
      {
        "id": 1,
        "doc_type": "Document 1", "mandatory": "Yes", "sup_mul_doc":"Yes"
      },
      {
        "id": 2,
        "doc_type": "Document 2", "mandatory": "Yes", "sup_mul_doc":"No"
      }
    ]

    setTimeout(() => {
      this.loadGrid = true;
    }, 350);
  }
  selectDocuments(event) {
    this.modalService.show(DocumentTypeAddComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data:{
        heading:"Add"
      }
    });
  }

}
