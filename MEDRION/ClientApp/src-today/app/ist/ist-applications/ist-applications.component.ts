import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignDialogComponent } from 'src/app/common/assign-dialog/assign-dialog.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { RouteComponent } from 'src/app/common/route/route.component';
import { RejectComponent } from 'src/app/common/reject/reject.component';

@Component({
  selector: 'app-ist-applications',
  templateUrl: './ist-applications.component.html',
  styleUrls: ['./ist-applications.component.scss']
})
export class IstApplicationsComponent implements OnInit {

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
    this.criteriaService.getApplicationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.caseDetails = criteria.caseDetails;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getApplicationSummary().subscribe(summary=>{
        this.rowData = summary;
      });
    })
  }

  onSetGridApi(gridApi){
    this.gridApi = gridApi;
  }

  

  onCallbackOperation(opr){
    opr.callback();
  }

  onSelectionChanged(event){
    this.selectedRow = this.gridApi.getSelectedRows()?this.gridApi.getSelectedRows()[0]:null;
  }

  onRowDoubleClicked(event){
    this.router.navigate(['/home/ist/applications/application-ext/:'+ this.selectedRow['id']+'/general_information_request'], {skipLocationChange:true, queryParams:{id:this.selectedRow['id'], app_ext:true, module:"ist", screen_type:"applications" }})
    // let url = location.href.split('/');
    // window.open(url[0]+'//'+url[2]+'/home/ist/applications/application-ext/:'+this.selectedRow['id']+'/general_information_request');
  }  
  
  assign() {
    let users = [
      { value: '1', label: 'James Johnson' },
      { value: '2', label: 'Maria Rodriguez' },
      { value: '3', label: 'David Hernandez' },
      { value: '4', label: 'Micheal Smith' },
      { value: '5', label: 'John Williams' },
      { value: '6', label: 'Clara Clark' },
      { value: '7', label: 'Tony Taylor' },
      { value: '8', label: 'Henry Davis' },
    ]
    this['self'].modalRef = this['self'].modalService.show(AssignDialogComponent,
      {
        class: 'modal-md modal-full-height modal-right',
        data: {
          content: { users: users }
        }
      });
  }
  
  routeModal() {
      this['self'].modalService.show(RouteComponent,{class: 'modal-md modal-full-height modal-right'});
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
}






