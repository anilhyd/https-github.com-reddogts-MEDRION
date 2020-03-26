import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { IstRegistrationsViewModalComponent } from './ist-registrations-view-modal/ist-registrations-view-modal.component';
import { MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ist-registrations',
  templateUrl: './ist-registrations.component.html',
  styleUrls: ['./ist-registrations.component.scss']
})
export class IstRegistrationsComponent implements OnInit {

  gridApi: GridApi;
  columnDefs;
  operations;
  rowData;
  advanceSearch;
  selectedRow;
  caseDetails;
  moduleType = "IST";

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService,
    private activatedRoute: ActivatedRoute
  ) {
    // let url = window.location.href;
    // if(url && url.indexOf('eap')>-1){
    //   this.moduleType = "EAP";
    // }
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.screenName === 'eapRegistrations'){
        this.moduleType = "EAP";
      }else{
        this.moduleType = "IST";
      }
    })
  }

  ngOnInit() {
    this.criteriaService.getRegistrationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.caseDetails = criteria.caseDetails;
      this.advanceSearch = criteria.advanceSearch;
      this.summaryService.getRegistrationSummary().subscribe(summary=>{
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
    this.modalService.show(IstRegistrationsViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(IstRegistrationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Enroll your',
        content: null
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

}

