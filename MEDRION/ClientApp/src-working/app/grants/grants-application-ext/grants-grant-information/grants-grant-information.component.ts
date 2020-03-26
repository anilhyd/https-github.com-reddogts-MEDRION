import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { chooseOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';

@Component({
  selector: 'app-grants-grant-information',
  templateUrl: './grants-grant-information.component.html',
  styleUrls: ['./grants-grant-information.component.scss']
})
export class GrantsGrantInformationComponent implements OnInit {

  formFields;
  chooseoptions = chooseOptionsConstant;
  grantsInformationForm = new FormGroup({});

  programTypeOptions  = [
    { value: '1', label: 'Education Grants.' }
];
  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: GrantsSummaryService
  ) { }

  ngOnInit() {
    this.criteriaService.getGrantsInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.grantsInformationForm, this.formFields);
    });

    this.summaryService.getGrantsInformationSummary().subscribe((result) => {
      this.grantsInformationForm.patchValue(result);
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
    if(this['self'].grantsInformationForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].grantsInformationForm.reset();
    }
  }
}
