import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { CommonCriteriaService } from 'src/app/services/common/common-criteria.service';
import { CommonSummaryService } from 'src/app/services/common/common-summary.service';
import { AppFunctionsService } from 'src/app/services/app-functions.service';


@Component({
  selector: 'app-add-bank-details',
  templateUrl: './add-bank-details.component.html',
  styleUrls: ['./add-bank-details.component.scss']
})
export class AddBankDetailsComponent implements OnInit {

  formFields;
  formData: FormData;
  addBankDetailsForm = new FormGroup({});
  constructor(
    private criteriaService: CommonCriteriaService,
    private summaryService: CommonSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService

  ) {

  }

  ngOnInit() {
    this.criteriaService.getBankDetailsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.addBankDetailsForm, this.formFields);
    });
  }

}
