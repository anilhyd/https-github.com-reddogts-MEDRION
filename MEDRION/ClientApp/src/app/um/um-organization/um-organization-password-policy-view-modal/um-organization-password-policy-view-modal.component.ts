import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-um-organization-password-policy-view-modal',
  templateUrl: './um-organization-password-policy-view-modal.component.html',
  styleUrls: ['./um-organization-password-policy-view-modal.component.scss']
})
export class UmOrganizationPasswordPolicyViewModalComponent implements OnInit {

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
