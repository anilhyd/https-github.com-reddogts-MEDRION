import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-grants-registrations-compliance',
  templateUrl: './grants-registrations-compliance.component.html',
  styleUrls: ['./grants-registrations-compliance.component.scss']
})
export class GrantsRegistrationsComplianceComponent implements OnInit {

  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) { }

  ngOnInit() {
  }

}
