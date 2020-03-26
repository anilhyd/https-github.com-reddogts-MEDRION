import { Component, OnInit, EventEmitter } from '@angular/core';
import { IMyOptions, UploadFile, UploadInput, MDBModalRef, MDBModalService, humanizeBytes, UploadOutput } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { FormGroup } from '@angular/forms';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-grants-outcome-assessment-view-modal',
  templateUrl: './grants-outcome-assessment-view-modal.component.html',
  styleUrls: ['./grants-outcome-assessment-view-modal.component.scss']
})
export class GrantsOutcomeAssessmentViewModalComponent implements OnInit {

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  
  formFields;

  outcomeAssessmentForm = new FormGroup({});

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(
    private criteriaService: GrantsCriteriaService,
    private summaryService: GrantsSummaryService,
    public modalRef: MDBModalRef,
    private modalService: MDBModalService,
    private appFunctions: AppFunctionsService,

  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getOutcomeAssessmentCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.outcomeAssessmentForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getOutcomeAssessmentSummary(this.content.id).subscribe((result) => {
          this.outcomeAssessmentForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getOutcomeAssessmentSummary(this.content.id).subscribe((result) => {
          this.outcomeAssessmentForm.patchValue(result);
          this.outcomeAssessmentForm.disable();
        })
      }
    });
  }

  save() {
    if (this.outcomeAssessmentForm.valid) {
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
