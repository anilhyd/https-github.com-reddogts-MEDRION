import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { RfpModalComponent } from './rfp-modal/rfp-modal.component';

@Component({
  selector: 'app-rfp',
  templateUrl: './rfp.component.html',
  styleUrls: ['./rfp.component.scss']
})
export class RfpComponent implements OnInit {

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
    this.criteriaService.getRfpCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getRfpSummary().subscribe(summary=>{
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
  this.modalService.show(RfpModalComponent, {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class:'modal-vlg modal-full-height modal-right',
    animated: true,
    data: {
      heading: 'View RFP',
      content: { id: this.selectedRow['id'] }
    }
  });
  } 

  add() {
    this['self'].modalService.show(RfpModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add New RFP',
        content: null
      }
    });
  }

 edit() {
  this["self"].modalRef = this['self'].modalService.show(RfpModalComponent, {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class:'modal-llg modal-full-height modal-right',
    animated: true,
    data: {
      heading: 'Edit RFP',
      content: null
    }
  });
  }

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  }

  active() {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Active',content: { heading: '', description: 'Selected Records has been made Active.'}}});
  }

  inactive() {
      this['self'].modalRef = this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Inactive',content: { heading: '', description: 'Selected Records has been made Inactive.'}}});
  }


}
