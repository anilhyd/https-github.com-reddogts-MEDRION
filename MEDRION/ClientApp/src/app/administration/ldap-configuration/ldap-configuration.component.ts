import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { authTypeOptionsConstant } from 'src/app/constants/service.constants';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ldap-configuration',
  templateUrl: './ldap-configuration.component.html',
  styleUrls: ['./ldap-configuration.component.scss']
})
export class LdapConfigurationComponent implements OnInit {

  formFields;
  chooseoptions = authTypeOptionsConstant;
  ldapConfigurationForm = new FormGroup({});
  operations = [];
  uploadedFiles = ["Attachement one", "Attachment two", "Attachment three"];


  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getLdapConfigCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.ldapConfigurationForm, this.formFields);
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
    if(this['self'].ldapConfigurationForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].ldapConfigurationForm.reset();
    }
  }



  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    for (let i = 0; i < this.files.length; i ++) {
      let newAttachment = this.files[i].name;
      this.uploadedFiles.push(newAttachment);
    }
    return files;
   }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
    };
    this.files = [];
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
  }
}
