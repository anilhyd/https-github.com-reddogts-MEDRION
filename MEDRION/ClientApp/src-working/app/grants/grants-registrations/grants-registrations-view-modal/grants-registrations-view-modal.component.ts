import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsConstant, titleOptionsConstant, countryOptionsConstant } from 'src/app/constants/service.constants';

import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { AppFunctionsService } from 'src/app/services/app-functions.service';

import { Subject } from 'rxjs';
import { GrantsRegistrationsComplianceComponent } from '../grants-registrations-compliance/grants-registrations-compliance.component';


@Component({
  selector: 'app-grants-registrations-view-modal',
  templateUrl: './grants-registrations-view-modal.component.html',
  styleUrls: ['./grants-registrations-view-modal.component.scss']
})
export class GrantsRegistrationsViewModalComponent implements OnInit {

  formFields;
  titleOptions = titleOptionsConstant;
  uploadedFiles = [];
  stateOptions = stateOptionsConstant;
  countryOptions = countryOptionsConstant;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  orgType = [
    { "value": "universityHospital", "label": "University/Hospital" },
    { "value": "communityHospital", "label": "Community Hospital" },
    { "value": "MedicalEducation&CommunicationCompany", "label": "Medical Education & Communication Company" },
    { "value": "Medical/Professionalsociety", "label": "Medical/Professional society" },
    { "value": "National/RegionalAssociation", "label": "National/Regional Association" },
    { "value": "HelathCareProfessionalAssociation", "label": "HelathCare Professional Association" },
    { "value": "Academic/HealthcareInstitution", "label": "Academic/Healthcare Institution" },
    { "value": "ForProfit&Non-ProfitEducators", "label": "For Profit & Non-Profit Educators" },
    { "value": "Non-ProfitProfessionalOrganization", "label": "Non-Profit Professional Organization" },
    { "value": "Non-Profittreatment&ResearchCentre", "label": "Non-Profit treatment & Research Centre" },
    { "value": "Academic/HealthcareInstitution", "label": "Academic / Healthcare Institution" },
    { "value":"Academic Institutions", "label":"Academic Institutions" },
    { "value": "Other", "label": "Other" }
  ];
  taxStatus = [
    { "value": "501c6", "label": "501c6" },
    { "value": "501c3", "label": "501c3" },
    { "value": "ForProfit", "label": "For Profit" },
    { "value": "170c", "label": "170c" }
  ];

  registrationForm = new FormGroup({});

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalServiceas: MDBModalService,
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getRegistrationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.registrationForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRegistrationSummary(this.content.id).subscribe((result) => {
          this.registrationForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getRegistrationSummary(this.content.id).subscribe((result) => {
          this.registrationForm.patchValue(result);
          this.registrationForm.disable();
        })
      }
    });
  }

  showFiles() {
    let files = '';
    this.uploadedFiles = [];

    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }

    }

    for (let i = 0; i < this.files.length; i++) {
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

  openComplianceModal() {
    this.modalRef.hide();
    this.modalServiceas.show(GrantsRegistrationsComplianceComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
  }
}
