import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridApi } from "ag-grid-community";

import { GrantsCriteriaService } from "src/app/services/grants/grants-criteria.service";
import { GrantsSummaryService } from "src/app/services/grants/grants-summary.service";

import { MDBModalRef, MDBModalService } from "ng-uikit-pro-standard";
import { Subject } from "rxjs";

import { MessageBoxComponent } from "src/app/common/message-box/message-box.component";
import { DeleteBoxComponent } from "src/app/common/delete-box/delete-box.component";
import { GrantsAudiencesViewModalComponent } from './grants-audiences-view-modal/grants-audiences-view-modal.component';

@Component({
  selector: 'app-grants-audiences',
  templateUrl: './grants-audiences.component.html',
  styleUrls: ['./grants-audiences.component.scss']
})
export class GrantsAudiencesComponent implements OnInit {
  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  rowData;
  modalRef: MDBModalRef;
  advanceSearch;


  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.criteriaService.getAudiencesCriteria().subscribe(criteria => {
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
    this.modalService.show(GrantsAudiencesViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: "modal-lg modal-full-height modal-right",
      animated: true,
      data: {
        heading: "View",
        content: { id: this.selectedRow["id"] }
      }
    });
  }

  add() {
    let modalRef = this["self"].modalService.show(
      GrantsAudiencesViewModalComponent,
      {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: "modal-lg modal-full-height modal-right",
        animated: true,
        data: {
          heading: "Create",
          content: null
        }
      });
      modalRef.content.action.subscribe(result=>{
        this['self'].setSummary();
      }) 
    }

    edit() {
      let modalRef = this['self'].modalService.show(GrantsAudiencesViewModalComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class:'modal-lg modal-full-height modal-right',
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
  
    delete() {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
    }

   
    setSummary() {
      this.summaryService.getAudiencesSummary().subscribe(summary => {
        this.rowData = summary
      });
    }
}
