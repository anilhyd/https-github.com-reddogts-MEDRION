import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstRequestProductViewModalComponent } from './ist-request-product-view-modal/ist-request-product-view-modal.component';
import { IstRequestProductUpdateUsageModalComponent } from './ist-request-product-update-usage-modal/ist-request-product-update-usage-modal.component';
import { IstRequestProductReturnOrRetrieveModalComponent } from './ist-request-product-return-or-retrieve-modal/ist-request-product-return-or-retrieve-modal.component';
import { IstRequestProductAllocateModalComponent } from './ist-request-product-allocate-modal/ist-request-product-allocate-modal.component';
import * as forEach from 'lodash/forEach';

@Component({
  selector: 'app-ist-request-product',
  templateUrl: './ist-request-product.component.html',
  styleUrls: ['./ist-request-product.component.scss']
})
export class IstRequestProductComponent implements OnInit {

  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  advanceSearch;
  rowData;
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
    this.criteriaService.getRequestProductCriteria().subscribe(criteria => {
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
    this.modalService.show(IstRequestProductViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(IstRequestProductViewModalComponent, {
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
    let modalRef = this['self'].modalService.show(IstRequestProductViewModalComponent, {
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


  update_usage() {
    this['self'].modalService.show(IstRequestProductUpdateUsageModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Update Receipt & Usage',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }


  return() {
    this['self'].modalService.show(IstRequestProductReturnOrRetrieveModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Product Return',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  retrieve() {
    this['self'].modalService.show(IstRequestProductReturnOrRetrieveModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Product Retrieval',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  allocate() {
    this['self'].modalService.show(IstRequestProductAllocateModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Product Allocation',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  delete() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Delete', content: { heading: '', description: 'The Request ID REQ-001 has been Deleted.' } } });
      this['self'].setSummary();
    //})
  }

  approve() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Approve', content: { heading: '', description: 'The Request ID REQ-001 has been Approved.' } } });
      this['self'].setSummary();
    //})
  }

  reject() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Reject', content: { heading: '', description: 'The Request ID REQ-001 has been Rejected.' } } });
      this['self'].setSummary();
    //})
  }

  close() {
    //this['self'].summaryService.deletePublicationsSummary(this['self'].selectedRow.id).subscribe(result => {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Close', content: { heading: '', description: 'The Request ID REQ-001 has been Closed.' } } });
      this['self'].setSummary();
    //})
  }

  setSummary() {
    this.summaryService.getRequestProductSummary().subscribe(summary => {
      // if(summary && summary.length){
      //   let result = [];
      //   forEach(summary, (summaryData)=>{
      //     result.push(summaryData.add_details);
      //   });
      //   this.rowData = result;
      // }
      this.rowData = summary;
    });
  }
}
