import { Component, OnInit, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef, IMyOptions} from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { classificationTypesOptionsConstant, deliveryTypeOptionsConstant } from 'src/app/constants/service.constants';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-patient-information-classification-modal',
  templateUrl: './ist-patient-information-classification-modal.component.html',
  styleUrls: ['./ist-patient-information-classification-modal.component.scss']
})
export class IstPatientInformationClassificationModalComponent implements OnInit {

  formFields;

  classificationTypesOptions = classificationTypesOptionsConstant;
  deliveryTypeOptions = deliveryTypeOptionsConstant;

  addClassificationForm = new FormGroup({
    classification_type: new FormControl(null),
    attachments: new FormControl(null),
    notes: new FormControl(null),
    test_details: new FormGroup({
      test_name: new FormControl(null),
      date: new FormControl(null),

      result: new FormControl(null),
      result_units: new FormControl(null),
      normal_range: new FormControl(null),
      normal_range_units: new FormControl(null),
      
      comments: new FormControl(null),
    })
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
    private criteriaService: IstCriteriaService,
    public modalRef: MDBModalRef,

  ) {
  }

  ngOnInit() {
    this.criteriaService.getPatientInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_classifications;
    });
  }

  save() {
    if (this.addClassificationForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }

  showFiles() {
    let files = '';
    if(this.files && this.files.length){
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
  
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
}
