import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-um-role-map-users-view-modal',
  templateUrl: './um-role-map-users-view-modal.component.html',
  styleUrls: ['./um-role-map-users-view-modal.component.scss']
})
export class UmRoleMapUsersViewModalComponent implements OnInit {

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
