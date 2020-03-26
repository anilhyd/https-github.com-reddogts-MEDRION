import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { IstPatientInformationViewModalComponent } from './ist-patient-information-view-modal/ist-patient-information-view-modal.component';
import { IstPatientInformationClassificationModalComponent } from './ist-patient-information-classification-modal/ist-patient-information-classification-modal.component';
import { IstPatientInformationMedicalHistoryModalComponent } from './ist-patient-information-medical-history-modal/ist-patient-information-medical-history-modal.component';
import { IstPatientInformationDiagnosisModalComponent } from './ist-patient-information-diagnosis-modal/ist-patient-information-diagnosis-modal.component';
import { IstPatientInformationImportPatientsViewModalComponent } from './ist-patient-information-import-patients-view-modal/ist-patient-information-import-patients-view-modal.component';
import { DeleteBoxComponent } from 'src/app/common/delete-box/delete-box.component';
import { WithdrawComponent } from 'src/app/common/withdraw/withdraw.component';

@Component({
  selector: 'app-ist-patient-information',
  templateUrl: './ist-patient-information.component.html',
  styleUrls: ['./ist-patient-information.component.scss']
})
export class IstPatientInformationComponent implements OnInit {

  columnDefs;
  operations;
  gridApi: GridApi;
  selectedRow;
  advanceSearch;
  rowData;
  modalRef: MDBModalRef;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private criteriaService: IstCriteriaService,
    private summaryService: IstSummaryService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getPatientInformationCriteria().subscribe(criteria => {
      this.columnDefs = criteria.columnDefs;
      this.advanceSearch = criteria.advanceSearch;
      this.operations = criteria.operations.map(operation => {
        return (operation && (operation.id === 'add' || operation.id === 'view_modal')) ? { name: operation.name, callback: this[operation.id], self: this, disabled: 'false' } : { name: operation.name, callback: this[operation.id], self: this }
      });
      this.setSummary()
    });
  }

  onSetGridApi(gridApi) {
    this.gridApi = gridApi;
  }


  onCallbackOperation(opr) {
    opr.callback();
  }

  onSelectionChanged(event) {
    this.selectedRow = this.gridApi.getSelectedRows() ? this.gridApi.getSelectedRows()[0] : null;
  }

  onRowDoubleClicked(event) {
    this.modalService.show(IstPatientInformationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'View',
        content: { id: this.selectedRow['id'] }
      }
    });
  }

  add() {
    let modalRef = this['self'].modalService.show(IstPatientInformationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  
  edit() {
    let modalRef = this['self'].modalService.show(IstPatientInformationViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Edit',
        content: { id: this['self'].selectedRow['id'] }
      }
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  classifications() {
    let modalRef = this['self'].modalService.show(IstPatientInformationClassificationModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  medical_history() {
    let modalRef = this['self'].modalService.show(IstPatientInformationMedicalHistoryModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  medical_diagnosis() {
    let modalRef = this['self'].modalService.show(IstPatientInformationDiagnosisModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }

  import_patients() {
    let modalRef = this['self'].modalService.show(IstPatientInformationImportPatientsViewModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-full-height modal-right',
      animated: true,
    });
    modalRef.content.action.subscribe(result=>{
      this['self'].setSummary();
    })
  }


  delete() {
    //this['self'].summaryService.deleteMilestonesSummary(this['self'].selectedRow.id).subscribe(result => {
      this["self"].modalRef = this["self"].modalService.show(DeleteBoxComponent);
      this['self'].setSummary();
    //})
  }

  setSummary() {
    this.summaryService.getPatientInformationSummary().subscribe(summary => {
      this.rowData = summary;
    });
  }


  withdraw() {
    this['self'].modalService.show(WithdrawComponent,{class: 'modal-lg modal-full-height modal-right'});
  }

  download(){
    
  }

  uploadDoc(){
    
  }
}
