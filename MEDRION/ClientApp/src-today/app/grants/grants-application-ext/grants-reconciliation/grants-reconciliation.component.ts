import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridApi } from "ag-grid-community";

import { GrantsCriteriaService } from "src/app/services/grants/grants-criteria.service";
import { GrantsSummaryService } from "src/app/services/grants/grants-summary.service";

import { MDBModalRef, MDBModalService } from "ng-uikit-pro-standard";
import { Subject } from "rxjs";

import { MessageBoxComponent } from "src/app/common/message-box/message-box.component";
import { DeleteBoxComponent } from "src/app/common/delete-box/delete-box.component";
import { GrantsBudgetRecordExpenditureComponent } from './grants-budget-record-expenditure/grants-budget-record-expenditure.component';


@Component({
  selector: 'app-grants-reconciliation',
  templateUrl: './grants-reconciliation.component.html',
  styleUrls: ['./grants-reconciliation.component.scss']
})
export class GrantsReconciliationComponent implements OnInit {

  
  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  rowData;
  advanceSearch;
  modalRef: MDBModalRef;


  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.criteriaService.getReconciliationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return operation &&
          (operation.id === "add" || operation.id === "view_modal")
          ? {
              name: operation.name,
              callback: this[operation.id],
              self: this,
              disabled: "false"
            }
          : { name: operation.name, callback: this[operation.id], self: this };
      });
      this.setSummary();
    });
  }

  onSetGridApi(gridApi) {
    this.gridApi = gridApi;
  }

  onCallbackOperation(opr) {
    opr.callback();
  }

  onSelectionChanged(event) { 
    this.selectedRow = this.gridApi.getSelectedRows()
      ? this.gridApi.getSelectedRows()[0]
      : null;
  }

  onRowDoubleClicked(event) {
    this.modalService.show(GrantsBudgetRecordExpenditureComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: "modal-lg modal-full-height modal-right",
      animated: true
    });
  }

  
    markExpenditure() {
      let modalRef = this["self"].modalService.show(
        GrantsBudgetRecordExpenditureComponent,
        {
          backdrop: true,
          keyboard: false,
          ignoreBackdropClick: true,
          class: "modal-lg modal-full-height modal-right",
          animated: true,
        });
        modalRef.content.action.subscribe(result=>{
          this['self'].setSummary();
        }) 
    }
  
    delete() {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
    }

    close(){
      
    }

   
    setSummary() {
      this.summaryService.getReconciliationSummary().subscribe(summary => {
        this.rowData = summary
      });
    }

}