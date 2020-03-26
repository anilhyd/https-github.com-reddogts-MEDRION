import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';



@Component({
  selector: 'app-grants-budget-view-budget-request',
  templateUrl: './grants-budget-view-budget-request.component.html',
  styleUrls: ['./grants-budget-view-budget-request.component.scss']
})
export class GrantsBudgetViewBudgetRequestComponent implements OnInit {
  formFields;

  constructor(
    public modalRef: MDBModalRef
    ) { 
      
    }

  ngOnInit() {
  }

}
