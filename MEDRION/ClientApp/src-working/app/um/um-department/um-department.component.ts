import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UmDepartmentViewModalComponent } from './um-department-view-modal/um-department-view-modal.component';

@Component({
  selector: 'app-um-department',
  templateUrl: './um-department.component.html',
  styleUrls: ['./um-department.component.scss']
})
export class UmDepartmentComponent implements OnInit {

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
    this.criteriaService.getDeptCriteria().subscribe(criteria => {
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
    this.modalService.show(UmDepartmentViewModalComponent, {
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

  add() {
    let modalRef = this['self'].modalService.show(UmDepartmentViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(UmDepartmentViewModalComponent, {
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
    this['self'].summaryService.deleteDeptSummary(this['self'].selectedRow._id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Delete', content: { heading: '', description: 'Selected Records has been deleted.' } } });
      this['self'].setSummary();
    })
  }

  setSummary() {
    this.summaryService.getDeptSummary().subscribe(summary => {
      this.rowData = summary
    });
  }



}
