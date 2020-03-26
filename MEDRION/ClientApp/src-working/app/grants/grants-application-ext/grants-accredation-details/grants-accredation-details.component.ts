import { Component, OnInit } from '@angular/core';
import { chooseOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { FormGroup } from '@angular/forms';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';

@Component({
  selector: 'app-grants-accredation-details',
  templateUrl: './grants-accredation-details.component.html',
  styleUrls: ['./grants-accredation-details.component.scss']
})
export class GrantsAccredationDetailsComponent implements OnInit {

  formFields;
  chooseoptions = chooseOptionsConstant;
  accredationDetailsForm = new FormGroup({});

  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private summaryService: GrantsSummaryService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getAccredationDetailsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.accredationDetailsForm, this.formFields);
    });

    this.summaryService.getAccredationDetailsSummary().subscribe((result) => {
      this.accredationDetailsForm.patchValue(result);
    })
  }

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this }
  ]
  
  onCallbackOperation(opr){
    opr.callback();
  }
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

  save() {
    if(this['self'].accredationDetailsForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].accredationDetailsForm.reset();
    }
  }

}
