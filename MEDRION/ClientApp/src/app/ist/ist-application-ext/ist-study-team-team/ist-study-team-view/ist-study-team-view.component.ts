import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { currencyOptionsConstant, titleOptionsConstant } from 'src/app/constants/service.constants';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-ist-study-team-view',
  templateUrl: './ist-study-team-view.component.html',
  styleUrls: ['./ist-study-team-view.component.scss']
})
export class IstStudyTeamViewComponent implements OnInit {

  formFields;
  titleOptions = titleOptionsConstant;

  studyTeamTeamForm = new FormGroup({
    prefix: new FormControl(null),
    first_name: new FormControl(null),
    middle_name: new FormControl(null),
    last_name: new FormControl(null),
    occupation: new FormControl(null),

    speciality: new FormControl(null),
    medical_license_number: new FormControl(null),
    address: new FormControl(null),
    postal_code: new FormControl(null),
    city: new FormControl(null),

    state: new FormControl(null),
    country: new FormControl(null),
    preferred_contact_method: new FormControl(null),
    email_address: new FormControl(null),
    phone_number: new FormControl(null),


    ext_phone_number: new FormControl(null),
    other_phone_number: new FormControl(null),
    ext_other_phone_number: new FormControl(null),
    fax: new FormControl(null),
    ext_fax: new FormControl(null),
    
    organisation_name: new FormControl(null),
    user_role: new FormControl(null),
    cv_upload_attachment: new FormControl(null),
    notes: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  currencyOptions = currencyOptionsConstant;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,

  ) {
  }

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this }
  ]

  onCallbackOperation(opr){
    opr.callback();
  }
  
  ngOnInit() {
    this.criteriaService.getStudyTeamTeamCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getStudyTeamTeamSummary(this.content.id).subscribe((result) => {
          this.studyTeamTeamForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getStudyTeamTeamSummary(this.content.id).subscribe((result) => {
          this.studyTeamTeamForm.patchValue(result);
          this.studyTeamTeamForm.disable();
        })
      }
    });
  }

  save() {
    
  }

  showFiles() {
    let files = '';
    if(this.files && this.files.length >0){
      for (let i = 0; i < this.files.length; i++) {
        files += this.files[i].name;
        if (!(this.files.length - 1 === i)) {
          files += ',';
        }
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
