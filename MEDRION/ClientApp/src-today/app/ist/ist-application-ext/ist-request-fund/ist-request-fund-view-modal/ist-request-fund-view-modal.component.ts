import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { currencyOptionsConstant, stateOptionsSample, categoryOptionsConstant, subCategoryOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-ist-request-fund-view-modal',
  templateUrl: './ist-request-fund-view-modal.component.html',
  styleUrls: ['./ist-request-fund-view-modal.component.scss']
})
export class IstRequestFundViewModalComponent implements OnInit {

  formFields;
  basicOptions = stateOptionsSample;
  categoryOptions = categoryOptionsConstant;
  subCategoryOptions = subCategoryOptionsConstant;
  uploadedFiles = ["Attachement one"];
  fundForm = new FormGroup({});

  // fundForm = new FormGroup({
  //   category: new FormControl(null),
  //   sub_category: new FormControl(null),
  //   others: new FormControl(null),
  //   requested_fund: new FormControl(null),
  //   bank_details: new FormControl(null),

  //   fullfillment_type: new FormControl(null),
  //   shipping_address: new FormControl(null),
  //   partner_network: new FormControl(null),
  //   billing_address: new FormControl(null),
  //   required_quantity: new FormControl(null),

  //   required_quantity_dropdown: new FormControl(null),
  //   recurrence: new FormControl(null),

  //   estimation: new FormGroup({
  //     estimation_attachments: new FormControl(null),
  //     estimation_notes: new FormControl(null),
  //   }),
  //   actuals: new FormGroup({
  //     actuals_attachments: new FormControl(null),
  //     actuals_notes: new FormControl(null)
  //   })
  // })

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;


  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  currencyOptions = currencyOptionsConstant;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService

  ) {
  }

  ngOnInit() {
    this.criteriaService.getRequestFundCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_formfields;
      this.appFunctions.getFormStructure(this.fundForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getRequestFundSummary(this.content.id).subscribe((result) => {
          this.fundForm.patchValue(result.add_details);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getRequestFundSummary(this.content.id).subscribe((result) => {
          this.fundForm.patchValue(result.add_details);
          this.fundForm.disable();
        })
      }
    });
  }

  save() {
    if (this.fundForm.valid) {
      if (!this.content && this.heading === 'Add') {
        //this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        //this.summaryService.editDeptSummary(this.content.id, Object.assign(this.deptForm.getRawValue(), {_id:this.content.id})).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})
      }
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


