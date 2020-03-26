import { Component, OnInit, EventEmitter } from '@angular/core';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { FormGroup, FormControl } from '@angular/forms';

import { UploadFile, UploadInput, UploadOutput, MDBModalRef } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { IMyOptions } from 'ng-uikit-pro-standard';
import { currencyOptionsConstant, countryOptionsConstant, stateOptionsConstant } from 'src/app/constants/service.constants';
import { Subject } from 'rxjs';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-um-organization-view-modal',
  templateUrl: './um-organization-view-modal.component.html',
  styleUrls: ['./um-organization-view-modal.component.scss']
})
export class UmOrganizationViewModalComponent implements OnInit {

  formFields;
  operations;
  isView = false;
  viewId = null;

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  currencyOptions = currencyOptionsConstant;
  countryOptions = countryOptionsConstant;
  stateOptions = stateOptionsConstant;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();


  orgForm = new FormGroup({
    org_code: new FormControl(null),
    org_name: new FormControl(null),
    org_description: new FormControl(null),
    org_default_currency: new FormControl(null),
    org_logo: new FormControl(null),

    org_ist: new FormControl(null),
    org_eap: new FormControl(null),
    org_grants: new FormControl(null),
    org_valid_up_to: new FormControl(null),
    org_address_1: new FormControl(null),

    org_address_2: new FormControl(null),
    org_zip_code: new FormControl(null),
    org_city: new FormControl(null),
    org_country: new FormControl(null),
    org_state: new FormControl(null),

    org_phone_no: new FormControl(null),
    org_phone_no_ext: new FormControl(null),
    org_fax_no: new FormControl(null),
    org_fax_no_ext: new FormControl(null),
    org_website: new FormControl(null),
    org_emailId: new FormControl(null),
    org_title: new FormControl(null),

    org_main_header: new FormControl(null),
    org_sub_header: new FormControl(null),

    org_no_of_licensed_modules: new FormControl(null)
  })

  constructor(
    private criteriaService: UmCriteriaService,
    private summaryService: UmSummaryService,
    public modalRef: MDBModalRef
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getOrgCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getOrgSummary(this.content.id).subscribe((result) => {
          this.orgForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getOrgSummary(this.content.id).subscribe((result) => {
          this.orgForm.patchValue(result);
          this.orgForm.disable();
        })
      }
    });
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

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


  save() {
    if (this.orgForm.valid) {
      if (!this.content && this.heading === 'Add') {
        this.summaryService.addOrgSummary(this.orgForm.getRawValue()).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })

      } else if (this.content && this.content.id && this.heading === 'Edit') {
        this.summaryService.editOrgSummary(this.content.id, Object.assign(this.orgForm.getRawValue(), { _id: this.content.id })).subscribe(result => {
          this.action.next();
          this.modalRef.hide();
        })
      }
    }


  }
}
