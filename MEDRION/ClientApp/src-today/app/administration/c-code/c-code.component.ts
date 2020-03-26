import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';

import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { SetFormatComponent } from './set-format/set-format.component';

import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject, from } from 'rxjs';

import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';


@Component({
  selector: 'app-c-code',
  templateUrl: './c-code.component.html',
  styleUrls: ['./c-code.component.scss']
})
export class CCodeComponent implements OnInit {

 
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
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.criteriaService.getCCodeCriteria().subscribe(criteria => {
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


  setFormat() {
    this['self'].modalService.show(SetFormatComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }
  

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  };

  setSummary() {
    this.summaryService.getCCodeSummary().subscribe(summary => {
      this.rowData = summary
    });
  }
  active() {
    this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Active',content: { heading: '', description: 'Selected Records has been made Active.'}}});
  }

  inactive() {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Inactive',content: { heading: '', description: 'Selected Records has been made Inactive.'}}});
  }
}

