import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';


@Component({
  selector: 'app-ist-request-product-update-usage-modal',
  templateUrl: './ist-request-product-update-usage-modal.component.html',
  styleUrls: ['./ist-request-product-update-usage-modal.component.scss']
})
export class IstRequestProductUpdateUsageModalComponent implements OnInit {

  formFields;

  updateUsageForm = new FormGroup({
    date_of_receipt: new FormControl(null),
    used_quantity: new FormControl(null)
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
      this.formFields = criteria.formFields[0].update_usage_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestProductSummary(this.content.id).subscribe((result) => {
          this.updateUsageForm.patchValue(result.update_usage_details);
        })
      }
    });
  }

  save() {
    if (this.updateUsageForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
