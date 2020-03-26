import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-ist-request-fund-bank-accounts-modal',
  templateUrl: './ist-request-fund-bank-accounts-modal.component.html',
  styleUrls: ['./ist-request-fund-bank-accounts-modal.component.scss']
})
export class IstRequestFundBankAccountsModalComponent implements OnInit {

  formFields;

  fundBankForm = new FormGroup({
    account_holder_first_name: new FormControl(null),
    account_holder_last_name: new FormControl(null),
    bank_name: new FormControl(null),
    bank_number: new FormControl(null),
    bank_transit_number: new FormControl(null),

    bank_account_number: new FormControl(null),
    bank_location: new FormControl(null),
    phone_number: new FormControl(null),
    ext_phone_number: new FormControl(null),
    fax_number: new FormControl(null),

    ext_fax_number: new FormControl(null)
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
      this.formFields = criteria.formFields[0].bank_details_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestFundSummary(this.content.id).subscribe((result) => {
          this.fundBankForm.patchValue(result.bank_details_details);
        })
      }
    });
  }

  save() {
    if (this.fundBankForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

}
