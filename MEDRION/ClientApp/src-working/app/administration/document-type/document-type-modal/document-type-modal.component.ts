import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
import { FormGroup } from '@angular/forms';
import { chooseOptionsConstant } from 'src/app/constants/service.constants';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';

@Component({
  selector: 'app-document-type-modal',
  templateUrl: './document-type-modal.component.html',
  styleUrls: ['./document-type-modal.component.scss']
})
export class DocumentTypeModalComponent implements OnInit {

 
  formFields;
  loiOptions = chooseOptionsConstant;

  content: any;
  heading: string;
  action: Subject<any> = new Subject();
  documentTypeForm = new FormGroup({});

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) {
  }

  ngOnInit() {


    this.criteriaService.getDocumentTypeCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.documentTypeForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getDocumentTypeSummary(this.content.id).subscribe((result) => {
          this.documentTypeForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getDocumentTypeSummary(this.content.id).subscribe((result) => {
          this.documentTypeForm.patchValue(result);
          this.documentTypeForm.disable();
        })
      }
    });

  }

  save() {
    if (this.documentTypeForm.valid) {
        this.modalRef.hide();
    }
  }

}
