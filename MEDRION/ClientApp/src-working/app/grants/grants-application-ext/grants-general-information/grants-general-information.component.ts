import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { chooseOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';

@Component({
  selector: 'app-grants-general-information',
  templateUrl: './grants-general-information.component.html',
  styleUrls: ['./grants-general-information.component.scss']
})
export class GrantsGeneralInformationComponent implements OnInit {

  formFields;
  chooseoptions = chooseOptionsConstant;
  generalInformationForm = new FormGroup({});

  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: GrantsSummaryService
  ) { }
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions;
  ngOnInit() {
    this.criteriaService.getGeneralInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.generalInformationForm, this.formFields);
    });


    this.summaryService.getGeneralInformationSummary().subscribe((result) => {
      this.generalInformationForm.patchValue(result);
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