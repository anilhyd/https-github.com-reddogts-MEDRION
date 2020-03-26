import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { AllRequestsViewModalComponent } from './all-requests-view-modal/all-requests-view-modal.component';
import { FundRequestModalComponent } from './fund-request-modal/fund-request-modal.component';
import { IstRequestFundAllocationModalComponent } from '../ist-request-fund/ist-request-fund-allocation-modal/ist-request-fund-allocation-modal.component';
import { IstRequestFundReturnOrRetrieveModalComponent } from '../ist-request-fund/ist-request-fund-return-or-retrieve-modal/ist-request-fund-return-or-retrieve-modal.component';
import { IstRequestFundBankAccountsModalComponent } from '../ist-request-fund/ist-request-fund-bank-accounts-modal/ist-request-fund-bank-accounts-modal.component';
import { IstRequestFundUpdateUsageModalComponent } from '../ist-request-fund/ist-request-fund-update-usage-modal/ist-request-fund-update-usage-modal.component';
import { ReturnRetrivalModalComponent } from './return-retrival-modal/return-retrival-modal.component';
import { FundReturnRetrivalModalComponent } from './fund-return-retrival-modal/fund-return-retrival-modal.component';


@Component({
  selector: 'app-ist-all-requests',
  templateUrl: './ist-all-requests.component.html',
  styleUrls: ['./ist-all-requests.component.scss']
})
export class IstAllRequestsComponent implements OnInit {

 
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
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getAllRequestsCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return (operation && (operation.id === 'add' || operation.id === 'view_modal')) ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.setSummary();
      if(window && window['moduleType'] && window['moduleType'] == "eap"){
        this.operations.map((columnDef,i)=>{
          if(columnDef.name === "Add Fund Request"){
            delete this.operations[i]
          }
        })
      }
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
    this.modalService.show(AllRequestsViewModalComponent, {
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

  add_product_request() {
    let modalRef = this['self'].modalService.show(AllRequestsViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(AllRequestsViewModalComponent, {
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
  

  setSummary() {
    this.summaryService.getAllRequestsSummary().subscribe(summary => {
      if(summary){
       if(window['moduleType']==='eap'){
         this.rowData = summary.eap;
       } else{
        this.rowData = summary.ist;
       }
      }
    });
  }
  add_fund_request(){
    let modalRef = this['self'].modalService.show(FundRequestModalComponent, {
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

  view_fund_request(){
    let modalRef = this['self'].modalService.show(FundRequestModalComponent, {
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
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Delete', content: { heading: '', description: 'The product request has been Deleted.' } } });
      this['self'].setSummary();
    //})
  }

  approve() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { 
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        animated: true,
        data: { heading: 'Approve', content: { heading: '', description: 'The product request has been Approved.' } } });
      this['self'].setSummary();
    //})
  }

  reject() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { 
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        animated: true,
        data: { heading: 'Reject', content: { heading: '', description: 'The product request has been Rejected.' } } });
      this['self'].setSummary();
    //})
  }

  withdraw() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { 
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        animated: true,
        data: { heading: 'Withdraw', content: { heading: '', description: 'The product request has been Withdrawn.' } } });
      this['self'].setSummary();
    //})
  }

  

  close() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        animated: true,
        data: { heading: 'Close', content: { heading: '', description: 'The product request has been closed.' } } });
      this['self'].setSummary();
    //})
  }

  allocate(){
    this['self'].modalRef = this['self'].modalService.show(AllRequestsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content:  { id: this['self'].selectedRow['id'] }
      }
    });
  }

  returnProduct(){
    this['self'].modalRef = this['self'].modalService.show(AllRequestsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content:  { id: this['self'].selectedRow['id'] }
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
    this['self'].modalService.show(ReturnRetrivalModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: null,
        content: null
      }
    });
  }

  retrieve_fund(){
    this['self'].modalService.show(FundReturnRetrivalModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: null,
        content: null
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

  update(){
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

  

}
