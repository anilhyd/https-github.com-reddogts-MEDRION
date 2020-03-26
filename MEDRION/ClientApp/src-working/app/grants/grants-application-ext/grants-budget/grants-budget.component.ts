import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridApi } from "ag-grid-community";

import { GrantsCriteriaService } from "src/app/services/grants/grants-criteria.service";
import { GrantsSummaryService } from "src/app/services/grants/grants-summary.service";

import { MDBModalRef, MDBModalService } from "ng-uikit-pro-standard";
import { Subject } from "rxjs";

import { MessageBoxComponent } from "src/app/common/message-box/message-box.component";
import { DeleteBoxComponent } from "src/app/common/delete-box/delete-box.component";
import { GrantsBudgetViewModalComponent } from './grants-budget-view-modal/grants-budget-view-modal.component';
import { GrantsBudgetAllocateComponent } from './grants-budget-allocate/grants-budget-allocate.component';
import { GrantsBudgetViewBudgetRequestComponent } from './grants-budget-view-budget-request/grants-budget-view-budget-request.component';
import { RejectComponent } from 'src/app/common/reject/reject.component';


@Component({
  selector: 'app-grants-budget',
  templateUrl: './grants-budget.component.html',
  styleUrls: ['./grants-budget.component.scss']
})
export class GrantsBudgetComponent implements OnInit {

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
    this.criteriaService.getBudgetCriteria().subscribe(criteria => {
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
    this.modalService.show(GrantsBudgetViewBudgetRequestComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: "modal-lg modal-full-height modal-right",
      animated: true
    });
  }

  add() {
    let modalRef = this["self"].modalService.show(
      GrantsBudgetViewModalComponent,
      {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: "modal-lg modal-full-height modal-right",
        animated: true,
        data: {
          heading: "Add",
          content: null
        }
      });
      modalRef.content.action.subscribe(result=>{
        this['self'].setSummary();
      }) 
    }

    edit() {
      let modalRef = this['self'].modalService.show(GrantsBudgetViewModalComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-lg modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Edit',
          content: { id: this['self'].selectedRow['id'] }
        }
      });
      modalRef.content.action.subscribe(result=>{
        this['self'].setSummary();
      })
    } 

    allocate() {
      let modalRef = this["self"].modalService.show(
        GrantsBudgetAllocateComponent,
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

   
    setSummary() {
      this.summaryService.getBudgetSummary().subscribe(summary => {
        this.rowData = summary
      });
    }

    approve() {
        this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { 
          backdrop: true,
          keyboard: false,
          ignoreBackdropClick: true,
          class:'modal-sm modal-full-height modal-right',
          animated: true,
          data: { heading: 'Approve', content: { heading: '', description: 'The Request ID REQ-001 has been Approved.' } } });
        this['self'].setSummary();
      //})
    }
  
    reject() {
        this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { 
          backdrop: true,
          keyboard: false,
          ignoreBackdropClick: true,
          class:'modal-sm modal-full-height modal-right',
          animated: true,
          data: { heading: 'Reject', content: { heading: '', description: 'The Request ID REQ-001 has been Rejected.' } } });
        this['self'].setSummary();
      //})
    }

}
