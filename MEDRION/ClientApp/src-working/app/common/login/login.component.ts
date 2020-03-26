import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DeleteBoxComponent } from '../delete-box/delete-box.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { IstRegistrationsViewModalComponent } from 'src/app/ist/ist-registrations/ist-registrations-view-modal/ist-registrations-view-modal.component';
import { GrantsRegistrationsViewModalComponent } from 'src/app/grants/grants-registrations/grants-registrations-view-modal/grants-registrations-view-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  errorMess = "";

  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
    let userDetails = { username: this.loginForm.getRawValue().username.toLowerCase(), password: this.loginForm.getRawValue().password }
    this.userService.userLogin(userDetails).subscribe(result => {
      if (result && result.isLoggedIn) {
        this.router.navigate(['home']);
        localStorage.setItem('id', result.userDetails._id);
        this.userService.setUserDetails(result.userDetails);
        this.userService.setLoggedIn(true);
        this.submitted = false;
      } else {
        this.submitted = false;
        this.errorMess = result['message'];
      }
    }, err => {
      console.log(err);
    })
  }

  openIST() {
    this.modalService.show(IstRegistrationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Create',
        content: null
      }
    });
  }
  openEAP() {
    this.modalService.show(IstRegistrationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Create',
        content: null
      }
    });
  }
    openGrants() {
    this.modalService.show(GrantsRegistrationsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Create',
        content: null
      }
    });
  }

  delete() {
    this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
  }

  add(){
    
  }

}
