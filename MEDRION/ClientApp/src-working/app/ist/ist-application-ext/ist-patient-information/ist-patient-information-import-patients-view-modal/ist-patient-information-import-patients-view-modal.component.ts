import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ist-patient-information-import-patients-view-modal',
  templateUrl: './ist-patient-information-import-patients-view-modal.component.html',
  styleUrls: ['./ist-patient-information-import-patients-view-modal.component.scss']
})
export class IstPatientInformationImportPatientsViewModalComponent implements OnInit {

  formFields;

  importForm = new FormGroup({
    choose_files: new FormControl(null)
  })

  formData: FormData;
  files: UploadFile[] = [];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  constructor(
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {
    
  }

  save() {
    if (this.importForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }


  showFiles() {
    let files = '';
    if(files && files.length){
      for (let i = 0; i < this.files.length; i++) {
        files += this.files[i].name;
        if (!(this.files.length - 1 === i)) {
          files += ',';
        }
      }
      return files;
    }
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
