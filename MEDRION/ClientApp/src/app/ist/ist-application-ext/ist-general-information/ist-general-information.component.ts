import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { stateOptionsSample, chooseOptionsConstant, studyInvolvesOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';

import { MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes, IMyOptions } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-ist-general-information',
  templateUrl: './ist-general-information.component.html',
  styleUrls: ['./ist-general-information.component.scss']
})
export class IstGeneralInformationComponent implements OnInit {
 
  uploadedFiles = ["Letter of ..."];
  formFields;
  stateOptions = stateOptionsSample;
  studyInvolvesOptions = studyInvolvesOptionsConstant;
  chooseOptionsConstant = chooseOptionsConstant;
  selectedProduct: any;
  content:any;
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions;
  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  studySponsored = [
    { value: '1', label: 'Individual' },
    { value: '2', label: 'Organisation' }
  ];
  therapeuticArea = [
    { value: '1', label: 'Oncology' },
    { value: '2', label: 'Pulmonology' },
    { value: '3', label: 'Cardiology' },
    { value: '4', label: 'Neurology' },
    { value: '3', label: 'Dermatology' },
    { value: '3', label: 'Ophthalmology' },
    { value: '3', label: 'Urology' }
  ];
  studyType = [
    { value: '1', label: 'Systematic Review' },
    { value: '2', label: 'Randomized Controlled Trails' },
    { value: '3', label: 'Cohort Study' },
    { value: '4', label: 'Case-Control Study' },
    { value: '4', label: 'Community Trail' }
  ];
  requestType = [
    { value: '1', label: 'Fund' },
    { value: '2', label: 'Product' },
    { value: '3', label: 'Both' },
  ];
  amdTypeOptions = [
    { value: '1', label: 'New Protocol' },
    { value: '2', label: 'Change in Protocol' },
    { value: '3', label: 'New Investigator' },
    { value: '4', label: 'Study Reports' }
  ];
  productType = [
    { value: '1', label: 'Exemestane' },
    { value: '2', label: 'Radium-223 Dichloride' },
    { value: '3', label: 'Super Drug' },
    { value: '4', label: 'Wonder Drug' }
  ];

  generalInformationForm = new FormGroup({});

  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: IstCriteriaService,
    private modalService: MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: IstSummaryService
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getGeneralInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.generalInformationForm, this.formFields);
    });

    
    this.summaryService.getGeneralInformationSummary().subscribe((result) => {
      this.generalInformationForm.patchValue(result);
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

  operations = [
    { name: 'Save', type: 'submit', callback: this.save, self: this }
  ]

  onCallbackOperation(opr) {
    opr.callback();
  }

  save() {
    if (this['self'].generalInformationForm.valid) {
      this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Save', content: { heading: '', description: 'Data Saved Successfully.' } } });
      this['self'].generalInformationForm.reset();
    }
  }

  dataChanged(newValue) {
    this.selectedProduct = newValue
  }
}