import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { currencyOptionsConstant, titleOptionsConstant } from 'src/app/constants/service.constants';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { GridApi } from 'ag-grid-community';
import * as find from 'lodash/find';
import * as cloneDeep from 'lodash/cloneDeep';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstStudyTeamOrganizationViewModalComponent } from '../../ist-study-team-organization/ist-study-team-organization-view-modal/ist-study-team-organization-view-modal.component';
import { DeleteOperationsRenderer } from 'src/app/common/client-grid/delete-operations.component';
import * as findIndex from 'lodash/findIndex';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';
import { IstStudyTeamAddOrRoleComponent } from '../ist-study-team-add-or-role/ist-study-team-add-or-role.component';

@Component({
  selector: 'app-ist-study-team-team-view-modal',
  templateUrl: './ist-study-team-team-view-modal.component.html',
  styleUrls: ['./ist-study-team-team-view-modal.component.scss']
})
export class IstStudyTeamTeamViewModalComponent implements OnInit {

  formFields;
  titleOptions = titleOptionsConstant;
  columnDefs;
  gridApi: GridApi;
  rowData;
  gridOptions;

  loadTeam = false;

  studyTeamTeamForm = new FormGroup({
    prefix: new FormControl(null),
    first_name: new FormControl(null),
    middle_name: new FormControl(null),
    last_name: new FormControl(null),
    occupation: new FormControl(null),

    speciality: new FormControl(null),
    medical_license_number: new FormControl(null),
    address: new FormControl(null),
    postal_code: new FormControl(null),
    city: new FormControl(null),

    state: new FormControl(null),
    country: new FormControl(null),
    preferred_contact_method: new FormControl(null),
    email_address: new FormControl(null),
    phone_number: new FormControl(null),


    ext_phone_number: new FormControl(null),
    other_phone_number: new FormControl(null),
    ext_other_phone_number: new FormControl(null),
    fax: new FormControl(null),
    ext_fax: new FormControl(null),

    organisation_name: new FormControl(null),
    user_role: new FormControl(null),
    cv_upload_attachment: new FormControl(null),
    notes: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  currencyOptions = currencyOptionsConstant;
  frameworkComponents;
  context;
  id=3;

  constructor(
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    public modalRef: MDBModalRef,
    private modalService: MDBModalService
  ) {
    this.columnDefs = [
      {
        "headerName": "Organization",
        "field": "org",
        "sort": "asc",
      },
      {
        "headerName": "Role",
        "field": "role",
      },{
        headerName: "",
        field: "value",
        cellRenderer: "deleteRenderer",
        colId: "params",
        width: 50,
        sortable: false,
        cellStyle: { "overflow": 'visible' }
      }
    ]

    this.rowData = [
      {
        "id": 1,
        "org": "Green Hill Medical Center", "role": "Primary Investigator"
      },
      {
        "id": 2,
        "org": "Green Hill Medical Center", "role": "Lead Investigator"
      },
      {
        "id": 3,
        "org": "Freeman Hospital Center", "role": "Co-Investigator"
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
    this.criteriaService.getStudyTeamTeamCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getStudyTeamTeamSummary(this.content.id).subscribe((result) => {
          this.studyTeamTeamForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getStudyTeamTeamSummary(this.content.id).subscribe((result) => {
          this.studyTeamTeamForm.patchValue(result);
          this.studyTeamTeamForm.disable();
        })
      }
    });

    setTimeout(() => {
      this.loadTeam = true;
    }, 350);
  }

  addRow() {
    // if (!find(this.rowData, { "id": null })) {
    //   let newRowData = cloneDeep(this.rowData);
    //   newRowData.push({ "id": this.id++, "org": "", "role": "" });
    //   this.rowData = newRowData;
    // }
    this.modalService.show(IstStudyTeamAddOrRoleComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-sm modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
  }

  save() {
    if (this.studyTeamTeamForm.valid) {
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

  addNewOrg() {
    this.modalService.show(IstStudyTeamOrganizationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
  }

  editRow(){

  }

  deleteRow(params){
    // let caughtId = findIndex(this.rowData, {id: params.data.id});
    // let newRowData = cloneDeep(this.rowData);
    // newRowData.splice(caughtId,1);
    // this.rowData = newRowData;
  }

  onSetGridApi(gridApi) {
    this.gridApi = gridApi;
  }

  addOrganization(){
    
  }

  showFiles() {
    let files = '';
    if (this.files && this.files.length > 0) {
      for (let i = 0; i < this.files.length; i++) {
        files += this.files[i].name;
        if (!(this.files.length - 1 === i)) {
          files += ',';
        }
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
