import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ist-request-fund-allocation-modal',
  templateUrl: './ist-request-fund-allocation-modal.component.html',
  styleUrls: ['./ist-request-fund-allocation-modal.component.scss']
})
export class IstRequestFundAllocationModalComponent implements OnInit {

  formFields;

  fundAllocationForm = new FormGroup({
    allocated_fund: new FormControl(null),
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
      this.formFields = criteria.formFields[0].allocate_formfields;
      if (this.content && this.content.id) { // Edit mode
        this.summaryService.getRequestFundSummary(this.content.id).subscribe((result) => {
          this.fundAllocationForm.patchValue(result.allocate_details);
        })
      }
    });
  }

  save() {
    if (this.fundAllocationForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }


}
