import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import * as find from  'lodash/find'; 
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UmOrganizationViewModalComponent } from './um-organization-view-modal/um-organization-view-modal.component';
import { UmOrganizationPasswordPolicyViewModalComponent } from './um-organization-password-policy-view-modal/um-organization-password-policy-view-modal.component';

@Component({
  selector: 'app-um-organization',
  templateUrl: './um-organization.component.html',
  styleUrls: ['./um-organization.component.scss']
})
export class UmOrganizationComponent implements OnInit {

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
    private criteriaService: UmCriteriaService,
    private summaryService: UmSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getOrgCriteria().subscribe(criteria=>{
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation=>{
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }    
      });
      this.setSummary();
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
    this.modalService.show(UmOrganizationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['_id'] }
      }
    });
  }
  
  add() {
    let modalRef = this['self'].modalService.show(UmOrganizationViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(UmOrganizationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Edit',
        content: { id: this['self'].selectedRow['_id'] }
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }
  
  delete() {
    this['self'].summaryService.deleteOrgSummary(this['self'].selectedRow._id).subscribe(result=>{
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Delete',content: { heading: '', description: 'Selected Records has been deleted.'}}});
      this['self'].setSummary();
    })    
  }

  active() {
    this['self'].selectedRow.org_status = "Active";
    this['self'].summaryService.editOrgSummary(this['self'].selectedRow._id, this['self'].selectedRow).subscribe(result=>{
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Active',content: { heading: '', description: 'Selected Records has been made Active.'}}});
      this['self'].setSummary();
    })    
  }

  inactive() {
    this['self'].selectedRow.org_status = "InActive";
    this['self'].summaryService.editOrgSummary(this['self'].selectedRow._id, this['self'].selectedRow).subscribe(result=>{
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Inactive',content: { heading: '', description: 'Selected Records has been made Inactive.'}}});
      this['self'].setSummary();
    })    
  }

  password_policy(){
    this['self'].modalRef = this['self'].modalService.show(UmOrganizationPasswordPolicyViewModalComponent, {class:'modal-llg modal-full-height modal-right', data:{heading:'Password Policy', content: { heading: '', description: 'Work in Progress'}}});
  }

  setSummary(){
    this.summaryService.getOrgSummary().subscribe(summary=>{
      this.rowData = summary;
    });
  }
  
  

  

}
