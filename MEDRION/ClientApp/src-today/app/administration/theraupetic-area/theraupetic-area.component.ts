import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';

import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { TheraupeticAreaViewModalComponent } from './theraupetic-area-view-modal/theraupetic-area-view-modal.component';


import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject, from } from 'rxjs';

import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { AvailableProductsComponent } from '../available-products/available-products.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';

@Component({
  selector: 'app-theraupetic-area',
  templateUrl: './theraupetic-area.component.html',
  styleUrls: ['./theraupetic-area.component.scss']
})
export class TheraupeticAreaComponent implements OnInit {

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
    this.criteriaService.getTheraupeticAreaCriteria().subscribe(criteria => {
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
    this.modalService.show(TheraupeticAreaViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  // statusUpdate() {
  //   let modalRef = this['self'].modalService.show(IstSiteEvaluationUpdateStatusComponent, {
  //     backdrop: true,
  //     keyboard: false,
  //     ignoreBackdropClick: true,
  //     class: 'modal-md modal-full-height modal-right',
  //     animated: true
  //   });
  // }

  add() {
    let modalRef = this['self'].modalService.show(TheraupeticAreaViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
    modalRef.content.action.subscribe(result => {
      this['self'].setSummary();
    })
  }


  edit() {
    let modalRef = this['self'].modalService.show(TheraupeticAreaViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Edit',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
    modalRef.content.action.subscribe(result => {
      this['self'].setSummary();
    })
  }

  view() {
    this['self'].modalService.show(TheraupeticAreaViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }

  availableProducts() {
    this['self'].modalService.show(AvailableProductsComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
  }
  

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  };

  setSummary() {
    this.summaryService.getTheraupeticAreaSummary().subscribe(summary => {
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
