import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GrantsSummaryService } from 'src/app/services/grants/grants-summary.service';
import { GrantsCriteriaService } from 'src/app/services/grants/grants-criteria.service';
import { stateOptionsSample } from 'src/app/constants/service.constants';

import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

import { Subject } from 'rxjs';
import { UserInstructionModalComponent } from '../user-instruction-modal/user-instruction-modal.component';

@Component({
  selector: 'app-rfp-grants',
  templateUrl: './rfp-grants.component.html',
  styleUrls: ['./rfp-grants.component.scss']
})
export class RfpGrantsComponent implements OnInit {
  id: number;
  constructor(
    private modalService: MDBModalService,
    public modalRef: MDBModalRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openExt() {
    this.modalRef.hide();
    this.modalService.show(UserInstructionModalComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-vlg modal-full-height modal-right',
      animated: true
    });
    //this.router.navigateByUrl('/home/grants/applications/application-ext/:'+ this.id +'/general_information')
    // let url = location.href.split('/');
    // window.open(url[0] + '//' + url[2] + '/home/grants/applications/application-ext/:' + this.id + '/general_information');
  }

}
