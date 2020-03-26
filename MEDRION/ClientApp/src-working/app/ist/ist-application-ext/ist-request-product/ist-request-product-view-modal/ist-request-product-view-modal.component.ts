import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { departmentsOptionsConstant, currencyOptionsConstant, stateOptionsSample, fullfillmentOptionsConstant, recurrenceOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-ist-request-product-view-modal',
  templateUrl: './ist-request-product-view-modal.component.html',
  styleUrls: ['./ist-request-product-view-modal.component.scss']
})
export class IstRequestProductViewModalComponent implements OnInit {

  formFields;
  departments = departmentsOptionsConstant;
  basicOptions = stateOptionsSample;
  fullfillmentOptions = fullfillmentOptionsConstant;
  recurrenceOptions = recurrenceOptionsConstant;

  productForm = new FormGroup({});
  // productForm = new FormGroup({
  //   product_name: new FormControl(null),
  //   dosage_formulation: new FormControl(null),
  //   strength: new FormControl(null),
  //   units: new FormControl(null),
  //   required_by: new FormControl(null),

  //   fullfillment_type: new FormControl(null),
  //   shipping_address: new FormControl(null),
  //   partner_network: new FormControl(null),
  //   billing_address: new FormControl(null),
  //   required_quantity: new FormControl(null),

  //   required_quantity_dropdown: new FormControl(null),
  //   recurrence: new FormControl('day'),
  //   allOrSelectedPatients: new FormControl(null),

  //   frequency_details: new FormGroup({
  //     daily: new FormGroup({
  //       every_days: new FormControl(null),
  //       days: new FormControl(null),
  //       every_weekday: new FormControl(null),
  //       start_date_: new FormControl(null),
  //       no_end_date: new FormControl(null),

  //       end_after: new FormControl(null),
  //       occurances: new FormControl(null),
  //       end_by: new FormControl(null),
  //       end_date: new FormControl(null),
  //       dayNeverOnAfter: new FormControl(null)
  //     }),
  //     weekly: new FormGroup({
  //       recur_every: new FormControl(null),
  //       weeks_on: new FormControl(null),
  //       sunday: new FormControl(null),
  //       monday: new FormControl(null),
  //       tuesday: new FormControl(null),

  //       wednesday: new FormControl(null),
  //       thursday: new FormControl(null),
  //       friday: new FormControl(null),
  //       saturday: new FormControl(null),
  //       start_date: new FormControl(null),

  //       no_end_date: new FormControl(null),
  //       end_after: new FormControl(null),
  //       occurances: new FormControl(null),
  //       end_by: new FormControl(null),
  //       end_date: new FormControl(null),
  //       weeklyNeverOnAfter: new FormControl(null)
  //     }),
  //     monthly: new FormGroup({
  //       day: new FormControl(null),
  //       of_every: new FormControl(null),
  //       month: new FormControl(null),
  //       on: new FormControl(null),
  //       month_name: new FormControl(null),

  //       on_the: new FormControl(null),
  //       week_number_of_month: new FormControl(null),
  //       day_of_week: new FormControl(null),
  //       of_every_month: new FormControl(null),
  //       start_date: new FormControl(null),

  //       no_end_date: new FormControl(null),
  //       end_after: new FormControl(null),
  //       occurances: new FormControl(null),
  //       end_by: new FormControl(null),
  //       end_date: new FormControl(null),
  //       monthlyNeverOnAfter: new FormControl(null)
  //     }),
  //     yearly: new FormGroup({
  //       recur_every: new FormControl(null),
  //       year: new FormControl(null),
  //       on: new FormControl(null),
  //       month_name: new FormControl(null),
  //       day_of_month: new FormControl(null),

  //       week_number_of_month: new FormControl(null),
  //       on_the: new FormControl(null),
  //       no_of_week: new FormControl(null),
  //       day_of_week: new FormControl(null),
  //       of_month_name: new FormControl(null),

  //       start_date: new FormControl(null),
  //       no_end_date: new FormControl(null),
  //       end_after: new FormControl(null),
  //       occurances: new FormControl(null),
  //       end_by: new FormControl(null),

  //       end_date: new FormControl(null),
  //       yearlyNeverOnAfter: new FormControl(null)
  //     }),

  //   })
  // })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  currencyOptions = currencyOptionsConstant;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService

  ) {
  }

  ngOnInit() {
    
    this.criteriaService.getRequestProductCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_formfields;
      this.appFunctions.getFormStructure(this.productForm, this.formFields);
      this.productForm.controls['recurrence'].setValue('day');
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRequestProductSummary(this.content.id).subscribe((result) => {
          this.productForm.patchValue(result.add_details);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getRequestProductSummary(this.content.id).subscribe((result) => {
          this.productForm.patchValue(result.add_details);
          this.productForm.disable();
        })
      }
    });
  }

  save() {
    if (this.productForm.valid) {
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
