import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant, strengthAndUnitsOtherOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-lab-details-view-modal',
  templateUrl: './lab-details-view-modal.component.html',
  styleUrls: ['./lab-details-view-modal.component.scss']
})
export class LabDetailsViewModalComponent implements OnInit {

  
  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  labDetailsForm = new FormGroup({});
  strengthAndUnitsOptions = strengthAndUnitsOtherOptionsConstant;

  resultUnitOptions = [
    { "value": "UnitOne", "label": "Unit One" },
    { "value": "UnitTwo", "label": "Unit Two" },
    { "value": "UnitThree", "label": "Unit Three" }
];
rangeUnitOptions = [
  { "value": "UnitOne", "label": "Unit One" },
  { "value": "UnitTwo", "label": "Unit Two" },
  { "value": "UnitThree", "label": "Unit Three" }
];

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {


    this.criteriaService.getPatientInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].lab_details;
      this.appFunctions.getFormStructure(this.labDetailsForm, this.formFields);
    });


  }

}
