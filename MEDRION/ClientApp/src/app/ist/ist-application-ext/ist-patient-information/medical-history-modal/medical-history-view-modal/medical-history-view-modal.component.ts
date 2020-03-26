import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-medical-history-view-modal',
  templateUrl: './medical-history-view-modal.component.html',
  styleUrls: ['./medical-history-view-modal.component.scss']
})
export class MedicalHistoryViewModalComponent implements OnInit {

 
  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  medicalHistoryForm = new FormGroup({});


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
      this.formFields = criteria.formFields[0].medical_history;
      this.appFunctions.getFormStructure(this.medicalHistoryForm, this.formFields);
    });


  }


}
