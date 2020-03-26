import { Component, OnInit, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { assignMessage } from 'src/app/constants/service.constants';

import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { UserInstructionModalComponent } from '../user-instruction-modal/user-instruction-modal.component';

@Component({
  selector: 'app-letter-of-intent-modal',
  templateUrl: './letter-of-intent-modal.component.html',
  styleUrls: ['./letter-of-intent-modal.component.scss']
})
export class LetterOfIntentModalComponent implements OnInit {
  // File upload
  uploadedFiles = ["Attachement one", "Attachment two", "Attachment three"];
  selectedProduct: any;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  id: number;

  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.selectedProduct = 1;
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    for (let i = 0; i < this.files.length; i++) {
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



  onCallbackOperation(opr) {
    opr.callback();
  }



  dataChanged(newValue) {
    this.selectedProduct = newValue
  }

  openUserInstructionsModal() {
    this.modalRef.hide();
    this.modalService.show(UserInstructionModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null,
        id: this.id
      }
    });
  }

}
