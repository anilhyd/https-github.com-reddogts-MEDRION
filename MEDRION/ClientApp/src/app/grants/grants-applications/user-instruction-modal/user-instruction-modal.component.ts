import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-instruction-modal',
  templateUrl: './user-instruction-modal.component.html',
  styleUrls: ['./user-instruction-modal.component.scss']
})
export class UserInstructionModalComponent implements OnInit {
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
    this.router.navigate(['/home/grants/applications/application-ext/:'+ this.id +'/general_information'], {skipLocationChange:true, queryParams:{module:"grants", id:this.id, app_ext:true, screen_type:"applications"}})
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/grants/applications/application-ext/:' + this.id + '/general_information');
  }

}
