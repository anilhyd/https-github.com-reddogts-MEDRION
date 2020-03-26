import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


  changePasswordForm = new FormGroup({
    old_password : new FormControl(''),
    new_password : new FormControl(''),
    confirm_new_password : new FormControl('')
  })

  constructor(private modalService: MDBModalService, public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  operations = [
    { name: 'Update Password', type:'submit', callback: this.updatePassword, self: this }
  ]

  onCallbackOperation(opr) {
    opr.callback();
  }

  updatePassword(){
    this.modalRef = this.modalService.show(MessageBoxComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md',
      animated: true,
      data:{heading:'Update Password',
      content: { heading: '', description: 'Password has been updated Succesfully.'}}});
  }

}
