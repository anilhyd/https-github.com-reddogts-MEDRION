import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UmPrivilegeViewModalComponent } from './um-privilege-view-modal/um-privilege-view-modal.component';

@Component({
  selector: 'app-um-privilege',
  templateUrl: './um-privilege.component.html',
  styleUrls: ['./um-privilege.component.scss']
})
export class UmPrivilegeComponent implements OnInit {

  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  rowData;
  modalRef: MDBModalRef;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: UmCriteriaService,
    private summaryService: UmSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getPrivilegeCriteria().subscribe(criteria=>{
      this.columnDefs = criteria.columnDefs;
      this.operations = criteria.operations.map(operation=>{
        return { name: operation.name, callback: this[operation.id], self: this }        
      });
      this.setSummary();
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
    this.modalService.show(UmPrivilegeViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['_id'] }
      }
    });
  }

  setSummary(){
    this.summaryService.getPrivilegeSummary().subscribe(summary=>{
      this.rowData = summary;
    });
  }

}
