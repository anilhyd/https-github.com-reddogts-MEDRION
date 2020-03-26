import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { returnQuantityOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-request-product-return-or-retrieve-modal',
  templateUrl: './ist-request-product-return-or-retrieve-modal.component.html',
  styleUrls: ['./ist-request-product-return-or-retrieve-modal.component.scss']
})
export class IstRequestProductReturnOrRetrieveModalComponent implements OnInit {

  formFields;
  returnQuantityOptions = returnQuantityOptionsConstant;

  returnOrRetrieveForm = new FormGroup({
    return_quantity: new FormControl(null),
    return_quantity_dropdown: new FormControl(null),
    shipping_tracking_id: new FormControl(null),
    shipping_service_provider: new FormControl(null),
    date_of_dispatch: new FormControl(null),
    notes: new FormControl(null),
    date_of_receipt: new FormControl(null)
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
      this.formFields = criteria.formFields[0].return_or_retrieve_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestProductSummary(this.content.id).subscribe((result) => {
          this.returnOrRetrieveForm.patchValue(result.return_or_retireve_details);
        })
      }
    });
  }

  save() {
    if (this.returnOrRetrieveForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
