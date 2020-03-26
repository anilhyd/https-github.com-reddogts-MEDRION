import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from "ng-uikit-pro-standard";

@Component({
  selector: 'app-complaince-statement',
  templateUrl: './complaince-statement.component.html',
  styleUrls: ['./complaince-statement.component.scss']
})
export class ComplainceStatementComponent implements OnInit {

  heading: string;
  content: any;
  operation;

  constructor(
    public modalRef: MDBModalRef
  ) {}

  ngOnInit() {}

}
