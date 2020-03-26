import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { stateOptionsSample } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-ist-site-evaluation-update-status',
  templateUrl: './ist-site-evaluation-update-status.component.html',
  styleUrls: ['./ist-site-evaluation-update-status.component.scss']
})
export class IstSiteEvaluationUpdateStatusComponent implements OnInit {
  
  formFields;
  stateOptions = stateOptionsSample;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  siteEvaluationUpdateStatusForm = new FormGroup({
    actualSiteVisitedDate: new FormControl(null)
}) 

  content:any;
  heading:string;
  action: Subject<any> = new Subject();   

  constructor(
    private criteriaService: IstCriteriaService,
    public modalRef: MDBModalRef
  ) { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.criteriaService.getSiteEvaluationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
    });
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
