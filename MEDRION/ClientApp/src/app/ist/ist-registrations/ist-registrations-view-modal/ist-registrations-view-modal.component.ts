import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ist-registrations-view-modal',
  templateUrl: './ist-registrations-view-modal.component.html',
  styleUrls: ['./ist-registrations-view-modal.component.scss']
})
export class IstRegistrationsViewModalComponent implements OnInit {

  formFields;

  optionsSelect = [
    { value: 'Mr', label: 'Mr.' },
    { value: 'Mrs', label: 'Mrs.' },
    { value: 'Dr', label: 'Dr.' },
    { value: 'Rev', label: 'Rev.' },
    { value: 'Ms', label: 'Ms.' },
  ];

  viewForm = new FormGroup({
    prefix: new FormControl('', [Validators.required]),
    first_name: new FormControl(null, [Validators.required]),
    middle_name: new FormControl(''),
    last_name: new FormControl('', [Validators.required]),
    medical_license_number: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
    specialization: new FormControl('', [Validators.required]),

    psy_address: new FormControl('', [Validators.required]),
    psy_postal_code: new FormControl('', [Validators.required]),
    psy_city: new FormControl('', [Validators.required]),
    psy_state: new FormControl('', [Validators.required]),
    psy_country: new FormControl('', [Validators.required]),
    preffered_contact_method: new FormControl(''),
    email_address: new FormControl('', [Validators.required]),
    confirm_email_address: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    phone_number_ext: new FormControl('', [Validators.required]),
    other_phone_number: new FormControl(''),
    other_phone_number_ext: new FormControl(''),
    fax_number: new FormControl(''),
    fax_numberExt: new FormControl('',),

    org_name: new FormControl('', [Validators.required]),
    org_website: new FormControl('', [Validators.required]),
    org_address: new FormControl('', [Validators.required]),
    org_postal_code: new FormControl('', [Validators.required]),
    org_city: new FormControl('', [Validators.required]),
    org_state_or_province: new FormControl('', [Validators.required]),
    org_country: new FormControl('', [Validators.required]),
    institution_tax_number: new FormControl('', [Validators.required]),

  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {
    this.criteriaService.getRegistrationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRegistrationSummary(this.content.id).subscribe((result) => {
          this.viewForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getRegistrationSummary(this.content.id).subscribe((result) => {
          this.viewForm.patchValue(result);
          this.viewForm.disable();
        })
      }
    });
  }

  save() {
    if (this.viewForm.valid) {
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
