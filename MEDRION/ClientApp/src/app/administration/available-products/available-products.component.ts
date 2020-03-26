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
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss']
})
export class AvailableProductsComponent implements OnInit {

  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) { }

  ngOnInit() {
  }

}
