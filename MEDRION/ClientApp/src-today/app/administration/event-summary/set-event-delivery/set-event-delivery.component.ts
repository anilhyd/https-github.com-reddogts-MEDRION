import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdministrationSummaryService } from 'src/app/services/administration/administration-summary.service';
import { AdministrationCriteriaService } from 'src/app/services/administration/administration-criteria.service';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { AppFunctionsService } from 'src/app/services/app-functions.service';
import { ToBccComponent } from 'src/app/common/correspondence/to-bcc/to-bcc.component';

@Component({
  selector: 'app-set-event-delivery',
  templateUrl: './set-event-delivery.component.html',
  styleUrls: ['./set-event-delivery.component.scss']
})
export class SetEventDeliveryComponent implements OnInit {

  formFields;
  uploadedFiles = [];

  eventForm = new FormGroup({});

  content:any;
  heading:string;
  action: Subject<any> = new Subject();

  constructor(
    private criteriaService: AdministrationCriteriaService,
    private summaryService: AdministrationSummaryService,
    public modalRef: MDBModalRef,
    private appFunctions: AppFunctionsService,
    private modalService: MDBModalService
  ) { 
    
  }

  ngOnInit() {
    this.criteriaService.getEventCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.eventForm, this.formFields);

      if (this.content && this.content.id && this.heading === 'Edit') { // Edit mode
        this.summaryService.getEventSummary(this.content.id).subscribe((result) => {
          this.eventForm.patchValue(result);
        })
      } else if (this.content && this.content.id && this.heading === 'View') { //View mode 
        this.summaryService.getEventSummary(this.content.id).subscribe((result) => {
          this.eventForm.patchValue(result);
          this.eventForm.disable();
        })
      }
    });
  }

openTo(){
  let modalRef = this.modalService.show(ToBccComponent, {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class: 'modal-md modal-full-height modal-right',
    animated: true,
    data: {
      heading: 'Include List of People',
      content: null
    }
  });
}

}

