import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { FormGroup } from '@angular/forms';
import { stateOptionsSample } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';

@Component({
  selector: 'app-screen-repository-modal',
  templateUrl: './screen-repository-modal.component.html',
  styleUrls: ['./screen-repository-modal.component.scss']
})
export class ScreenRepositoryModalComponent implements OnInit {

 
  formFields;
  stateOptionsSample = stateOptionsSample;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  screenRepositoryForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {


    this.criteriaService.getScreenRepositoryCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.screenRepositoryForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getScreenRepositorySummary(this.content.id).subscribe((result) => {
          this.screenRepositoryForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getScreenRepositorySummary(this.content.id).subscribe((result) => {
          this.screenRepositoryForm.patchValue(result);
          this.screenRepositoryForm.disable();
        })
      }
    });

  }

  save() {
    if (this.screenRepositoryForm.valid) {
        this.modalRef.hide();
    }
  }

}
