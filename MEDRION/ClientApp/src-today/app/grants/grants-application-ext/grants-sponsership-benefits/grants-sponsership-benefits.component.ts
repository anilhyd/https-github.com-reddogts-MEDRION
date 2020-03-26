import { Component, OnInit } from '@angular/core';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { chooseOptionsConstant, countryOptionsConstant, stateOptionsConstant } from 'src/app/constants/service.constants';
import { FormGroup } from '@angular/forms';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-grants-sponsership-benefits',
  templateUrl: './grants-sponsership-benefits.component.html',
  styleUrls: ['./grants-sponsership-benefits.component.scss']
})
export class GrantsSponsershipBenefitsComponent implements OnInit {

  formFields;
  chooseoptions = chooseOptionsConstant;
  countryOptions= countryOptionsConstant;
  stateOptions = stateOptionsConstant;
  sponsorshipBenefitsForm = new FormGroup({});
  TargetGeographicReachOptions = [
    { value: 'NorthAmerica', label: 'North America' }
  ]
  EventVenueTypeOptions = [
    { value: 'AuditoriumStуlе', label: 'Auditorium Stуlе' }
  ]
  
  
  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private summaryService: GrantsSummaryService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getSponsorshipBenefitsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.sponsorshipBenefitsForm, this.formFields);
    });

    this.summaryService.getSponsorshipBenefitsSummary().subscribe((result) => {
      this.sponsorshipBenefitsForm.patchValue(result);
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
    if(this['self'].sponsorshipBenefitsForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].sponsorshipBenefitsForm.reset();
    }
  }

}
