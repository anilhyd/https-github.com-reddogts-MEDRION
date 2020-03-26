import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { departmentsOptionsConstant, currencyOptionsConstant, organisationType, organisationSubType } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-ist-study-team-organization-view-modal',
  templateUrl: './ist-study-team-organization-view-modal.component.html',
  styleUrls: ['./ist-study-team-organization-view-modal.component.scss']
})
export class IstStudyTeamOrganizationViewModalComponent implements OnInit {

  formFields;
  departments = departmentsOptionsConstant;
  organisationType = organisationType;
  organisationSubType = organisationSubType;

  studyTeamOrganizationForm = new FormGroup({
    name_of_organisation: new FormControl(null),
    organisation_type: new FormControl(null),
    organisation_sub_type: new FormControl(null),
    organisation_website: new FormControl(null),
    address: new FormControl(null),

    postal_code: new FormControl(null),
    city: new FormControl(null),
    state_province: new FormControl(null),
    country: new FormControl(null),
    email_address: new FormControl(null),

    phone_number: new FormControl(null),
    ext_phone_number: new FormControl(null),
    other_phone_number: new FormControl(null),
    ext_other_phone_number: new FormControl(null),
    fax_number: new FormControl(null),


    ext_fax_number: new FormControl(null),
    notes: new FormControl(null),
    flex_field_1: new FormControl(null),
    flex_field_2: new FormControl(null),
    flex_field_3: new FormControl(null),
    
    flex_field_4: new FormControl(null),
    flex_field_5: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  currencyOptions = currencyOptionsConstant;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {
    this.criteriaService.getStudyTeamOrganizationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getStudyTeamOrganizationSummary(this.content.id).subscribe((result) => {
          this.studyTeamOrganizationForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getStudyTeamOrganizationSummary(this.content.id).subscribe((result) => {
          this.studyTeamOrganizationForm.patchValue(result);
          this.studyTeamOrganizationForm.disable();
        })
      }
    });
  }

  save() {
    if (this.studyTeamOrganizationForm.valid) {
      if (!this.content && this.heading === 'Add') {
        //this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        //this.summaryService.editDeptSummary(this.content.id, Object.assign(this.deptForm.getRawValue(), {_id:this.content.id})).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})
      }
    }
  }

  
}
