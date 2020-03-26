import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  uploadedFiles = [];
  humanizeBytes: Function;
  dragOver: boolean;

  constructor() { 
    this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
   }

  ngOnInit() {
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
