import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { IstRegistrationsViewModalComponent } from 'src/app/ist/ist-registrations/ist-registrations-view-modal/ist-registrations-view-modal.component';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef } from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-notification-store',
  templateUrl: './notification-store.component.html',
  styleUrls: ['./notification-store.component.scss']
})
export class NotificationStoreComponent implements OnInit {

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
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) {

  }

  ngOnInit() {
    this.criteriaService.getNotificationStoreCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.advanceSearch = criteria.advanceSearch;
      this.summaryService.getNotificationStoreSummary().subscribe(summary => {
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
    // this.selectedRow = this.gridApi.getSelectedRows() ? this.gridApi.getSelectedRows()[0] : null;
  }

  onRowDoubleClicked(event) {
    // this.modalService.show(IstRegistrationsViewModalComponent, {
    //   backdrop: true,
    //   keyboard: false,
    //   ignoreBackdropClick: true,
    //   class:'modal-vlg modal-full-height modal-right',
    //   animated: true,
    //   data: {
    //     heading: 'View',
    //     content: { id: this.selectedRow['id'] }
    //   }
    // });
  }

  read() {
    this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Read', content: { heading: '', description: 'Selected Records has been Read.' } } });
  }

  unread() {
    this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Unread', content: { heading: '', description: 'Selected Records has been Unread.' } } });
  }
}