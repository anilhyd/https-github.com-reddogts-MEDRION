import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { authTypeOptionsConstant } from 'src/app/constants/service.constants';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { FormGroup } from '@angular/forms';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { DeleteOperationsRenderer } from 'src/app/common/client-grid/delete-operations.component';
import { GridApi } from 'ag-grid-community';
import { DocumentTypeAddComponent } from 'src/app/common/document-type-add/document-type-add.component';

@Component({
  selector: 'app-eap-type-view',
  templateUrl: './eap-type-view.component.html',
  styleUrls: ['./eap-type-view.component.scss']
})
export class EapTypeViewComponent implements OnInit {

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

  content: any;
  heading: string;
  formFields;
  chooseoptions = authTypeOptionsConstant;
  eapTypeViewForm = new FormGroup({});
  operations = [];

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService,
    public modalRef: MDBModalRef,
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

  ngOnInit() {
    this.criteriaService.getEapTypeCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.eapTypeViewForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getEapTypeSummary(this.content.id).subscribe((result) => {
          this.eapTypeViewForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getEapTypeSummary(this.content.id).subscribe((result) => {
          this.eapTypeViewForm.patchValue(result);
          this.eapTypeViewForm.disable();
        })
      }
    });

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

  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;

  onGridReady(params) {
    this.gridApi = params.api;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
      this.gridApi.startEditingCell(params);
    }, 500);
  }

  deleteRow(){
    
  }

}
