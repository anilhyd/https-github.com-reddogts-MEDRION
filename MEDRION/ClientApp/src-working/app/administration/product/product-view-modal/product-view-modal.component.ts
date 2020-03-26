import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { FormGroup } from '@angular/forms';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { AddProductApprovalComponent } from '../add-product-approval/add-product-approval.component';
import { studyReportPatientConstant, theraputicAreaConstant, strengthAndUnitsOptionsConstant, dosageFormulationOptionsConstant } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-product-view-modal',
  templateUrl: './product-view-modal.component.html',
  styleUrls: ['./product-view-modal.component.scss']
})
export class ProductViewModalComponent implements OnInit {

  formFields;

  optionsSelect = studyReportPatientConstant;
  theraputicAreaOptions = theraputicAreaConstant;
  strengthAndUnitsOptions = strengthAndUnitsOptionsConstant;
  dosageFormulationOptions = dosageFormulationOptionsConstant;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  productViewForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {
    this.criteriaService.getProductCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields[0].add_formFields;
      this.appFunctions.getFormStructure(this.productViewForm, this.formFields);
      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getProductSummary(this.content.id).subscribe((result) => {
          this.productViewForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getProductSummary(this.content.id).subscribe((result) => {
          this.productViewForm.patchValue(result);
          this.productViewForm.disable();
        })
      }
    });
  }

  save() {
    if (this.productViewForm.valid) {
        this.modalRef.hide();
    }
  }

  addDocuments(event){
    this.modalService.show(AddProductApprovalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true
    });
  }

}
