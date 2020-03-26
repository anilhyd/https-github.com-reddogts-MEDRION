import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { ScreenRepositoryModalComponent } from './screen-repository-modal/screen-repository-modal.component';
import { ConfigureControlsModalComponent } from './configure-controls-modal/configure-controls-modal.component';

@Component({
  selector: 'app-screen-repository',
  templateUrl: './screen-repository.component.html',
  styleUrls: ['./screen-repository.component.scss']
})
export class ScreenRepositoryComponent implements OnInit {

  
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
    this.criteriaService.getScreenRepositoryCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'add' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.summaryService.getScreenRepositorySummary().subscribe(summary=>{
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
  this.modalService.show(ScreenRepositoryModalComponent, {
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
  this["self"].modalRef = this['self'].modalService.show(ScreenRepositoryModalComponent, {
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

  add() {
    this["self"].modalRef = this['self'].modalService.show(ScreenRepositoryModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'New',
        content: null
      }
    });
    }

  configure_controls() {
    this["self"].modalRef = this['self'].modalService.show(ConfigureControlsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'New',
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