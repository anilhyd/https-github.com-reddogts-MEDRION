import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { returnQuantityOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-request-product-allocate-modal',
  templateUrl: './ist-request-product-allocate-modal.component.html',
  styleUrls: ['./ist-request-product-allocate-modal.component.scss']
})
export class IstRequestProductAllocateModalComponent implements OnInit {

  formFields;
  returnQuantityOptions = returnQuantityOptionsConstant;

  productAllocationForm = new FormGroup({
    allocated_quantity: new FormControl(null),
    allocated_quantity_dropdown: new FormControl(null),
    shipping_tracking_id: new FormControl(null),
    shipping_service_provider: new FormControl(null),
    date_of_dispatch: new FormControl(null),
    batch_number_code_number: new FormControl(null),
    date_of_manufacture: new FormControl(null),
    date_of_expiry: new FormControl(null),
    storage_instructions: new FormControl(null)
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
    this.criteriaService.getRequestProductCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].allocate_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestProductSummary(this.content.id).subscribe((result) => {
          this.productAllocationForm.patchValue(result.allocate_details);
        })
      }
    });
  }

  save() {
    if (this.productAllocationForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

}
