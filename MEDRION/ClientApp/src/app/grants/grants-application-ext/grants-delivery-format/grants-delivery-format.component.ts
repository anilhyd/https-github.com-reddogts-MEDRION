import { Component, OnInit, ViewChild } from "@angular/core";

import { GrantsCriteriaService } from "src/app/services/grants/grants-criteria.service";
import { GrantsSummaryService } from "src/app/services/grants/grants-summary.service";

import { MDBModalRef, IMyOptions } from "ng-uikit-pro-standard";
import { Subject } from "rxjs";
import { AppFunctionsService  } from 'src/app/services/app-functions.service';
import { stateOptionsConstant, countryOptionsConstant , deliveryFormatOptionsConstant, theraputicAreaConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grants-delivery-format',
  templateUrl: './grants-delivery-format.component.html',
  styleUrls: ['./grants-delivery-format.component.scss']
})
export class GrantsDeliveryFormatComponent implements OnInit {

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  
  formFields;
  stateOptions = stateOptionsConstant;
  countryOptions = countryOptionsConstant;
  therapeuticAreaOptions = theraputicAreaConstant

  deliveryFormatForm = new FormGroup({});
  deliveryFormatOptions = deliveryFormatOptionsConstant;
  content:any;
  heading:string;
  action: Subject<any> = new Subject();
  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    private appFunctions: AppFunctionsService
    ) { 
      
    }
    ngOnInit() {
      this.criteriaService.getDeliveryFormatCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.deliveryFormatForm, this.formFields);
        // if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        //   this.summaryService.getDeliveryFormatSummary(this.content.id).subscribe((result) => {
        //     this.deliveryFormatForm.patchValue(result);
        //   })
        // } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        //   this.summaryService.getDeliveryFormatSummary(this.content.id).subscribe((result) => {
        //     this.deliveryFormatForm.patchValue(result);
        //     this.deliveryFormatForm.disable();
        //   })
        // }

        this.summaryService.getDeliveryFormatNewSummary().subscribe((result) => {
          this.deliveryFormatForm.patchValue(result);
        })
      });
    }
    operations = [
      { name: 'Save', type:'submit', callback: this.save, self: this }
    ]
    onCallbackOperation(opr){
      opr.callback();
    }
    save() {
      
    }
}
