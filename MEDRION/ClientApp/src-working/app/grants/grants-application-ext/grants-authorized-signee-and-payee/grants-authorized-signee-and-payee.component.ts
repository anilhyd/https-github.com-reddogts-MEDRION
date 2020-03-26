import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { Router, ActivatedRoute } from '@angular/router';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsAuthorizedSigneeAndPayeeViewModalComponent } from './grants-authorized-signee-and-payee-view-modal/grants-authorized-signee-and-payee-view-modal.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';

@Component({
  selector: 'app-grants-authorized-signee-and-payee',
  templateUrl: './grants-authorized-signee-and-payee.component.html',
  styleUrls: ['./grants-authorized-signee-and-payee.component.scss']
})
export class GrantsAuthorizedSigneeAndPayeeComponent implements OnInit {

  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  rowData;
  modalRef: MDBModalService;
  advanceSearch;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getAuthorizedSigneeCriteria().subscribe(criteria => {
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
    this.modalService.show(GrantsAuthorizedSigneeAndPayeeViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(GrantsAuthorizedSigneeAndPayeeViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(GrantsAuthorizedSigneeAndPayeeViewModalComponent, {
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

  setSummary() {
    this.summaryService.getAuthorizedSigneeSummary().subscribe(summary => {
      this.rowData = summary
    });
  }

}
