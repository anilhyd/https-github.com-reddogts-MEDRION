import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstStudyTeamTeamViewModalComponent } from './ist-study-team-team-view-modal/ist-study-team-team-view-modal.component';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { IstStudyTeamOrganizationViewModalComponent } from '../ist-study-team-organization/ist-study-team-organization-view-modal/ist-study-team-organization-view-modal.component';

@Component({
  selector: 'app-ist-study-team-team',
  templateUrl: './ist-study-team-team.component.html',
  styleUrls: ['./ist-study-team-team.component.scss']
})
export class IstStudyTeamTeamComponent implements OnInit {

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
    this.criteriaService.getStudyTeamTeamCriteria().subscribe(criteria => {
      
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
    this.modalService.show(IstStudyTeamTeamViewModalComponent, {
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

  add_open_form(){
    this['self'].router.navigate(['/home/ist/applications/application-ext/:1/study_team_team_request/study_team_team_request/:1'],{skipLocationChange:true})
  }

  add() {
    let modalRef = this['self'].modalService.show(IstStudyTeamTeamViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(IstStudyTeamTeamViewModalComponent, {
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
    //this['self'].summaryService.deleteMilestonesSummary(this['self'].selectedRow.id).subscribe(result => {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
      this['self'].setSummary();
    //})
  }

  add_org(){
    let modalRef = this['self'].modalService.show(IstStudyTeamOrganizationViewModalComponent, {
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

  setSummary() {
    this.summaryService.getStudyTeamTeamSummary().subscribe(summary => {
      this.rowData = summary
    });
  }

}
