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
  selector: 'app-grants-budget-view-modal',
  templateUrl: './grants-budget-view-modal.component.html',
  styleUrls: ['./grants-budget-view-modal.component.scss']
})
export class GrantsBudgetViewModalComponent implements OnInit {

 
  formFields;
  stateOptions = stateOptionsSample;

  budgetForm = new FormGroup({});
  
  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  budgetTypeOptions = [
    { value: 'Staff', label: 'Staff' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Investigations', label: 'Investigations' },
    { value: 'Miscellaneous', label: 'Miscellaneous' }
  ];

  budgetSubTypeOptions = [
    { value: 'StaffSalary', label: 'Staff Salary' },
    { value: 'BusTravel', label: 'Bus Travel' },
    { value: 'LocalTravelAllowance', label: 'Local Travel Allowance' },
    { value: 'AirFair', label: 'Air Fair' },
    { value: 'ScanReports', label: 'Scan Reports' },
    { value: 'BloodReports', label: 'Blood Reports' },
    { value: 'UrineReports', label: 'Urine Reports' },
    { value: 'Miscellaneous', label: 'Miscellaneous' }
  ];

  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
    ) { 
      
    }
    ngOnInit() {
      this.criteriaService.getBudgetCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields[0].add_formfields;
        this.appFunctions.getFormStructure(this.budgetForm, this.formFields);

        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getBudgetSummary(this.content.id).subscribe((result) => {
            this.budgetForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getBudgetSummary(this.content.id).subscribe((result) => {
            this.budgetForm.patchValue(result);
            this.budgetForm.disable();
          })
        }
      });
    }


}
