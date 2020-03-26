import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { authTypeOptionsConstant } from 'src/app/constants/service.constants';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';

@Component({
  selector: 'app-saml-sso-configuration',
  templateUrl: './saml-sso-configuration.component.html',
  styleUrls: ['./saml-sso-configuration.component.scss']
})
export class SamlSsoConfigurationComponent implements OnInit {

  formFields;
  chooseoptions = authTypeOptionsConstant;
  samlSsoConfigurationForm = new FormGroup({});
  operations = [];

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getSamlSsoConfigCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.samlSsoConfigurationForm, this.formFields);
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
    if(this['self'].samlSsoConfigurationForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].samlSsoConfigurationForm.reset();
    }
  }

}
