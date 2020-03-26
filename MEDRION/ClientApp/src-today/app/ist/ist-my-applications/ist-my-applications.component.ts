import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AssignDialogComponent } from 'src/app/common/assign-dialog/assign-dialog.component';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { printMessage } from 'src/app/constants/service.constants';
import { RejectComponent } from 'src/app/common/reject/reject.component';
import { RouteComponent } from 'src/app/common/route/route.component';
import { ReturnComponent } from 'src/app/common/return/return.component';
import { IstUserInstructionsModalComponent } from './ist-user-instructions-modal/ist-user-instructions-modal.component';
import { WithdrawComponent } from 'src/app/common/withdraw/withdraw.component';

@Component({
  selector: 'app-ist-my-applications',
  templateUrl: './ist-my-applications.component.html',
  styleUrls: ['./ist-my-applications.component.scss']
})
export class IstMyApplicationsComponent implements OnInit {

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
    public route: ActivatedRoute,
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService
  ) {

  }

  ngOnInit() {
    this.criteriaService.getMyApplicationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.caseDetails = criteria.caseDetails;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getMyApplicationSummary().subscribe(summary => {
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
    this.router.navigate(['/home/ist/my-applications/application-ext/:'+ this.selectedRow['id']+'/general_information_request'], {skipLocationChange:true, queryParams:{id:this.selectedRow['id'], app_ext:true, module:"ist", screen_type:"my-applications" }})
    //let url = location.href.split('/');
    //window.open(url[0] + '//' + url[2] + '/home/ist/my-applications/application-ext/:' + this.selectedRow['id']+'/general_information_request');
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
  withdraw() {
    this['self'].modalService.show(WithdrawComponent,{class: 'modal-lg modal-full-height modal-right'});
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

  routeModal() {
    this['self'].modalService.show(RouteComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  return() {
    this['self'].modalService.show(ReturnComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  discard(){
    
  }

  add(){
  //  this['self'].modalService.show(IstUserInstructionsModalComponent,{class: 'modal-md modal-full-height modal-right'});

    this['self'].modalService.show(IstUserInstructionsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        id: this["self"].selectedRow['application_id']
      }
      // this['self'].router.navigateByUrl('/home/ist/my-applications/application-ext/:0/general_information_request', { queryParams:{id:0, app_ext:true, module:"IST" }});
    })
  }
}
