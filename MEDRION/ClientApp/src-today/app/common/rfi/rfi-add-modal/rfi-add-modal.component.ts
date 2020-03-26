import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { CommonCriteriaService } from 'src/app/services/common/common-criteria.service';
import { CommonSummaryService } from 'src/app/services/common/common-summary.service';

@Component({
  selector: 'app-rfi-add-modal',
  templateUrl: './rfi-add-modal.component.html',
  styleUrls: ['./rfi-add-modal.component.scss']
})
export class RfiAddModalComponent implements OnInit {
  uploadedFiles = [];
  
  formFields;
  rowData;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  rfiNewForm = new FormGroup({
    title: new FormControl(null),
    details: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();


  constructor(
    private summaryService: CommonSummaryService,
    public modalRef: MDBModalRef

  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.summaryService.getRfiSummary(this.content.id).subscribe((result) => {
      this.rowData = result.thread;
      //this.rfiNewForm.patchValue(result);
    })
  }

  save() {
    if (this.rfiNewForm.valid) {
      if (!this.content && this.heading === 'Add') {
        //this.summaryService.addDeptSummary(this.deptForm.getRawValue()).subscribe(result=>{
        this.action.next();
        this.modalRef.hide();
        //})
      }
    }
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
