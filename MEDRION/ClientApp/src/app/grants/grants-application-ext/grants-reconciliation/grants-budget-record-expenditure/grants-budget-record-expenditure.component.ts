import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';


@Component({
  selector: 'app-grants-budget-record-expenditure',
  templateUrl: './grants-budget-record-expenditure.component.html',
  styleUrls: ['./grants-budget-record-expenditure.component.scss']
})
export class GrantsBudgetRecordExpenditureComponent implements OnInit {
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  
  uploadedFiles = [];
  formFields;
  stateOptions = stateOptionsSample;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  
  recordExpenditureForm = new FormGroup({});
  
  content:any;
  heading:string;
  action: Subject<any> = new Subject();
  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
    ) { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
    } 
    ngOnInit() {
      this.criteriaService.getReconciliationCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields[0].record_expenditure;
        this.appFunctions.getFormStructure(this.recordExpenditureForm, this.formFields);

        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getReconciliationSummary(this.content.id).subscribe((result) => {
            this.recordExpenditureForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getReconciliationSummary(this.content.id).subscribe((result) => {
            this.recordExpenditureForm.patchValue(result);
            this.recordExpenditureForm.disable();
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
