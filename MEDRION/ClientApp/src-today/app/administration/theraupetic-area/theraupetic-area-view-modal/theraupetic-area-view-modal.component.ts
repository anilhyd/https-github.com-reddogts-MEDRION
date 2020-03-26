import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';


@Component({
  selector: 'app-theraupetic-area-view-modal',
  templateUrl: './theraupetic-area-view-modal.component.html',
  styleUrls: ['./theraupetic-area-view-modal.component.scss']
})
export class TheraupeticAreaViewModalComponent implements OnInit {

  formFields;

  theraupeticAreaForm = new FormGroup({});

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService
  ) { }

  ngOnInit() {
    this.criteriaService.getTheraupeticAreaCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.theraupeticAreaForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getTheraupeticAreaSummary(this.content.id).subscribe((result) => {
          this.theraupeticAreaForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getTheraupeticAreaSummary(this.content.id).subscribe((result) => {
          this.theraupeticAreaForm.patchValue(result);
          this.theraupeticAreaForm.disable();
        })
      }
    });
  }

}
