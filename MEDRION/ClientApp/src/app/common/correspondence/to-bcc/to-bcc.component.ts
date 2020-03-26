import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-to-bcc',
  templateUrl: './to-bcc.component.html',
  styleUrls: ['./to-bcc.component.scss']
})
export class ToBccComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }
  heading:string;
  ngOnInit() {
  }

  

}
