import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { stateOptionsSample, repeatsEveryOptions, recurrenceOptions, statusOptions, productNamesOptionsConstant, dosageFormulationOptionsConstant, strengthValuesOptionsConstant, strengthAndUnitsOptionsConstant, fullFillmentTypeOptionsConstant, patientIdOptionsConstant, shippingAddressOptionsConstant } from 'src/app/constants/service.constants';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { UmOrganizationViewModalComponent } from 'src/app/um/um-organization/um-organization-view-modal/um-organization-view-modal.component';
import { ReturnRetrivalModalComponent } from '../return-retrival-modal/return-retrival-modal.component';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { IstStudyTeamOrganizationViewModalComponent } from '../../ist-study-team-organization/ist-study-team-organization-view-modal/ist-study-team-organization-view-modal.component';

@Component({
  selector: 'app-all-requests-view-modal',
  templateUrl: './all-requests-view-modal.component.html',
  styleUrls: ['./all-requests-view-modal.component.scss']
})
export class AllRequestsViewModalComponent implements OnInit {

  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  formData: FormData;
  fundRequestForm = new FormGroup({});
  recurrence: any;
  shippingAddress: any = '';
  billingAddress: any = '';
  isNewMode: boolean = true;


  optionsSelect = stateOptionsSample;
  statusOptions = statusOptions;
  productNamesOptions = productNamesOptionsConstant;
  dosageFormulationOptions = dosageFormulationOptionsConstant;
  strengthValuesOptions = strengthValuesOptionsConstant;
  strengthAndUnitsOptions = strengthAndUnitsOptionsConstant;
  fullFillmentTypeOptions = fullFillmentTypeOptionsConstant;
  patientIdOptions = patientIdOptionsConstant;
  shippingAddressOptions = shippingAddressOptionsConstant;
  recurrenceOptions = recurrenceOptions;
  repeatsEveryOptions = repeatsEveryOptions;

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
      this.formFields = criteria.formFields[0].new_request;
      this.appFunctions.getFormStructure(this.fundRequestForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.isNewMode = false;
        this.summaryService.getAllRequestsProductSummary(this.content.id).subscribe((result) => {
          this.fundRequestForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.isNewMode = false;
        this.summaryService.getAllRequestsProductSummary(this.content.id).subscribe((result) => {
          this.fundRequestForm.patchValue(result);
          this.fundRequestForm.disable();
        })
      }
    });
  }


  addOrg() {
    this.modalService.show(IstStudyTeamOrganizationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
  }

  save() {
    if (this.fundRequestForm.valid) {
      if (!this.content && this.heading === 'Add') {
        //this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        //this.summaryService.editDeptSummary(this.content.id, Object.assign(this.deptForm.getRawValue(), {_id:this.content.id})).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})
      }
    }
  }

}
