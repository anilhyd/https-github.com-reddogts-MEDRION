import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { assignMessage } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.scss']
})
export class AssignDialogComponent implements OnInit {

  heading: string;
  content: any;
  assignMessage = assignMessage;

  assignUser = new FormGroup({
    user: new FormControl('', Validators.required)
  })

  users = [
    {value:'1',label:'Venkat'},
    {value:'2',label:'Gopi'},
    {value:'3',label:'Siva'},
    {value:'4',label:'Upendra'},
  ] 

  constructor(public modalRef: MDBModalRef) {}


  ngOnInit() {
    if(this.content && this.content.users)
      this.users = this.content['users'];
  }

}
