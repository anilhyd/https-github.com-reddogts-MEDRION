import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-lookups-add-multiple',
  templateUrl: './lookups-add-multiple.component.html',
  styleUrls: ['./lookups-add-multiple.component.scss']
})
export class LookupsAddMultipleComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }


}
