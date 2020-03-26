import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant, fetalOutcomeOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-pregnancy-details-modal',
  templateUrl: './pregnancy-details-modal.component.html',
  styleUrls: ['./pregnancy-details-modal.component.scss']
})
export class PregnancyDetailsModalComponent implements OnInit {

  
  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  pregnancyDetailsForm = new FormGroup({});

  chooseOptionsConstant = chooseOptionsConstant;
  deliveryTypeOptions = [
    { "value": "NaturalChildbirth", "label": "Natural Childbirth" },
    { "value": "CaesareanSection", "label": "Caesarean Section" },
    { "value": "ForcepsDelivery", "label": "Forceps Delivery" },
    { "value": "VaginalDelivery", "label": "Vaginal Delivery" },
    { "value": "VaccumExtraction", "label": "Vaccum Extraction" },
    { "value": "Normal", "label": "Normal" }
];
  fetalOutcomeOptions =  fetalOutcomeOptionsConstant;

birthTypeOptions  = [
  { "value": "BirthTypeOne", "label": "Birth Type One" },
  { "value": "BirthTypeTwo", "label": "Birth Type Two" },
  { "value": "BirthTypeThree", "label": "Birth Type Three" }
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
      this.formFields = criteria.formFields[0].pregnancy_details;
      this.appFunctions.getFormStructure(this.pregnancyDetailsForm, this.formFields);
      this.pregnancyDetailsForm.patchValue({
        "pregnant": "Yes",
        "due_date": "25-Jun-2020",
        "nof_fetus": 1,
        "weeks_at_exposure": 20,
        "delivery_date": "",
        "delivery_type": "Normal",
        "birth_type": "",
        "fetal_outcome": "",
        "first":false,
        "second":true,
        "thrid":false,
        "notes": "The delivery is going to be on 25-Jun-2019. Once the  after the actual date of delivery the actual details will be updated accordingly."
      })
    });


  }

}
