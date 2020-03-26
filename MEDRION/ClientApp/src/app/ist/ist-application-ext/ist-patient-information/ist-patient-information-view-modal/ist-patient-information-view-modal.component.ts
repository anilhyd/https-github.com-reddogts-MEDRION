import { Component, OnInit } from '@angular/core';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { MDBModalRef, IMyOptions, MDBModalService } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { genderOptionsConstant, weightOptionsConstant, heightOptionsConstant, deliveryTypeOptionsConstant, birthTypeOptionsConstant, fetalOutcomeOptionsConstant } from 'src/app/constants/service.constants';
import { AdditionalAttachmentsModalComponent } from '../additional-attachments-modal/additional-attachments-modal.component';
import { PregnancyDetailsModalComponent } from '../pregnancy-details-modal/pregnancy-details-modal.component';
import { PatientDiagnosisNotesModalComponent } from '../patient-diagnosis-notes-modal/patient-diagnosis-notes-modal.component';
import { LabDetailsModalComponent } from '../lab-details-modal/lab-details-modal.component';
import { MedicalHistoryModalComponent } from '../medical-history-modal/medical-history-modal.component';
import { DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { GridApi } from 'ag-grid-community';
import { EditAndDeleteOperationsRenderer } from 'src/app/common/client-grid/edit-and-delete-operations.component';


@Component({
  selector: 'app-ist-patient-information-view-modal',
  templateUrl: './ist-patient-information-view-modal.component.html',
  styleUrls: ['./ist-patient-information-view-modal.component.scss']
})
export class IstPatientInformationViewModalComponent implements OnInit {

  formFields;

  genderOptions = genderOptionsConstant;
  weightOptions = weightOptionsConstant;
  heightOptions = heightOptionsConstant;
  deliveryTypeOptions = deliveryTypeOptionsConstant;
  birthTypeOptions = birthTypeOptionsConstant;
  fetalOutcomeOptions = fetalOutcomeOptionsConstant;
  
  viewPatientInformationForm = new FormGroup({
    first_name: new FormControl(null),
    middle_name: new FormControl(null),
    last_name: new FormControl(null),
    initials: new FormControl(null),

    patient_id: new FormControl(null),
    date_of_birth: new FormControl(null),
    gender: new FormControl(null),

    date_of_lmp: new FormControl(null),
    weight: new FormControl(null),
    weight_dropdown: new FormControl(null),
    height: new FormControl(null),
    height_dropdown: new FormControl(null),

    address: new FormControl(null),

    postal_code: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    country: new FormControl(null),

    phone_number: new FormControl(null),
    phone_number_ext: new FormControl(null),
    other_phone_number: new FormControl(null),
    other_phone_number_ext: new FormControl(null),
    email_id: new FormControl(null),

    withdrawn: new FormControl(null),
    remarks: new FormControl(null),

    status: new FormControl(null),
    due_date: new FormControl(null),
    no_of_fields: new FormControl(null),
    weeks_at_experience: new FormControl(null),

    delivery_date: new FormControl(null),
    delivery_type: new FormControl(null),
    birth_type: new FormControl(null),
    feutal_outcome: new FormControl(null),
    
    notes: new FormControl(null)
  })

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  
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
    private modalService: MDBModalService

  ) {
    this.columnDefs = [
      {
        "headerName":  "Classification",
        "field": "classification"
      },
      {
        "name": "File Name",
        "field": "file_name"
      },
      {
        "headerName": "Date of Upload",
        "field": "date_of_upload"
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
    this.criteriaService.getPatientInformationCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_formfields;
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getPatientInformationSummary(this.content.id).subscribe((result) => {
          this.viewPatientInformationForm.patchValue(result);
        })
      }else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getPatientInformationSummary(this.content.id).subscribe((result) => {
          this.viewPatientInformationForm.patchValue(result);
          this.viewPatientInformationForm.disable();
        })
      }
    });

    this.rowData = [
      {
        "classification": "Test Report",
        "file_name": "Complete Blood Profile",
        "date_of_upload": "22-Feb-2020",
        "id":1
      },
      {
        "classification": "Prescription Information",
        "file_name": "Prescription Information - Exemestane",
        "date_of_upload": "23-Feb-2020",
        "id":2
      },
      {
        "classification": "MRI Report",
        "file_name": "Breast MRI Report - Dated 20-Jan-2020",
        "date_of_upload": "24-Feb-2020",
        "id":3
      },
      {
        "classification": "Mammography Report",
        "file_name": "Mamography Report - Tia",
        "date_of_upload": "25-Feb-2020",
        "id":4
      },
      {
        "classification": "PET Scan Report",
        "file_name": "PET Report - Tia",
        "date_of_upload": "26-Feb-2020",
        "id":5
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

  save() {
    if (this.viewPatientInformationForm.valid) {
      this.action.next();
      this.modalRef.hide();
    }
  }


  newAdditionalAttachment(){
   this.modalService.show(AdditionalAttachmentsModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
    });
  }

  pregnancyDetails(){
    this.modalService.show(PregnancyDetailsModalComponent, {
       backdrop: true,
       keyboard: false,
       ignoreBackdropClick: true,
       class: 'modal-lg modal-full-height modal-right',
       animated: true,
     });
   }

   patientDiagnosisNotes(){
    this.modalService.show(PatientDiagnosisNotesModalComponent, {
       backdrop: true,
       keyboard: false,
       ignoreBackdropClick: true,
       class: 'modal-lg modal-full-height modal-right',
       animated: true,
     });
   }
   labDetails(){
    this.modalService.show(LabDetailsModalComponent, {
       backdrop: true,
       keyboard: false,
       ignoreBackdropClick: true,
       class: 'modal-vlg modal-full-height modal-right',
       animated: true,
     });
   }
   medicalHistory(){
    this.modalService.show(MedicalHistoryModalComponent, {
       backdrop: true,
       keyboard: false,
       ignoreBackdropClick: true,
       class: 'modal-lg modal-full-height modal-right',
       animated: true,
     });
   }
   
   

    

   

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

}
