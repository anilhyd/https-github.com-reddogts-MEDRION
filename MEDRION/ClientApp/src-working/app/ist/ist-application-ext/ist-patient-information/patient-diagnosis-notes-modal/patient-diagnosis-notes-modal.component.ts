import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-diagnosis-notes-modal',
  templateUrl: './patient-diagnosis-notes-modal.component.html',
  styleUrls: ['./patient-diagnosis-notes-modal.component.scss']
})
export class PatientDiagnosisNotesModalComponent implements OnInit {

  heading: string;
  content: any;
  formFields;

  pNotesForm = new FormGroup({
    notes: new FormControl('', Validators.required)
  })

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
  }


}
