import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-lookups-sort-order',
  templateUrl: './lookups-sort-order.component.html',
  styleUrls: ['./lookups-sort-order.component.scss']
})
export class LookupsSortOrderComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
