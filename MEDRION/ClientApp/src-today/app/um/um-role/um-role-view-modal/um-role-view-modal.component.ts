import { Component, OnInit } from '@angular/core';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { templatesOptionsConstant } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-um-role-view-modal',
  templateUrl: './um-role-view-modal.component.html',
  styleUrls: ['./um-role-view-modal.component.scss']
})
export class UmRoleViewModalComponent implements OnInit {

  formFields;
  operations;
  isView = false;
  viewId = null;
  templates = templatesOptionsConstant;
  roleForm = new FormGroup({
    role_code: new FormControl(null),
    role_name: new FormControl(null),
    role_template: new FormControl(null),
    role_description: new FormControl(null)

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

    this.criteriaService.getRoleCriteria().subscribe(criteria => {

      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRoleSummary(this.content.id).subscribe((result) => {
          this.roleForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getRoleSummary(this.content.id).subscribe((result) => {
          this.roleForm.patchValue(result);
          this.roleForm.disable();
        })
      }
    });
  }


  save() {
    if (this.roleForm.valid) {
      if (!this.content && this.heading === 'Add') {
        this.summaryService.addRoleSummary(this.roleForm.getRawValue()).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        this.summaryService.editRoleSummary(this.content.id, Object.assign(this.roleForm.getRawValue(), { _id: this.content.id })).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })
      }

    }
  }

}
