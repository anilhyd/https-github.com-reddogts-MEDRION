import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss']
})
export class RejectComponent implements OnInit {

  heading: string;
  content: any;
  formFields;

  rejectForm = new FormGroup({
    comments: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  })

  users = [
    {value:'1',label:'Venkat'},
    {value:'2',label:'Gopi'},
    {value:'3',label:'Siva'},
    {value:'4',label:'Upendra'},
  ] 

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
  }

}
