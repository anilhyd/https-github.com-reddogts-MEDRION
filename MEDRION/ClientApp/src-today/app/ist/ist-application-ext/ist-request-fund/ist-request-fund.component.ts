import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstRequestFundViewModalComponent } from './ist-request-fund-view-modal/ist-request-fund-view-modal.component';
import { IstRequestFundAllocationModalComponent } from './ist-request-fund-allocation-modal/ist-request-fund-allocation-modal.component';
import { IstRequestFundReturnOrRetrieveModalComponent } from './ist-request-fund-return-or-retrieve-modal/ist-request-fund-return-or-retrieve-modal.component';
import { IstRequestFundBankAccountsModalComponent } from './ist-request-fund-bank-accounts-modal/ist-request-fund-bank-accounts-modal.component';
import * as forEach from 'lodash/forEach';
import { IstRequestFundUpdateUsageModalComponent } from './ist-request-fund-update-usage-modal/ist-request-fund-update-usage-modal.component';

@Component({
  selector: 'app-ist-request-fund',
  templateUrl: './ist-request-fund.component.html',
  styleUrls: ['./ist-request-fund.component.scss']
})
export class IstRequestFundComponent implements OnInit {

  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  advanceSearch;
  rowData;
  modalRef: MDBModalRef;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getRequestFundCriteria().subscribe(criteria => {
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
    this.modalService.show(IstRequestFundViewModalComponent, {
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

  add() {
    let modalRef = this['self'].modalService.show(IstRequestFundViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
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
    let modalRef = this['self'].modalService.show(IstRequestFundViewModalComponent, {
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
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Delete', content: { heading: '', description: 'The Request ID REQ-001 has been Deleted.' } } });
      this['self'].setSummary();
    //})
  }

  approve() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Approve', content: { heading: '', description: 'The Request ID REQ-001 has been Approved.' } } });
      this['self'].setSummary();
    //})
  }

  reject() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Reject', content: { heading: '', description: 'The Request ID REQ-001 has been Rejected.' } } });
      this['self'].setSummary();
    //})
  }

  close() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Close', content: { heading: '', description: 'The Request ID REQ-001 has been Closed.' } } });
      this['self'].setSummary();
    //})
  }

  allocate(){
    this['self'].modalService.show(IstRequestFundAllocationModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Fund Allocation',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  return(){
    this['self'].modalService.show(IstRequestFundReturnOrRetrieveModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Return',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  retrieve(){
    this['self'].modalService.show(IstRequestFundReturnOrRetrieveModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Retrieve',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  bank_account(){
    this['self'].modalService.show(IstRequestFundBankAccountsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add bank',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  update_usage(){
    this['self'].modalService.show(IstRequestFundUpdateUsageModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Update Fund Usage',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  setSummary() {
    this.summaryService.getRequestFundSummary().subscribe(summary => {
      if(summary && summary.length){
        let result = [];
        forEach(summary, (summaryData)=>{
          result.push(summaryData.add_details);
        });
        this.rowData = result;
      }
    });
  }

}
