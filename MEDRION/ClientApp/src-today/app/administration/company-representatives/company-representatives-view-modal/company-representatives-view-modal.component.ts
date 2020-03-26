import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { FormGroup } from '@angular/forms';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-company-representatives-view-modal',
  templateUrl: './company-representatives-view-modal.component.html',
  styleUrls: ['./company-representatives-view-modal.component.scss']
})
export class CompanyRepresentativesViewModalComponent implements OnInit {

  formFields;

  optionsSelect = [
    { value: 'Mr', label: 'Mr.' },
    { value: 'Mrs', label: 'Mrs.' },
    { value: 'Dr', label: 'Dr.' },
    { value: 'Rev', label: 'Rev.' },
    { value: 'Ms', label: 'Ms.' },
  ];

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  companyRepresentativeViewForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
  ) {
  }

  ngOnInit() {
    this.criteriaService.getCompanyRepresentativesCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.companyRepresentativeViewForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getCompanyRepresentativesSummary(this.content.id).subscribe((result) => {
          this.companyRepresentativeViewForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getCompanyRepresentativesSummary(this.content.id).subscribe((result) => {
          this.companyRepresentativeViewForm.patchValue(result);
          this.companyRepresentativeViewForm.disable();
        })
      }
    });
  }

  save() {
    if (this.companyRepresentativeViewForm.valid) {
        this.modalRef.hide();
    }
  }

}
