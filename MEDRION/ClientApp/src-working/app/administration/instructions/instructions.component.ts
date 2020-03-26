import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { InstructionsModalComponent } from './instructions-modal/instructions-modal.component';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  
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
    this.criteriaService.getInstructionsCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getInstructionsSummary().subscribe(summary=>{
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
  this.modalService.show(InstructionsModalComponent, {
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

 edit() {
  this["self"].modalRef = this['self'].modalService.show(InstructionsModalComponent, {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class:'modal-llg modal-full-height modal-right',
    animated: true,
    data: {
      heading: 'Edit',
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
