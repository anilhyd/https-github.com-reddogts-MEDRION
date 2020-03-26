import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stateOptionsSample } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  heading: string;
  content: any;
  formFields;
  stateOptionsSample = stateOptionsSample;
  routeForm = new FormGroup({
    comments: new FormControl('', Validators.required),
    activity_sub_type: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
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
