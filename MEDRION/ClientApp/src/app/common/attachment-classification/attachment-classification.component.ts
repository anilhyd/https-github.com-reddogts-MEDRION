import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { documentOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-attachment-classification',
  templateUrl: './attachment-classification.component.html',
  styleUrls: ['./attachment-classification.component.scss']
})
export class AttachmentClassificationComponent implements OnInit {

  documentOptionsConstant = documentOptionsConstant;
  content:any;
  heading:string;

  attachmentClassificationForm = new FormGroup({
    attachment_classification: new FormControl(null)
  })

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
