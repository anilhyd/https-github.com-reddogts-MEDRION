import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-attach-document-types',
  templateUrl: './attach-document-types.component.html',
  styleUrls: ['./attach-document-types.component.scss']
})
export class AttachDocumentTypesComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
