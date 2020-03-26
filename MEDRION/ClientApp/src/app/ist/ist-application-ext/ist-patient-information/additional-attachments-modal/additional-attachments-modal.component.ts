import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { documentOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';


@Component({
  selector: 'app-additional-attachments-modal',
  templateUrl: './additional-attachments-modal.component.html',
  styleUrls: ['./additional-attachments-modal.component.scss']
})
export class AdditionalAttachmentsModalComponent implements OnInit {

  
  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  additionalAttachmentsForm = new FormGroup({});

  documentOptionsConstant = documentOptionsConstant;


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
      this.formFields = criteria.formFields[0].additional_attachments;
      this.appFunctions.getFormStructure(this.additionalAttachmentsForm, this.formFields);
    });


  }

}
