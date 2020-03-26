import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';


import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject, from } from 'rxjs';

import { IstSiteEvaluationViewModalComponent } from './ist-site-evaluation-view-modal/ist-site-evaluation-view-modal.component';
import { IstSiteEvaluationUpdateStatusComponent } from './ist-site-evaluation-update-status/ist-site-evaluation-update-status.component';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';

@Component({
  selector: 'app-ist-site-evluation',
  templateUrl: './ist-site-evluation.component.html',
  styleUrls: ['./ist-site-evluation.component.scss']
})
export class IstSiteEvluationComponent implements OnInit {

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
  ) { }

  ngOnInit() {
    this.criteriaService.getSiteEvaluationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return (operation && (operation.id === 'add' || operation.id === 'view_modal')) ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.setSummary()
    });
  }


  onSetGridApi(gridApi) {
    this.gridApi = gridApi;
  }

  onCallbackOperation(opr) {
    opr.callback();
  }

  onSelectionChanged(event) {
    this.selectedRow = this.gridApi.getSelectedRows() ? this.gridApi.getSelectedRows()[0] : null;
  }

  onRowDoubleClicked(event) {
    this.modalService.show(IstSiteEvaluationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  statusUpdate() {
    let modalRef = this['self'].modalService.show(IstSiteEvaluationUpdateStatusComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true
    });
  }

  add() {
    let modalRef = this['self'].modalService.show(IstSiteEvaluationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
    modalRef.content.action.subscribe(result => {
      this['self'].setSummary();
    })
  }


  edit() {
    let modalRef = this['self'].modalService.show(IstSiteEvaluationViewModalComponent, {
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
    modalRef.content.action.subscribe(result => {
      this['self'].setSummary();
    })
  }

  view() {
    this['self'].modalService.show(IstSiteEvaluationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  };

  setSummary() {
    this.summaryService.getSiteEvaluationSummary().subscribe(summary => {
      this.rowData = summary
    });
  }

}
