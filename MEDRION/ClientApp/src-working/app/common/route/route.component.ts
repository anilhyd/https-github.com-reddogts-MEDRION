import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stateOptionsSample } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  heading: string;
  content: any;
  formFields;
  routeForm = new FormGroup({
    comments: new FormControl('', Validators.required),
    activity_sub_type: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  })
  stateOptionsSample = stateOptionsSample;

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
