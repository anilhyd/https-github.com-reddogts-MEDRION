import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UmUserViewModalComponent } from './um-user-view-modal/um-user-view-modal.component';
import { UmUserMapUserViewModalComponent } from './um-user-map-user-view-modal/um-user-map-user-view-modal.component';
@Component({
  selector: 'app-um-user',
  templateUrl: './um-user.component.html',
  styleUrls: ['./um-user.component.scss']
})
export class UmUserComponent implements OnInit {

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
    this.criteriaService.getUserCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return (operation && (operation.id === 'add' || operation.id==='view_modal'))? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
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
    this.modalService.show(UmUserViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(UmUserViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(UmUserViewModalComponent, {
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
    this['self'].summaryService.deleteUserSummary(this['self'].selectedRow._id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Delete', content: { heading: '', description: 'Selected Records has been deleted.' } } });
      this['self'].setSummary();
    })
  }

  active() {
    this['self'].selectedRow.user_status = "Active";
    this['self'].summaryService.editUserSummary(this['self'].selectedRow._id, this['self'].selectedRow).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Active', content: { heading: '', description: 'Selected Records has been made Active.' } } });
      this['self'].setSummary();
    })
  }

  inactive() {
    this['self'].selectedRow.user_status = "InActive";
    this['self'].summaryService.editUserSummary(this['self'].selectedRow._id, this['self'].selectedRow).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Inactive', content: { heading: '', description: 'Selected Records has been made Inactive.' } } });
      this['self'].setSummary();
    })
  }

  map_roles() {
    this['self'].modalRef = this['self'].modalService.show(UmUserMapUserViewModalComponent, { 
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-llg modal-full-height modal-right',
      animated: true,
      data: { heading: 'Map Roles', content: { heading: ''} } });
  }

  first_time_login(){
    
  }

  setSummary() {
    this.summaryService.getUserSummary().subscribe(summary => {
      this.rowData = summary;
      this.rowData.map(rowData=>{
        if(rowData && rowData.user_type === true){
          rowData.user_type = "External";
        }else{
          rowData.user_type = "Internal";
        }
      })
    });
  }

}
