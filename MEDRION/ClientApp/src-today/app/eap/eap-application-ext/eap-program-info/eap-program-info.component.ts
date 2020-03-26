import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { stateOptionsSample, eapTypesOptionsConstant } from 'src/app/constants/service.constants';
 
import { MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { EapCriteriaService } from 'src/app/services/eap/eap-criteria.service';
import { EapSummaryService } from 'src/app/services/eap/eap-summary.service';

@Component({
  selector: 'app-eap-program-info',
  templateUrl: './eap-program-info.component.html',
  styleUrls: ['./eap-program-info.component.scss']
})
export class EapProgramInfoComponent implements OnInit {

  formFields;
  stateOptions = stateOptionsSample;
  selectedProduct: any;
  uploadedFiles = ["Attachement one", "Attachment two", "Attachment three"];
  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  
  requestType = eapTypesOptionsConstant;
  

  programInfoForm = new FormGroup({});

  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: EapCriteriaService,
    private modalService: MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: EapSummaryService
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getProgramInfoCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.programInfoForm, this.formFields);
    });

    this.summaryService.getProgramInfoSummary().subscribe((result) => {
      this.programInfoForm.patchValue(result);
    })
    this.selectedProduct = 1;
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
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
    { name: 'Save', type: 'submit', callback: this.save, self: this }
  ]

  onCallbackOperation(opr) {
    opr.callback();
  }

  save() {
    if (this['self'].programInfoForm.valid) {
      this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Save', content: { heading: '', description: 'Data Saved Successfully.' } } });
      this['self'].programInfoForm.reset();
    }
  }

  dataChanged(newValue) {
    this.selectedProduct = newValue
  }

}
