import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';

import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { SetEventDeliveryComponent } from './set-event-delivery/set-event-delivery.component';


import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject, from } from 'rxjs';

import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { AvailableProductsComponent } from '../available-products/available-products.component';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent implements OnInit {

  
 
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
    this.criteriaService.getEventCriteria().subscribe(criteria => {
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


  setDelivery() {
    this['self'].modalService.show(SetEventDeliveryComponent, {
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
    this.summaryService.getEventSummary().subscribe(summary => {
      this.rowData = summary
    });
  }
}
