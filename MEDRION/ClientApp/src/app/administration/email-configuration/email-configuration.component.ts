
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { connectionTypeOptionsConstant } from 'src/app/constants/service.constants';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';

@Component({
  selector: 'app-email-configuration',
  templateUrl: './email-configuration.component.html',
  styleUrls: ['./email-configuration.component.scss']
})
export class EmailConfigurationComponent implements OnInit {

  formFields;
  chooseoptions = connectionTypeOptionsConstant;
  emailConfigurationForm = new FormGroup({});
  operations = [];

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getEmailConfigCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.emailConfigurationForm, this.formFields);
      this.operations = criteria.operations.map(operation => {
        return operation && operation.id === 'test_connection' ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
    });
  }

  onCallbackOperation(opr){
    opr.callback();
  }

  test_connection(){
    this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Test Connection',content: { heading: '', description: 'Connection working properly.'}}});
  }
  

  save() {
    if(this['self'].emailConfigurationForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].emailConfigurationForm.reset();
    }
  }

}
