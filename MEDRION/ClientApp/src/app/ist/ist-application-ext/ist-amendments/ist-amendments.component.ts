import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridApi } from "ag-grid-community";

import { IstCriteriaService } from "src/app/services/ist/ist-criteria.service";
import { IstSummaryService } from "src/app/services/ist/ist-summary.service";

import { MDBModalRef, MDBModalService } from "ng-uikit-pro-standard";
import { Subject } from "rxjs";

import { IstAmendmentsViewModalComponent } from "./ist-amendments-view-modal/ist-amendments-view-modal.component";
import { MessageBoxComponent } from "src/app/common/message-box/message-box.component";
import { DeleteBoxComponent } from "src/app/common/delete-box/delete-box.component";

@Component({
  selector: "app-ist-amendments",
  templateUrl: "./ist-amendments.component.html",
  styleUrls: ["./ist-amendments.component.scss"]
})
export class IstAmendmentsComponent implements OnInit {
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
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService
  ) {}

  ngOnInit() {
    this.criteriaService.getAmendmentsCriteria().subscribe(criteria => {
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
    this.modalService.show(IstAmendmentsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: "modal-vlg modal-full-height modal-right",
      animated: true,
      data: {
        heading: "View",
        content: { id: this.selectedRow["id"] }
      }
    });
  }

  add() {
    let modalRef = this["self"].modalService.show(
      IstAmendmentsViewModalComponent,
      {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: "modal-vlg modal-full-height modal-right",
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
      let modalRef = this['self'].modalService.show(IstAmendmentsViewModalComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class:'modal-vlg modal-full-height modal-right',
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
      // this["self"].modalRef = this["self"].modalService.show(
      //   MessageBoxComponent,
      //   {
      //     data: {
      //       heading: "Delete",
      //       content: {
      //         operation: { label: "YES", hasConfirm: true },
      //         heading: "",
      //         description:
      //           "Selected Record(s) will be deleted. Do you want to proceed?",
      //         message: "Selected Record(s) has been Deleted"
      //       }
      //     }
      //   }
      // );
    }

   
    setSummary() {
      this.summaryService.getAmendmentsSummary().subscribe(summary => {
        this.rowData = summary
      });
    }
}
