import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridApi } from 'ag-grid-community';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { stateOptionsSample, statusOptions, fundCategoryOptionsConstant, fundSubCategoryOptionsConstant } from 'src/app/constants/service.constants';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { UmCriteriaService } from 'src/app/services/um/um-criteria.service';
import { UmSummaryService } from 'src/app/services/um/um-summary.service';
import { Subject } from 'rxjs';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { FundReturnRetrivalModalComponent } from '../fund-return-retrival-modal/fund-return-retrival-modal.component';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { AttachmentClassificationComponent } from 'src/app/common/attachment-classification/attachment-classification.component';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { AddBankDetailsComponent } from 'src/app/common/add-bank-details/add-bank-details.component';

@Component({
  selector: 'app-fund-request-modal',
  templateUrl: './fund-request-modal.component.html',
  styleUrls: ['./fund-request-modal.component.scss']
})
export class FundRequestModalComponent implements OnInit {

  
  formFields;
  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  fundRequestForm = new FormGroup({});
  columnDefs; 
  gridApi: GridApi;
  rowData;
  context;
  gridOptions;
  frameworkComponents;
  loadGrid = false;


   // File upload
   formData: FormData;
   files: UploadFile[];
   uploadInput: EventEmitter<UploadInput>;
   humanizeBytes: Function;
   dragOver: boolean;


  optionsSelect = stateOptionsSample;
  statusOptions = statusOptions;
  categoryOptions = fundCategoryOptionsConstant;
  subCategoryOptions = fundSubCategoryOptionsConstant;

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 
  bankDetailsOptions = [{ "value": "FederalBank", "label":"Federal Bank"}];

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {

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

  ngOnInit() {


    this.criteriaService.getAllRequestsCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].fund_request;
      this.appFunctions.getFormStructure(this.fundRequestForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getAllRequestsFundSummary(this.content.id).subscribe((result) => {
          this.fundRequestForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getAllRequestsFundSummary(this.content.id).subscribe((result) => {
          this.fundRequestForm.patchValue(result);
          this.fundRequestForm.disable();
        })
      }
    });


    this.rowData = [
      {
        "id": 1,
        "attachment_classification": "Estimated", "file_name": "Estimated Bill", "date":"29 Sep 2019"
      },
      {
        "id": 2,
        "attachment_classification": "Actual", "file_name": "Estimated Bill", "date":"03 Oct 2019"
      }
    ]

    setTimeout(() => {
      this.loadGrid = true;
    }, 350);
  }

  fundRetrivalRequestModal() {
    this.modalService.show(FundReturnRetrivalModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-md modal-full-height modal-right',
      animated: true,
      data: {
        heading: null,
        content: null
      }
    });
  }
    
  save() {
    if (this.fundRequestForm.valid) {
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

  addBankDetails(){
    this.modalService.show(AddBankDetailsComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-lg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add'
      }
      
    });
  }
  
}
