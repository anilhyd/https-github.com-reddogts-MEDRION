import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ist-request-fund-return-or-retrieve-modal',
  templateUrl: './ist-request-fund-return-or-retrieve-modal.component.html',
  styleUrls: ['./ist-request-fund-return-or-retrieve-modal.component.scss']
})
export class IstRequestFundReturnOrRetrieveModalComponent implements OnInit {

  formFields;

  returnOrRetieveForm = new FormGroup({
    refund_amount: new FormControl(null),
    credit_check_number: new FormControl(null),
    shipment_number: new FormControl(null),
    bank_details: new FormControl(null),
    transaction_number: new FormControl(null)
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
    this.criteriaService.getRequestFundCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].return_or_retrieval_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestFundSummary(this.content.id).subscribe((result) => {
          this.returnOrRetieveForm.patchValue(result.return_or_retrieval_details);
        })
      }
    });
  }

  save() {
    if (this.returnOrRetieveForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

}
