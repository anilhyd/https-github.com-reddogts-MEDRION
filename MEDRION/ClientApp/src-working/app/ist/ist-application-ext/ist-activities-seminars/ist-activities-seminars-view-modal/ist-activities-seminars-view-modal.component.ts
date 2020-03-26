import { Component, OnInit, Input, EventEmitter  } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { departmentsOptionsConstant, currencyOptionsConstant, asActivityTypeConstant, asActivitySubTypeConstant, documentOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-activities-seminars-view-modal',
  templateUrl: './ist-activities-seminars-view-modal.component.html',
  styleUrls: ['./ist-activities-seminars-view-modal.component.scss']
})
export class IstActivitiesSeminarsViewModalComponent implements OnInit {

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  
  formFields;
  departments = departmentsOptionsConstant;
  currencyOptions =  currencyOptionsConstant;

  activitiesSeminarsForm = new FormGroup({});
  // activitiesSeminarsForm = new FormGroup({
  //   activity_type: new FormControl(null),
  //   activity_sub_type: new FormControl(null),
  //   activity_start_date: new FormControl(null),
  //   activity_end_date: new FormControl(null),
  //   activity_title: new FormControl(null),
  //   activity_agenda: new FormControl(null),
  //   activity_overview: new FormControl(null),
  //   activty_session_title: new FormControl(null),
  //   faculty_first_name: new FormControl(null),
  //   faculty_last_name: new FormControl(null),
  //   occupation: new FormControl(null),
  //   qualification: new FormControl(null),
  //   document_type: new FormControl(null),
  //   upload_date: new FormControl(null),
  //   notes: new FormControl(null)
  // })  

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  typeOptions =  asActivityTypeConstant;
  subtypeOptions =  asActivitySubTypeConstant;
  documentOptions = documentOptionsConstant;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,

  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
      this.criteriaService.getActivitiesSeminarsCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.activitiesSeminarsForm, this.formFields);
        if(this.content && this.content.id && this.heading === 'Edit' ){ // Edit mode
          this.summaryService.getActivitiesSeminarsSummary(this.content.id).subscribe((result) => {
            this.activitiesSeminarsForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getActivitiesSeminarsSummary(this.content.id).subscribe((result) => {
            this.activitiesSeminarsForm.patchValue(result);
            this.activitiesSeminarsForm.disable();
          })
        }
      });
  }

  save() {
    if (this.activitiesSeminarsForm.valid) {
      if(!this.content && this.heading === 'Add'){
        //this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
          this.action.next();
          this.modalRef.hide();
        //})
        
      }else if(this.content && this.content.id && this.heading === 'Edit'){
        //this.summaryService.editDeptSummary(this.content.id, Object.assign(this.deptForm.getRawValue(), {_id:this.content.id})).subscribe(result=>{
          this.action.next();
          this.modalRef.hide();
        //})
      }      
    }
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

}
