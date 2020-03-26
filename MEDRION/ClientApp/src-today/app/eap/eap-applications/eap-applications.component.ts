import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignDialogComponent } from 'src/app/common/assign-dialog/assign-dialog.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { printMessage } from 'src/app/constants/service.constants';
import { EapCriteriaService } from 'src/app/services/eap/eap-criteria.service';
import { EapSummaryService } from 'src/app/services/eap/eap-summary.service';

import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { WithdrawComponent } from 'src/app/common/withdraw/withdraw.component';
import { RejectComponent } from 'src/app/common/reject/reject.component';
import { RouteComponent } from 'src/app/common/route/route.component';
import { ReturnComponent } from 'src/app/common/return/return.component';

@Component({
  selector: 'app-eap-applications',
  templateUrl: './eap-applications.component.html',
  styleUrls: ['./eap-applications.component.scss']
})
export class EapApplicationsComponent implements OnInit {

  gridApi: GridApi;
  columnDefs;
  operations;
  rowData;
  advanceSearch;
  selectedRow;
  caseDetails;

  modalRef: MDBModalRef;

  constructor(
    private router: Router,
    public routerr: ActivatedRoute,
    private criteriaService: EapCriteriaService,
    private summaryService: EapSummaryService,
    private modalService: MDBModalService,
  ) {

  }

  ngOnInit() {
    this.criteriaService.getApplicationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.caseDetails = criteria.caseDetails;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
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
    this.router.navigate(['/home/eap/applications/application-ext/:'+this.selectedRow['id']+'/program_info'], {skipLocationChange:true, queryParams:{module:"eap", id:this.selectedRow['id'], app_ext:true, screen_type:"applications"}})
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/eap/my-applications/application-ext/:' + this.selectedRow['id']+'/program_info');
  }

  assign() {
    this['self'].modalRef = this['self'].modalService.show(AssignDialogComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  print() {
    this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {
      data: {
        operation: { hasOpr: false },
        heading: 'Print Application',
        content: { heading: '', description: printMessage }
      }
    });
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

  close(){

  }

  discard(){
    
  }
}
