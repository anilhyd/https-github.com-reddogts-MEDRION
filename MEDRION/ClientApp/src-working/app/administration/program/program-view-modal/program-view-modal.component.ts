import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';


@Component({
  selector: 'app-program-view-modal',
  templateUrl: './program-view-modal.component.html',
  styleUrls: ['./program-view-modal.component.scss']
})
export class ProgramViewModalComponent implements OnInit {

  
  formFields;

  programForm = new FormGroup({});

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getProgramCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.programForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getProgramSummary(this.content.id).subscribe((result) => {
          this.programForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getProgramSummary(this.content.id).subscribe((result) => {
          this.programForm.patchValue(result);
          this.programForm.disable();
        })
      }
    });
  }

}
