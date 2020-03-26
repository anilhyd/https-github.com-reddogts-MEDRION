import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample, chooseOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';

@Component({
  selector: 'app-grants-general-information-charitable',
  templateUrl: './grants-general-information-charitable.component.html',
  styleUrls: ['./grants-general-information-charitable.component.scss']
})
export class GrantsGeneralInformationCharitableComponent implements OnInit {

  
  formFields;
  chooseoptions = stateOptionsSample;
  yesNoOption = chooseOptionsConstant;
  generalInformationCharitableForm = new FormGroup({});
  AreaOfFocusOptions = [
    { value: 'Neurology', label: 'Neurology' }
  ]
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private summaryService: GrantsSummaryService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getGeneralInformationCharitableCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.generalInformationCharitableForm, this.formFields);
    });

    this.summaryService.getGeneralInformationCharitableSummary().subscribe((result) => {
      this.generalInformationCharitableForm.patchValue(result);
    })
    
  }

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this }
  ]
  onCallbackOperation(opr){
    opr.callback();
  }
  save() {
    if(this['self'].conceptProposalForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].conceptProposalForm.reset();
    }
  }

}
