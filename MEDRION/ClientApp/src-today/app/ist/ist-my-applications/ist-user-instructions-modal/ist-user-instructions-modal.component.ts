import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ist-user-instructions-modal',
  templateUrl: './ist-user-instructions-modal.component.html',
  styleUrls: ['./ist-user-instructions-modal.component.scss']
})
export class IstUserInstructionsModalComponent implements OnInit {

  id: number;
  isAck = false;
  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add() {
    this.modalRef.hide();
    this.router.navigate(['/home/ist/my-applications/application-ext/:0/general_information_request'], {skipLocationChange:true, queryParams:{id:0, app_ext:true, module:"ist", screen_type:"my-applications" }});
  }

}