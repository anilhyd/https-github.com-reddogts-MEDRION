import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-attachments-correspondence',
  templateUrl: './attachments-correspondence.component.html',
  styleUrls: ['./attachments-correspondence.component.scss']
})
export class AttachmentsCorrespondenceComponent implements OnInit {

  constructor(public modalRef: MDBModalRef){ }
  heading:string;
  ngOnInit() {
  }

}
