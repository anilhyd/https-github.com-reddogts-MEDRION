import { Component, OnInit } from '@angular/core';
import { CommonCriteriaService } from 'src/app/services/common/common-criteria.service';
import { CommonSummaryService } from 'src/app/services/common/common-summary.service';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { NotesViewModalComponent } from './notes-view-modal/notes-view-modal.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  operations;
  rowData;
  modalRef: MDBModalRef;

  constructor(
    private criteriaService: CommonCriteriaService,
    private summaryService: CommonSummaryService,
    private modalService: MDBModalService
    ) { }

  ngOnInit() {
    this.criteriaService.getNotesCriteria().subscribe(criteria=>{
      this.operations = criteria.operations.map(operation=>{
        return { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' };
      });
    });
    this.summaryService.getNotesSummary().subscribe(summary=>{
      this.rowData = summary;
    });
  }

  onCallbackOperation(opr) {
    opr.callback();
  }

  add(){
    let modalRef = this['self'].modalService.show(NotesViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
    modalRef.content.action.subscribe(result=>{
      
    })
  }
  

}
