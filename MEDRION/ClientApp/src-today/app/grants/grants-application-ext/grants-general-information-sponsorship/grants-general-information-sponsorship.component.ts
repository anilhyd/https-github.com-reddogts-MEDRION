import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample, chooseOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';

@Component({
  selector: 'app-grants-general-information-sponsorship',
  templateUrl: './grants-general-information-sponsorship.component.html',
  styleUrls: ['./grants-general-information-sponsorship.component.scss']
})
export class GrantsGeneralInformationSponsorshipComponent implements OnInit {

  
  formFields;
  chooseoptions = stateOptionsSample;
  yesNoOptions = chooseOptionsConstant;
  generalInformationSponsorshipForm = new FormGroup({});
  AreaOfFocusOptions = [
    { value: 'Neurology', label: 'Neurology' }
  ]
  SpncershipLevelOptions = [
    { value: 'Elite', label: 'Elite' }
  ]
  approximatePercentageOptions = [
    { value: '25', label: '25' }
  ]

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private summaryService: GrantsSummaryService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getGeneralInformationSponsorshipCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.generalInformationSponsorshipForm, this.formFields);
    });

    this.summaryService.getGeneralInformationSponsorshipSummary().subscribe((result) => {
      this.generalInformationSponsorshipForm.patchValue(result);
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
