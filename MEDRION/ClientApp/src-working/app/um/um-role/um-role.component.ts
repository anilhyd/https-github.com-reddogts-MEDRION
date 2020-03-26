import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UmRoleViewModalComponent } from './um-role-view-modal/um-role-view-modal.component';
import { UmRoleMapPrivilegesViewModalComponent } from './um-role-map-privileges-view-modal/um-role-map-privileges-view-modal.component';
import { UmRoleMapUsersViewModalComponent } from './um-role-map-users-view-modal/um-role-map-users-view-modal.component';

@Component({
  selector: 'app-um-role',
  templateUrl: './um-role.component.html',
  styleUrls: ['./um-role.component.scss']
})
export class UmRoleComponent implements OnInit {

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
    this.criteriaService.getRoleCriteria().subscribe(criteria=>{
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation=>{
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }   
      });
      this.setSummary()
          
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
    this.modalService.show(UmRoleViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['_id'] }
      }
    });
  }  


  view(){
    let modalRef = this['self'].modalService.show(UmRoleViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this['self'].selectedRow['_id'] }
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }
  

  add() {
    let modalRef = this['self'].modalService.show(UmRoleViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
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
    let modalRef = this['self'].modalService.show(UmRoleViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
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
    this['self'].summaryService.deleteRoleSummary(this['self'].selectedRow._id).subscribe(result=>{
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Delete',content: { heading: '', description: 'Selected Records has been deleted.'}}});
      this['self'].setSummary();
    })    
  }

  map_privileges(){
    this['self'].modalRef = this['self'].modalService.show(UmRoleMapPrivilegesViewModalComponent, {class:'modal-vlg modal-full-height modal-right', data:{heading:'Map Privileges',content: { heading: '', description: 'Work in Progress'}}});
  }

  map_users(){
    this['self'].modalRef = this['self'].modalService.show(UmRoleMapUsersViewModalComponent, {class: 'modal-lg modal-full-height modal-right', data:{heading:'Map Users',content: { heading: '', description: 'Work in Progress'}}});
  }

  setSummary(){
    this.summaryService.getRoleSummary().subscribe(summary=>{
      this.rowData = summary;
    });  
  }
}
