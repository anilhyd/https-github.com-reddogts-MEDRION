import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmOtpComponent } from './confirm-otp/confirm-otp.component';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  heading: string;
  content: any;
  formFields;

  withdrawForm = new FormGroup({
    comments: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  })

  users = [
    {value:'1',label:'Venkat'},
    {value:'2',label:'Gopi'},
    {value:'3',label:'Siva'},
    {value:'4',label:'Upendra'},
  ] 

  constructor(public modalRef: MDBModalRef, private modalService: MDBModalService) {
  }


  ngOnInit() {
  }

  confirmWithdraw(){
    this.modalRef.hide();
    this.modalService.show(ConfirmOtpComponent);
  }

}
