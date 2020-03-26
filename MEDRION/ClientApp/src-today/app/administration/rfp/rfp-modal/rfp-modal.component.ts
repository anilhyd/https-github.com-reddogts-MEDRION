import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { FormGroup } from '@angular/forms';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';

@Component({
  selector: 'app-rfp-modal',
  templateUrl: './rfp-modal.component.html',
  styleUrls: ['./rfp-modal.component.scss']
})
export class RfpModalComponent implements OnInit {

  formFields;
  loiOptions = chooseOptionsConstant;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  rfpForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {


    this.criteriaService.getRfpCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.rfpForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRfpSummary(this.content.id).subscribe((result) => {
          this.rfpForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View RFP') { //View mode 
        this.summaryService.getRfpSummary(this.content.id).subscribe((result) => {
          this.rfpForm.patchValue(result);
          this.rfpForm.disable();
        })
      }
    });

  }

  save() {
    if (this.rfpForm.valid) {
        this.modalRef.hide();
    }
  }

}
