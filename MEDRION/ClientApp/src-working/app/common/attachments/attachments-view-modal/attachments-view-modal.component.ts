import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { departmentsOptionsConstant, documentTemplateOptionsConstant, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { CommonCriteriaService } from 'src/app/services/common/common-criteria.service';
import { CommonSummaryService } from 'src/app/services/common/common-summary.service';

@Component({
  selector: 'app-attachments-view-modal',
  templateUrl: './attachments-view-modal.component.html',
  styleUrls: ['./attachments-view-modal.component.scss']
})
export class AttachmentsViewModalComponent implements OnInit {

  formFields;
  departments = departmentsOptionsConstant;
  currencyOptions = documentTemplateOptionsConstant;

  attachmentsForm = new FormGroup({
    document_type: new FormControl(null),
    date_by: new FormControl(null),
    comments: new FormControl(null),
    attachments: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(
    private criteriaService: CommonCriteriaService,
    private summaryService: CommonSummaryService,
    public modalRef: MDBModalRef

  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getAttachmentsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getAttachmentsSummary(this.content.id).subscribe((result) => {
          this.attachmentsForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getAttachmentsSummary(this.content.id).subscribe((result) => {
          this.attachmentsForm.patchValue(result);
          this.attachmentsForm.disable();
        })
      }
    });
  }

  save() {
    if (this.attachmentsForm.valid) {
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

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
