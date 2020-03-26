import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { FormGroup } from '@angular/forms';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';

@Component({
  selector: 'app-instructions-modal',
  templateUrl: './instructions-modal.component.html',
  styleUrls: ['./instructions-modal.component.scss']
})
export class InstructionsModalComponent implements OnInit {


  formFields;
  loiOptions = chooseOptionsConstant;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  instructionsForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {


    this.criteriaService.getInstructionsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.instructionsForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getInstructionsSummary(this.content.id).subscribe((result) => {
          this.instructionsForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getInstructionsSummary(this.content.id).subscribe((result) => {
          this.instructionsForm.patchValue(result);
          this.instructionsForm.disable();
        })
      }
    });

  }

  save() {
    if (this.instructionsForm.valid) {
        this.modalRef.hide();
    }
  }

}
