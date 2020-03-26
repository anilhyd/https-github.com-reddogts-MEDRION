import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { genderOptionsConstant } from 'src/app/constants/service.constants';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-um-user-view-modal',
  templateUrl: './um-user-view-modal.component.html',
  styleUrls: ['./um-user-view-modal.component.scss']
})
export class UmUserViewModalComponent implements OnInit {


  formFields;
  operations;
  isView = false;
  viewId = null;
  genderOptions = genderOptionsConstant;

  userForm = new FormGroup({
    user_code: new FormControl(null),
    user_type: new FormControl(null),
    user_emailId: new FormControl(null),
    user_confirm_emailId: new FormControl(null),
    user_ssn: new FormControl(null),
    user_title: new FormControl(null),

    user_first_name: new FormControl(null),
    user_middle_name: new FormControl(null),
    user_last_name: new FormControl(null),
    user_full_name: new FormControl(null),
    user_gender: new FormControl(null),

    user_designation: new FormControl(null),
    user_phone_number: new FormControl(null),
    user_phone_number_ext: new FormControl(null),
    user_alternate_phone_number: new FormControl(null),
    user_alternate_phone_number_ext: new FormControl(null),

    user_department: new FormControl(null),
    user_reporting_manager: new FormControl(null),
    user_organization: new FormControl(null),


  })


  content: any;
  heading: string;
  action: Subject<any> = new Subject();



  constructor(
    private criteriaService: UmCriteriaService,
    private summaryService: UmSummaryService,
    public modalRef: MDBModalRef

  ) {

  }

  ngOnInit() {
    this.criteriaService.getUserCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getUserSummary(this.content.id).subscribe((result) => {
          this.userForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getUserSummary(this.content.id).subscribe((result) => {
          this.userForm.patchValue(result);
          this.userForm.disable();
        })
      }
    });

  }


  save() {
    if (this.userForm.valid) {

      if (!this.content && this.heading === 'Add') {
        this.summaryService.addUserSummary(this.userForm.getRawValue()).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        this.summaryService.editUserSummary(this.content.id, Object.assign(this.userForm.getRawValue(), { _id: this.content.id })).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })
      }
    }
  }
}
