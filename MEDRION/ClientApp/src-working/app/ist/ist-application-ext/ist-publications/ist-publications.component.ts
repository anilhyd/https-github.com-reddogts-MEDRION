import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstPublicationsViewModalComponent } from './ist-publications-view-modal/ist-publications-view-modal.component';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';

@Component({
  selector: 'app-ist-publications',
  templateUrl: './ist-publications.component.html',
  styleUrls: ['./ist-publications.component.scss']
})
export class IstPublicationsComponent implements OnInit {

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
  ) {
  }

  ngOnInit() {
    this.criteriaService.getPublicationsCriteria().subscribe(criteria => {
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
    this.modalService.show(IstPublicationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  add() {
    let modalRef = this['self'].modalService.show(IstPublicationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  edit() {
    let modalRef = this['self'].modalService.show(IstPublicationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
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
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
      this['self'].setSummary();
    //})
  }

  setSummary() {
    this.summaryService.getPublicationsSummary().subscribe(summary => {
      this.rowData = summary
    });
  }

}
