import { Component, OnInit, Input } from '@angular/core';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { FormGroup } from '@angular/forms';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { departmentsOptionsConstant, personsOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';


@Component({
  selector: 'app-um-department-view-modal',
  templateUrl: './um-department-view-modal.component.html',
  styleUrls: ['./um-department-view-modal.component.scss']
})
export class UmDepartmentViewModalComponent implements OnInit {

  formFields;
  departments = departmentsOptionsConstant;
  persons = personsOptionsConstant;
  deptForm = new FormGroup({});

  content:any;
  heading:string;
  action: Subject<any> = new Subject();


  constructor(
    private criteriaService: UmCriteriaService,
    private summaryService: UmSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService

  ) {

  }

  ngOnInit() {
      this.criteriaService.getDeptCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.deptForm, this.formFields);
        if(this.content && this.content.id && this.heading === 'Edit' ){ // Edit mode
          this.summaryService.getDeptSummary(this.content.id).subscribe((result) => {
            this.deptForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getDeptSummary(this.content.id).subscribe((result) => {
            this.deptForm.patchValue(result);
            this.deptForm.disable();
          })
        }
      });
  }

  save() {
    if (this.deptForm.valid) {
      if(!this.content && this.heading === 'Add'){
        this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
          this.action.next();
          this.modalRef.hide();
        })
        
      }else if(this.content && this.content.id && this.heading === 'Edit'){
        this.summaryService.editDeptSummary(this.content.id, Object.assign(this.deptForm.getRawValue(), {_id:this.content.id})).subscribe(result=>{
          this.action.next();
          this.modalRef.hide();
        })
      }      
    }
  }
}
