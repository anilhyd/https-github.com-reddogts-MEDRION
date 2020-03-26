import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { FormGroup } from '@angular/forms';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { studyReportPatientConstant, countryOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-add-product-approval',
  templateUrl: './add-product-approval.component.html',
  styleUrls: ['./add-product-approval.component.scss']
})
export class AddProductApprovalComponent implements OnInit {

  formFields;

  optionsSelect = studyReportPatientConstant;
  countryOptions = countryOptionsConstant;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  addProductApprovalViewForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getProductCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_product_approval;
      this.appFunctions.getFormStructure(this.addProductApprovalViewForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getProductSummary(this.content.id).subscribe((result) => {
          this.addProductApprovalViewForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getProductSummary(this.content.id).subscribe((result) => {
          this.addProductApprovalViewForm.patchValue(result);
          this.addProductApprovalViewForm.disable();
        })
      }
    });
  }

  save() {
    if (this.addProductApprovalViewForm.valid) {
        this.modalRef.hide();
    }
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
