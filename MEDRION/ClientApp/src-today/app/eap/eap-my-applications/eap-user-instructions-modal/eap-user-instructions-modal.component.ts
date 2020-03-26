import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eap-user-instructions-modal',
  templateUrl: './eap-user-instructions-modal.component.html',
  styleUrls: ['./eap-user-instructions-modal.component.scss']
})
export class EapUserInstructionsModalComponent implements OnInit {

  
  id: number;
  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add() {
    this.modalRef.hide();
    //this.router.navigateByUrl('/home/ist/my-applications/application-ext/:0/general_information_request', { queryParams:{id:0, app_ext:true, module:"IST" }});

    this.router.navigateByUrl('/home/eap/my-applications/application-ext/:0/program_info');
  }

}
