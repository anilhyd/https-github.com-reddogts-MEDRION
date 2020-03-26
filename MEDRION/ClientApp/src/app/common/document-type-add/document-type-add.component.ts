import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { stateOptionsSample } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type-add.component.html',
  styleUrls: ['./document-type-add.component.scss']
})
export class DocumentTypeAddComponent implements OnInit {

  stateOptions = stateOptionsSample;
  content:any;
  heading:string;

  documentTypeForm = new FormGroup({
    document_type: new FormControl(null)
  })

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
