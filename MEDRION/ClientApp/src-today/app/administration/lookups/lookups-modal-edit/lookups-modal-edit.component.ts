import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LookupsAddMultipleComponent } from '../lookups-add-multiple/lookups-add-multiple.component';

@Component({
  selector: 'app-lookups-modal-edit',
  templateUrl: './lookups-modal-edit.component.html',
  styleUrls: ['./lookups-modal-edit.component.scss']
})
export class LookupsModalEditComponent implements OnInit {

  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) { }

  ngOnInit() {
  }
  heading:string;
  selectDocuments(event) {
    this.modalService.show(LookupsAddMultipleComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-right',
      animated: true
    });
  }

}
