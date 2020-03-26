import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample } from 'src/app/constants/service.constants';

import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { LetterOfIntentModalComponent } from '../letter-of-intent-modal/letter-of-intent-modal.component';
import { RfpGrantsComponent } from '../rfp-grants/rfp-grants.component';
import { UserInstructionModalComponent } from '../user-instruction-modal/user-instruction-modal.component';

@Component({
  selector: 'app-request-type-modal',
  templateUrl: './request-type-modal.component.html',
  styleUrls: ['./request-type-modal.component.scss']
})
export class RequestTypeModalComponent implements OnInit {
  id: number;
  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef
  ) { }


  ngOnInit() {
  }

  openLetterIntent() {
    this.modalRef.hide();
    this.modalService.show(RfpGrantsComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null,
        id: this.id
      }
    });
  }

  openUserInstructions() {
    this.modalRef.hide();
    this.modalService.show(UserInstructionModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Add',
        content: null,
        id: this.id
      }
    });
  }



}