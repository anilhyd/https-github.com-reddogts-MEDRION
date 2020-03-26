import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-um-user-map-user-view-modal',
  templateUrl: './um-user-map-user-view-modal.component.html',
  styleUrls: ['./um-user-map-user-view-modal.component.scss']
})
export class UmUserMapUserViewModalComponent implements OnInit {

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  constructor(
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {

  }

  save() {
    this.action.next();
    this.modalRef.hide();
  }

}
