import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';

import { currencyOptionsConstant, durationOptionsConstant } from 'src/app/constants/service.constants';

import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { TextareaAddonComponent } from 'src/app/common/textarea-addon/textarea-addon.component';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-concept-proposal',
  templateUrl: './ist-concept-proposal.component.html',
  styleUrls: ['./ist-concept-proposal.component.scss']
})
export class IstConceptProposalComponent implements OnInit {

  formFields;
  constructor(
    private criteriaService: IstCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: IstSummaryService
    ) { }

  
  durationOptions = durationOptionsConstant;
  conceptProposalForm = new FormGroup({  });

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this }
  ]

  ngOnInit() {
    this.criteriaService.getConceptProposalCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.conceptProposalForm, this.formFields);
    });
    

    this.summaryService.getConceptProposalSummary().subscribe((result) => {
      this.conceptProposalForm.patchValue(result);
    })
  }

  onCallbackOperation(opr){
    opr.callback();
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 


  save() {
    if(this['self'].conceptProposalForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].conceptProposalForm.reset();
    }
  }

  textEntry(title) {
    this.modalService.show(TextareaAddonComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: title,
        content: ""
      }
    });
  }

  

}
