import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { stateOptionsSample, dosageFormulationOptionsConstant } from 'src/app/constants/service.constants';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-return-retrival-modal',
  templateUrl: './return-retrival-modal.component.html',
  styleUrls: ['./return-retrival-modal.component.scss']
})
export class ReturnRetrivalModalComponent implements OnInit {

  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  retrivalRequestForm = new FormGroup({
    return_quantity: new FormControl('500'),
    return_quantity_type: new FormControl('Tablets')
  });

  optionsSelect = stateOptionsSample;
  dosageFormulationOptionsConstant = dosageFormulationOptionsConstant;

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


    this.criteriaService.getAllRequestsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].return_retrival;
      this.appFunctions.getFormStructure(this.retrivalRequestForm, this.formFields);
    });


  }

  save(){
    
  }


}
