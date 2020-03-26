import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.scss']
})
export class FaqViewComponent implements OnInit {

  constructor(
    public modalRef: MDBModalRef,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
  }

}
