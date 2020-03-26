import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea-addon',
  templateUrl: './textarea-addon.component.html',
  styleUrls: ['./textarea-addon.component.scss']
})
export class TextareaAddonComponent implements OnInit {

  
  heading: string;
  content: any;
  formFields;

  rejectForm = new FormGroup({
    textEntry: new FormControl('', Validators.required)
  })

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
  }

}
