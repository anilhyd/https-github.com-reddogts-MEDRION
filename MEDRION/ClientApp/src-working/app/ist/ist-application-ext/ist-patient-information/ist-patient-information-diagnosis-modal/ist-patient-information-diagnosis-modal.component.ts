import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ist-patient-information-diagnosis-modal',
  templateUrl: './ist-patient-information-diagnosis-modal.component.html',
  styleUrls: ['./ist-patient-information-diagnosis-modal.component.scss']
})
export class IstPatientInformationDiagnosisModalComponent implements OnInit {

  formFields;

  addDiagnosisForm = new FormGroup({
    enter_diagnosis_details: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: IstCriteriaService,
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {
    this.criteriaService.getPatientInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_medical_diagnosis;
    });
  }

  save() {
    if (this.addDiagnosisForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

}
