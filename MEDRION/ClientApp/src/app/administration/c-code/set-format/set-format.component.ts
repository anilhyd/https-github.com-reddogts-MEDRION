import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { stateOptionsSample, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';



@Component({
  selector: 'app-set-format',
  templateUrl: './set-format.component.html',
  styleUrls: ['./set-format.component.scss']
})
export class SetFormatComponent implements OnInit {

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions
  
  formFields;
  stateOptions = stateOptionsSample;

  numberOfParts = [{ "value": "1", "label":"1"},{ "value": "2", "label":"2"},{ "value": "3", "label":"3"}];
  seperator = [{ "value": "-", "label":"-"},{ "value": "/", "label":"/"},{ "value": ":", "label":":"}];
  partsType = [{ "value": "static", "label":"Static"},{ "value": "dynamic", "label":"Dynamic"},{ "value": "counter", "label":"Counter"}];
  formats = [{ "value": "3", "label":"3"},{ "value": "4", "label":"4"},{ "value": "5", "label":"5"}];
  cResetFrenquency = [{ "value": "monthly", "label":"Monthly"},{ "value": "yearly", "label":"Yearly"},{ "value": "never", "label":"Never"}];
  valueType = [{ "value": "dd", "label":"DD"},{ "value": "mm", "label":"MM"},{ "value": "mmyyyy", "label":"MMYYYY"}];
  setFormatForm = new FormGroup({});

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    private modalService: MDBModalService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getCCodeCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.setFormatForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getCCodeSummary(this.content.id).subscribe((result) => {
          this.setFormatForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getCCodeSummary(this.content.id).subscribe((result) => {
          this.setFormatForm.patchValue(result);
          this.setFormatForm.disable();
        })
      }
    });
  }

}
