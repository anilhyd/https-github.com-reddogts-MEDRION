import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsConstant, deliveryFormatOptionsConstant, countryOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-grants-delivery-format-view-modal',
  templateUrl: './grants-delivery-format-view-modal.component.html',
  styleUrls: ['./grants-delivery-format-view-modal.component.scss']
})
export class GrantsDeliveryFormatViewModalComponent implements OnInit {
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  
  formFields;
  stateOptions = stateOptionsConstant;
  countryOptions = countryOptionsConstant;
  deliveryFormatForm = new FormGroup({});
  deliveryFormatOptions = deliveryFormatOptionsConstant;
  content:any;
  heading:string;
  action: Subject<any> = new Subject();
  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
    ) { 
      
    }
    ngOnInit() {
      this.criteriaService.getDeliveryFormatCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.deliveryFormatForm, this.formFields);
        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getDeliveryFormatSummary(this.content.id).subscribe((result) => {
            this.deliveryFormatForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getDeliveryFormatSummary(this.content.id).subscribe((result) => {
            this.deliveryFormatForm.patchValue(result);
            this.deliveryFormatForm.disable();
          })
        }
      });
    }


}
