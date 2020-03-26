import { Component, OnInit } from '@angular/core';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { UmPrivilegeComponent } from '../um-privilege.component';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { privilegesOperationsConstant } from 'src/app/constants/service.constants';


@Component({
  selector: 'app-um-privilege-view-modal',
  templateUrl: './um-privilege-view-modal.component.html',
  styleUrls: ['./um-privilege-view-modal.component.scss']
})
export class UmPrivilegeViewModalComponent implements OnInit {

  formFields;
  operations;
  isView = false;
  viewId = null;
  privilegesOperations = privilegesOperationsConstant;
  privilegeForm = new FormGroup({
    privilege_module_name: new FormControl(null),
    privilege_feature_name: new FormControl(null),
    privilege_opr_name: new FormControl(null)

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
    this.criteriaService.getPrivilegeCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getPrivilegeSummary(this.content.id).subscribe((result) => {
          this.privilegeForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getPrivilegeSummary(this.content.id).subscribe((result) => {
          this.privilegeForm.patchValue(result);
          this.privilegeForm.disable();
        })
      }
    });
  }

  
}
