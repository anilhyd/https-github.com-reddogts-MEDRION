import { Component, OnInit } from '@angular/core';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignDialogComponent } from 'src/app/common/assign-dialog/assign-dialog.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { RequestTypeModalComponent } from './request-type-modal/request-type-modal.component';

import { WithdrawComponent } from 'src/app/common/withdraw/withdraw.component';
import { RejectComponent } from 'src/app/common/reject/reject.component';
import { RouteComponent } from 'src/app/common/route/route.component';
import { ReturnComponent } from 'src/app/common/return/return.component';

@Component({
  selector: 'app-grants-applications',
  templateUrl: './grants-applications.component.html',
  styleUrls: ['./grants-applications.component.scss']
})
export class GrantsApplicationsComponent implements OnInit {

  gridApi: GridApi;
  columnDefs;
  operations;
  rowData;
  advanceSearch;
  selectedRow;
  caseDetails

  modalRef: MDBModalRef;

  constructor(
    private router: Router,
    public routerr: ActivatedRoute,
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    private modalService: MDBModalService
  ) {

  }

  ngOnInit() {
    this.criteriaService.getApplicationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.caseDetails = criteria.caseDetails;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === '' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getApplicationSummary().subscribe(summary => {
        this.rowData = summary;
      });
    })
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
    this.router.navigate(['/home/grants/applications/application-ext/:'+ this.selectedRow['id']+'/general_information'], {skipLocationChange:true, queryParams:{module:"grants", id:this.selectedRow['id'], app_ext:true, screen_type:"applications"}})
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/grants/applications/application-ext/:' + this.selectedRow['id'] + '/general_information');
  }

  assign() {
    this['self'].modalRef = this['self'].modalService.show(AssignDialogComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  add() {
    this['self'].modalRef = this['self'].modalService.show(RequestTypeModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        id: this["self"].selectedRow['application_id']
      }
    });
    //this['self'].modalRef = this['self'].modalService.show(RequestTypeModalComponent,{class: 'modal-md modal-full-height modal-right'});


    // let url = location.href.split('/');
    // window.open(url[0]+'//'+url[2]+'/home/grants/applications/application-ext/:'+this["self"].selectedRow['id']+'/general_information');
  }

  edit() {
    this["self"].router.navigate(['/home/grants/my-applications/application-ext/:'+ this["self"].selectedRow['application_id']+'/general_information'], {skipLocationChange:true, queryParams:{module:"grants", id:this['self'].selectedRow['id'], app_ext:true, screen_type:"applications"}})
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/grants/applications/application-ext/:' + this["self"].selectedRow['id'] + '/general_information');
  }

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  }

  route() {
    this['self'].modalService.show(RouteComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  return() {
    this['self'].modalService.show(ReturnComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  reject() {
    let modalRef = this['self'].modalService.show(RejectComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Reject',
        content: null
      }
    });
  }

  onHold() {
    let modalRef = this['self'].modalService.show(RejectComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'On-Hold',
        content: null
      }
    });
  }

  release() {
    let modalRef = this['self'].modalService.show(RejectComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Release',
        content: null
      }
    });
  }

  withdraw() {
    this['self'].modalService.show(WithdrawComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  open(){

  }

  close(){

  }

  discard(){
    
  }

}
