import { Component, OnInit, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { departmentsOptionsConstant, documentOptionsConstant, publicationTypeConstant, publicationContentConstant } from 'src/app/constants/service.constants';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { UploadFile, UploadInput, UploadOutput, MDBModalService } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { GridApi } from 'ag-grid-community';
import { AttachmentClassificationComponent } from 'src/app/common/attachment-classification/attachment-classification.component';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-publications-view-modal',
  templateUrl: './ist-publications-view-modal.component.html',
  styleUrls: ['./ist-publications-view-modal.component.scss']
})
export class IstPublicationsViewModalComponent implements OnInit {
  
  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

  formFields;
  departments = departmentsOptionsConstant;


  publicationsForm = new FormGroup({});
  // publicationsForm = new FormGroup({
  //   type: new FormControl(null),
  //   content: new FormControl(null),
  //   journal_name: new FormControl(null),
  //   title: new FormControl(null),
  //   current_end_date_of_analysis: new FormControl(),
  //   expected_date_of_publication: new FormControl(),
  //   notes: new FormControl(null),
  // document_type: new FormControl(null),
  // upload_date: new FormControl(null),
  // attachments_notes: new FormControl(null)
  // })  

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  documentOptions =  documentOptionsConstant;
  typeOptions = publicationTypeConstant;
  contentOptions = publicationContentConstant;

  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;

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
      this.criteriaService.getPublicationsCriteria().subscribe(criteria => {
        this.formFields = criteria.formFields;
        this.appFunctions.getFormStructure(this.publicationsForm, this.formFields);
        if(this.content && this.content.id && this.heading === 'Edit' ){ // Edit mode
          this.summaryService.getPublicationsSummary(this.content.id).subscribe((result) => {
            this.publicationsForm.patchValue(result);
          })
        } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
          this.summaryService.getPublicationsSummary(this.content.id).subscribe((result) => {
            this.publicationsForm.patchValue(result);
            this.publicationsForm.disable();
          })
        }
      });

      this.rowData = [
        {
          "id": 1,
          "attachment_classification": "Abstarct Draft 1", "file_name": "Draft 1", "date":"20-Jan-2020"
        },
        {
          "id": 2,
          "attachment_classification": "Abstarct Draft 2", "file_name": "Draft 2", "date":"25-Jan-2020"
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

  save() {
    if (this.publicationsForm.valid) {
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
