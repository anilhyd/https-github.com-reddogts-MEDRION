import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { stateOptionsSample, fieldLabelOptionsConstant, sectionOptionsConstant, formNameOptionsConstant, amendmentTypeOptionsConstant } from 'src/app/constants/service.constants';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, IMyOptions  } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { AttachmentClassificationComponent } from 'src/app/common/attachment-classification/attachment-classification.component';

@Component({
  selector: 'app-ist-amendments-view-modal',
  templateUrl: './ist-amendments-view-modal.component.html',
  styleUrls: ['./ist-amendments-view-modal.component.scss']
})
export class IstAmendmentsViewModalComponent implements OnInit {
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions;

  formFields;
  stateOptions = stateOptionsSample;
  fieldLabelOptions = fieldLabelOptionsConstant;
  sectionOptions = sectionOptionsConstant;
  formNameOptions = formNameOptionsConstant;
  amendmentTypeOptions = amendmentTypeOptionsConstant;

  // File upload
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  amdTypeOptions = [
    { value: '1', label: 'New Protocol' },
    { value: '2', label: 'Change in Protocol' },
    { value: '3', label: 'New Investigator' },
    { value: '4', label: 'Study Reports' }
    ];


   amemdmentsForm = new FormGroup({});
  //   amd_type: new FormControl(null),
  //   amd_title: new FormControl(null),
  //   patient_name: new FormControl(null),
  //   submission_date: new FormControl(null),
  //   form_name: new FormControl(null),
  //   section: new FormControl(null),
  //   field_label: new FormControl(null),
  //   field_value: new FormControl(null),
  //   notes: new FormControl(null),
  //   upload_file_name: new FormControl(null),
  //   upload_date: new FormControl(null)
  // }) 
  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;


  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
    ) { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
      this.columnDefs = [
        {
          "headerName": "Attachment Classification",
          "field": "attachment_classification"
        },
        {
          "name": "File Name",
          "field": "file_name"
        },
        {
          "headerName": "Date",
          "field": "date"
        },{
          headerName: "Actions",
          field: "value",
          cellRenderer: "deleteRenderer",
          colId: "params",
          width: 80,
          sortable: false,
          cellStyle: { "overflow": 'visible' }
        }
      ]
  
      
  
      this.gridOptions = {
        pagination: true,
        rowSelection: 'single',
        rowHeight: 32,
  
        defaultColDef: {
          sortable: true,
          suppressNavigable: true,
          cellClass: 'no-border',
          suppressMovable: true,
  
        }
      }
  
      this.context = { componentParent: this };
      this.frameworkComponents = {
        deleteRenderer: EditAndDeleteOperationsRenderer
      };
    }

    onGridReady(params) {
      this.gridApi = params.api;
      setTimeout(() => {
        this.gridApi.sizeColumnsToFit();
        this.gridApi.startEditingCell(params);
      }, 500);
    }

    ngOnInit() {
      this.criteriaService.getAmendmentsCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.amemdmentsForm, this.formFields);

        if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
          this.summaryService.getAmendmentsSummary(this.content.id).subscribe((result) => {
            this.amemdmentsForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getAmendmentsSummary(this.content.id).subscribe((result) => {
            this.amemdmentsForm.patchValue(result);
            this.amemdmentsForm.disable();
          })
        }
      });

      this.rowData = [
        {
          "id": 1,
          "attachment_classification": " New Investigator ", "file_name": "Peter John - New Investigator ", "date":"22-Jan-2020"
        }
      ]
  
      setTimeout(() => {
        this.loadGrid = true;
      }, 350);
    }

    deleteRow(){

    }

    editRow(){
      
    }

    addNewAttachment(){
      this.modalService.show(AttachmentClassificationComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class:'modal-md modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Add'
        }
        
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
    }
     else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
}
}
