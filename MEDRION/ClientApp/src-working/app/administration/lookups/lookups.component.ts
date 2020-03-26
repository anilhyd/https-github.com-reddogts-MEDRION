import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { LookupsModalEditComponent } from './lookups-modal-edit/lookups-modal-edit.component';
import { LookupsAddMultipleComponent } from './lookups-add-multiple/lookups-add-multiple.component';
import { LookupsSortOrderComponent } from './lookups-sort-order/lookups-sort-order.component';


@Component({
  selector: 'app-lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.scss']
})
export class LookupsComponent implements OnInit {

  gridApi: GridApi;
  columnDefs;
  operations;
  rowData;
  advanceSearch;
  selectedRow;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    private modalService: MDBModalService
  ) {

  }

  ngOnInit() {
    this.criteriaService.getLookupsCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.advanceSearch = criteria.advanceSearch;
      this.summaryService.getLookupsSummary().subscribe(summary=>{
        this.rowData = summary;
      });
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
    this.modalService.show(LookupsModalEditComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  edit() {
    let modalRef = this['self'].modalService.show(LookupsModalEditComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Edit',
        content: null
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  add() {
    this['self'].modalService.show(LookupsAddMultipleComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true
    });
  }
  
  sort_order(){
    this['self'].modalService.show(LookupsSortOrderComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true
    });
  }

}
