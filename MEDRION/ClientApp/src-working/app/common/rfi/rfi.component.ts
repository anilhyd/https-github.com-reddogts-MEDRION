import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { CommonCriteriaService } from 'src/app/services/common/common-criteria.service';
import { CommonSummaryService } from 'src/app/services/common/common-summary.service';
import { RfiViewModalComponent } from './rfi-view-modal/rfi-view-modal.component';
import { DeleteBoxComponent } from '../delete-box/delete-box.component';
import { RfiAddModalComponent } from './rfi-add-modal/rfi-add-modal.component';

@Component({
  selector: 'app-rfi',
  templateUrl: './rfi.component.html',
  styleUrls: ['./rfi.component.scss']
})
export class RfiComponent implements OnInit {

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
    private criteriaService: CommonCriteriaService,
    private summaryService: CommonSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getRfiCriteria().subscribe(criteria => {
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
    this.modalService.show(RfiViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  add() {
    let modalRef = this['self'].modalService.show(RfiAddModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: { id: 1 }
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  edit() {
    let modalRef = this['self'].modalService.show(RfiViewModalComponent, {
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

  update_status() {
    //this['self'].summaryService.deleteMilestonesSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Update Status', content: { heading: '', description: 'Do you want to close the RFI?.' } } });
    //})
  }
  
  submit_response() {
    //this['self'].summaryService.deleteMilestonesSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Submit Response', content: { heading: '', description: 'Do you want to Submit the RFI?.' } } });
    //})
  }

  delete() {
    //this['self'].summaryService.deleteMilestonesSummary(this['self'].selectedRow.id).subscribe(result => {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
      this['self'].setSummary();
    //})
  }

  setSummary() {
    this.summaryService.getRfiSummary().subscribe(summary => {
      this.rowData = summary
    });
  }
}
