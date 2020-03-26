import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ist-patient-information-medical-history-modal',
  templateUrl: './ist-patient-information-medical-history-modal.component.html',
  styleUrls: ['./ist-patient-information-medical-history-modal.component.scss']
})
export class IstPatientInformationMedicalHistoryModalComponent implements OnInit {

  formFields;

  addMedicalHistoryForm = new FormGroup({
    medical_history: new FormControl(null),
    start_date: new FormControl(null),
    finish_date: new FormControl(null),
    ongoing: new FormControl(null),
    description: new FormControl(null)
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
    if (this.addMedicalHistoryForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
