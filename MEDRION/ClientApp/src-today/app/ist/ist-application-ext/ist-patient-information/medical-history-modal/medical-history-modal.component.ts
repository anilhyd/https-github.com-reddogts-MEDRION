import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { MedicalHistoryViewModalComponent } from './medical-history-view-modal/medical-history-view-modal.component';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-medical-history-modal',
  templateUrl: './medical-history-modal.component.html',
  styleUrls: ['./medical-history-modal.component.scss']
})
export class MedicalHistoryModalComponent implements OnInit {

  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;
  
  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
    this.columnDefs = [
      {
        "headerName": "#",
        "field": "id"
      },
      {
        "name": "Medical History",
        "field": "medical_history"
      },
      {
        "headerName": "Start Date",
        "field": "start_date"
      },
      {
        "headerName": "Stop Date",
        "field": "stop_date"
      },
      {
        "headerName": "Ongoing",
        "field": "ongoing"
      },
      {
        "headerName": "Duration",
        "field": "duration"
      },{
        headerName: "Actions",
        field: "value",
        cellRenderer: "deleteRenderer",
        colId: "params",
        width: 100,
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
      deleteRenderer: EditAndDeleteOperationsRenderer
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
      this.gridApi.startEditingCell(params);
    }, 500);
  }

  ngOnInit() {

    this.rowData = [
      {
        "id": 1,
        "medical_history": "High Blood Pressure",
        "start_date": "22-Apr-2015",
        "stop_date": "_",
        "ongoing": "Checked",
        "duration": "-"
      },
      {
        "id": 2,
        "medical_history": "Diabetes",
        "start_date": "23-Sep-2010",
        "stop_date": "",
        "ongoing": "Checked",
        "duration": ""
      }
    ]

    setTimeout(() => {
      this.loadGrid = true;
    }, 350);

  }

  deleteRow(){

  }

  editRow(){
    
  }


  addMedicalHistory() {
    this.modalService.show(MedicalHistoryViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true
    });
  }
}
