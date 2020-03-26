import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignDialogComponent } from 'src/app/common/assign-dialog/assign-dialog.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { printMessage } from 'src/app/constants/service.constants';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { WithdrawComponent } from 'src/app/common/withdraw/withdraw.component';
import { RejectComponent } from 'src/app/common/reject/reject.component';
import { RouteComponent } from 'src/app/common/route/route.component';
import { ReturnComponent } from 'src/app/common/return/return.component';
import { RequestTypeModalComponent } from '../grants-applications/request-type-modal/request-type-modal.component';

@Component({
  selector: 'app-grants-my-applications',
  templateUrl: './grants-my-applications.component.html',
  styleUrls: ['./grants-my-applications.component.scss']
})
export class GrantsMyApplicationsComponent implements OnInit {

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
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
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
    this.router.navigate(['/home/grants/my-applications/application-ext/:'+ this.selectedRow['id']+'/general_information'], {skipLocationChange:true, queryParams:{module:"grants", id:this.selectedRow['id'], app_ext:true, screen_type:"my-applications"}})
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/grants/my-applications/application-ext/:' + this.selectedRow['id']+'/general_information');
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

  add(){

    // Changed to
    this['self'].modalService.show(RequestTypeModalComponent,{class: 'modal-lg modal-full-height modal-right'});

    //Current
    //this['self'].router.navigateByUrl('/home/grants/my-applications/application-ext/:0/general_information');





    // let url = location.href.split('/');
    // window.open(url[0]+'//'+url[2]+'/home/grants/applications/application-ext/:'+this["self"].selectedRow['id']+'/general_information');
  }

  edit(){
    this['self'].router.navigateByUrl('/home/grants/my-applications/application-ext/:'+ this['self'].selectedRow['id']+'/general_information')
    // let url = location.href.split('/');
    // window.open(url[0]+'//'+url[2]+'/home/grants/applications/application-ext/:'+this["self"].selectedRow['id']+'/general_information');
  }

  delete(){
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
