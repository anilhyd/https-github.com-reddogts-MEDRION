import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';


@Component({
  selector: 'app-grants-audiences-view-modal',
  templateUrl: './grants-audiences-view-modal.component.html',
  styleUrls: ['./grants-audiences-view-modal.component.scss']
})
export class GrantsAudiencesViewModalComponent implements OnInit {

  formFields;
  stateOptions = stateOptionsSample;

  audinecesForm = new FormGroup({});
  
  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  audienceGroupOptions = [
    { value: 'Oncologists', label: 'Oncologists' },
    { value: 'Physician', label: 'Physician' },
    { value: 'MedicalDirectors', label: ' Medical Directors' },
    { value: 'PharmacyDirectors', label: 'Pharmacy Directors' },
    { value: 'Nurses/Nurse', label: 'Nurses/Nurse' },
    { value: 'Practitioners', label: 'Practitioners' },
    { value: 'Residents', label: 'Residents' },
    { value: 'Paediatricians', label: 'Paediatricians' },
    { value: 'Internists', label: 'Internists' },
    { value: 'FamilyPractice', label: 'Family Practice/General Practice Physicians' },
    { value: 'OncologyNurses', label: 'Oncology Nurses' },
    { value: 'OncologyPharmacist', label: 'Oncology Pharmacist' },
    { value: 'Pharmacist', label: 'Pharmacist' },
    { value: 'Other', label: 'Other' }
  ];

  specialityOptions = [
      { value: 'Caregivers', label: 'Caregivers' },
      { value: 'Gastroenterology', label: 'Gastroenterology' },
      { value: 'Managercaredirectors', label: 'Manager care directors' },
      { value: 'Neurology', label: 'Neurology' },
      { value: 'NursePractictionries', label: 'Nurse Practictionries' },
      { value: 'Nurses', label: 'Nurses' },
      { value: 'Others', label: 'Others' },
      { value: 'Patients', label: 'Patients' },
      { value: 'Pharmacists', label: 'Pharmacists' },
      { value: 'Physicians', label: 'Physicians' }
  ];

  categoryOfCreditOptions = [
      { value: 'ACCP', label: 'ACCP' },
      { value: 'AAFP', label: 'AAFP' },
      { value: 'AAN', label: 'AAN' },
      { value: 'AANP', label: 'AANP' },
      { value: 'AAPA', label: 'AAPA' },
      { value: 'ACCME', label: 'ACCME' },
      { value: 'ACCP', label: 'ACCP' },
      { value: 'ACEPE', label: 'ACEPE' },
      { value: 'AMA', label: 'AMA' },
      { value: 'AMCP', label: 'AMCP' },
      { value: 'ANCC', label: 'ANCC' },
      { value: 'APhA', label: 'APhA' },
      { value: 'ASCP', label: 'ASCP' },
      { value: 'NAPNAP', label: 'NAPNAP' },
      { value: 'Other', label: 'Other' }
  ];

  creditHoursOptions = [
      { value: '0', label: '0' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' }
  ];

  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
    ) { 
      
    }
    ngOnInit() {
      this.criteriaService.getAudiencesCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.audinecesForm, this.formFields);

        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getAudiencesSummary(this.content.id).subscribe((result) => {
            this.audinecesForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getAudiencesSummary(this.content.id).subscribe((result) => {
            this.audinecesForm.patchValue(result);
            this.audinecesForm.disable();
          })
        }
      });
    }


}
