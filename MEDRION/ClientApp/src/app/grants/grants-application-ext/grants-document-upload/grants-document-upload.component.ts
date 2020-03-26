import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-grants-document-upload',
  templateUrl: './grants-document-upload.component.html',
  styleUrls: ['./grants-document-upload.component.scss']
})
export class GrantsDocumentUploadComponent implements OnInit {

  formFields;
  uploadedFiles = ["Attachement one", "Attachment two", "Attachment three"];
  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;


  docuemntUploadForm = new FormGroup({});
  
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: GrantsCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService
    ) { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
    }

    ngOnInit() {
      this.criteriaService.getDocumentUploadCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.docuemntUploadForm, this.formFields);

      });
    }

    showFiles() {
      let files = '';
      for (let i = 0; i < this.files.length; i ++) {
        files += this.files[i].name;
         if (!(this.files.length - 1 === i)) {
           files += ',';
        }
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

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this },
    { name: 'Cancel', type:'button', callback: this.cancel, self: this }
  ]

  onCallbackOperation(opr){
    opr.callback();
  }

  save() {
    if(this['self'].docuemntUploadForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].docuemntUploadForm.reset();
    }
  }
  cancel() {
    if(this['self'].docuemntUploadForm.valid){
      this['self'].docuemntUploadForm.reset();
    }
  }

  
}