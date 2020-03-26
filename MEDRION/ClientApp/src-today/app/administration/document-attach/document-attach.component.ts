import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';

import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';


import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject, from } from 'rxjs';


import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { AttachDocumentsModalComponent } from './attach-documents-modal/attach-documents-modal.component';



@Component({
  selector: 'app-document-attach',
  templateUrl: './document-attach.component.html',
  styleUrls: ['./document-attach.component.scss']
})
export class DocumentAttachComponent implements OnInit {

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
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.criteriaService.getDocumentAttachCriteria().subscribe(criteria => {
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
    this.modalService.show(AttachDocumentsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true
    });
  }

  attachDocuments(event){
    // this.modalService.show(AttachDocumentsModalComponent, {
    //   backdrop: true,
    //   keyboard: false,
    //   ignoreBackdropClick: true,
    //   class: 'modal-lg modal-full-height modal-right',
    //   animated: true
    // });
    this["self"].modalRef = this["self"].modalService.show(AttachDocumentsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true
    });
  }
  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  };

  setSummary() {
    this.summaryService.getDocumentAttachSummary().subscribe(summary => {
      this.rowData = summary
    });
  }

}
