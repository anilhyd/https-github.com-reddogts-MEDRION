import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { stateOptionsSample, orgStudyCenterOptionsConstant, siteEvalOptionsConstant } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-ist-site-evaluation-view-modal',
  templateUrl: './ist-site-evaluation-view-modal.component.html',
  styleUrls: ['./ist-site-evaluation-view-modal.component.scss']
})
export class IstSiteEvaluationViewModalComponent implements OnInit {

  

  uploadedFiles = [];

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions;


  itemId;
  formFields;
  stateOptions = stateOptionsSample;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  contactPersonOptions = [
    { value: '1', label: 'Hubert ' },
    { value: '2', label: 'Mckinnon' },
    { value: '3', label: 'Flanagan' },
    { value: '4', label: 'Auchmuty' },
    { value: '5', label: 'Freeman' },
    { value: 'P.Jayson', label: 'P.Jayson' }     
  ];

  organisationStudyCenter =  orgStudyCenterOptionsConstant;
  siteEvaluationType =  siteEvalOptionsConstant;

  assignedRepresentativeOptions = [{ "value": "Robert Steve", "label":"Robert Steve"},{ "value": "OptionTwo", "label":"Option Two"},{ "value": "OptionThree", "label":"Option Three"}];

  siteEvaluationForm = new FormGroup({});
  //     organisation_study_center: new FormControl(null),
  //     site_evaluation_type: new FormControl(null),
  //     assigned_representative: new FormControl(null),
  //     expected_date_of_site_visit: new FormControl(null),
  //     contact_person_name: new FormControl(null),
  //     contact_person_designation: new FormControl(null),
  //     notes: new FormControl(null)
  // }) 
  
  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
    ) { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
    }

    ngOnInit() {
      this.criteriaService.getSiteEvaluationCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.siteEvaluationForm, this.formFields);
        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getSiteEvaluationSummary(this.content.id).subscribe((result) => {
            this.siteEvaluationForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getSiteEvaluationSummary(this.content.id).subscribe((result) => {
            this.siteEvaluationForm.patchValue(result);
            this.siteEvaluationForm.disable();
          })
        }
      });
    }


   

    showFiles() {
      let files = '';
      this.uploadedFiles = [];

      for (let i = 0; i < this.files.length; i ++) {
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

   /* removeItem(item){
   
    //this.uploadedFiles.splice(item, 1);

    //const index = this.uploadedFiles.indexOf(item);
    for (let i = 0; i < this.files.length; i ++) {
      if(this.uploadedFiles[i] === item){
      this.uploadedFiles.slice(item, 1);
      }
    }
    
    console.log(this.uploadedFiles);

    //hideElement: boolean = true;
  
  } */


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
