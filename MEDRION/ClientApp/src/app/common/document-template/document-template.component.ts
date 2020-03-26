import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-document-template',
  templateUrl: './document-template.component.html',
  styleUrls: ['./document-template.component.scss']
})
export class DocumentTemplateComponent implements OnInit {

  constructor(
    public modalRef: MDBModalRef,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
  }

}
