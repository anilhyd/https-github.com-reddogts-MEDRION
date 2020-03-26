import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-um-role-map-privileges-view-modal',
  templateUrl: './um-role-map-privileges-view-modal.component.html',
  styleUrls: ['./um-role-map-privileges-view-modal.component.scss']
})
export class UmRoleMapPrivilegesViewModalComponent implements OnInit {



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
