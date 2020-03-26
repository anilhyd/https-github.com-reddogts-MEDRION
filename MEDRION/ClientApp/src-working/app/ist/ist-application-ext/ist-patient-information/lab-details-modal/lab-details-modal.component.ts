import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { LabDetailsViewModalComponent } from './lab-details-view-modal/lab-details-view-modal.component';
import { GridApi } from 'ag-grid-community';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';

@Component({
  selector: 'app-lab-details-modal',
  templateUrl: './lab-details-modal.component.html',
  styleUrls: ['./lab-details-modal.component.scss']
})
export class LabDetailsModalComponent implements OnInit {

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
        "headerName": "Test Name",
        "field": "test_name"
      },
      {
        "name": "Test Result",
        "field": "test_result"
      },
      {
        "headerName": "Unit",
        "field": "result_unit"
      },
      {
        "headerName": "Test Date",
        "field": "test_date"
      },
      {
        "headerName": "Normal Range",
        "field": "normal_range"
      },
      {
        "headerName": "Unit",
        "field": "range_unit"
      },
      {
        "headerName": "Comment",
        "field": "comment"
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
        "test_name": "Red blood cell count",
        "test_result": "4.2",
        "result_unit": "trillion cells/L",
        "test_date": "22-Feb-2020",
        "normal_range": "3.92-5.13",
        "range_unit": "trillion cells/L",
        "comment": "",
        "notes": "Hematocrit, White blood cells and platelet counts are abnormal."
      },
      {
        "id": 2,
        "test_name": "Hemoglobin",
        "test_result": "12",
        "result_unit": "grams/dL",
        "test_date": "23-Feb-2020",
        "normal_range": "11.6-15",
        "range_unit": "grams/dL",
        "comment": "",
        "notes": ""
      },
      {
        "id": 3,
        "test_name": "Hematocrit",
        "test_result": "30",
        "result_unit": "Percent",
        "test_date": "24-Feb-2020",
        "normal_range": "35.5-44.9",
        "range_unit": "Percent",
        "comment": "",
        "notes": ""
      },
      {
        "id": 4,
        "test_name": "White blood cell count",
        "test_result": "2.5",
        "result_unit": "Billion Cells/L",
        "test_date": "25-Feb-2020",
        "normal_range": "3.4 - 9.6",
        "range_unit": "Billion Cells/L",
        "comment": "",
        "notes": ""
      },
      {
        "id": 5,
        "test_name": "Platelet count",
        "test_result": "110",
        "result_unit": "Billion /L",
        "test_date": "26-Feb-2020",
        "normal_range": "135 - 317",
        "range_unit": "Billion /L",
        "comment": "",
        "notes": ""
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


  addLabDetail() {
    this.modalService.show(LabDetailsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true
    });
  }
}
