import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { FormGroup } from '@angular/forms';
import { stateOptionsSample, modulesOptions, subModulesOptions } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';

@Component({
  selector: 'app-policy-configurator-modal',
  templateUrl: './policy-configurator-modal.component.html',
  styleUrls: ['./policy-configurator-modal.component.scss']
})
export class PolicyConfiguratorModalComponent implements OnInit {

  
  formFields;
  stateOptionsSample = stateOptionsSample;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  policyConfiguratorForm = new FormGroup({});

  uploadedFiles = ["Attachement one"];
  modules = modulesOptions;
  subModules = subModulesOptions;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;


  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {


    this.criteriaService.getPolicyConfiguratorCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.policyConfiguratorForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getPolicyConfiguratorSummary(this.content.id).subscribe((result) => {
          this.policyConfiguratorForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getPolicyConfiguratorSummary(this.content.id).subscribe((result) => {
          this.policyConfiguratorForm.patchValue(result);
          this.policyConfiguratorForm.disable();
        })
      }
    });

  }


  showFiles() {
    let files = '';
    // for (let i = 0; i < this.files.length; i++) {
    //   files += this.files[i].name;
    //   if (!(this.files.length - 1 === i)) {
    //     files += ',';
    //   }
    // }
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


  save() {
    if (this.policyConfiguratorForm.valid) {
        this.modalRef.hide();
    }
  }

}
