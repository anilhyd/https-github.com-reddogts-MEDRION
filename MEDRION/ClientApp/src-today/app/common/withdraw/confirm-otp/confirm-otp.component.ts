import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { MessageBoxComponent } from '../../message-box/message-box.component';


@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})

export class ConfirmOtpComponent implements OnInit {

  confirmotpForm = new FormGroup({
    please_enter_otp: new FormControl('', Validators.required)
  })
  formFields;

  constructor(public modalRef: MDBModalRef, private modalService: MDBModalService) {
  }

  ngOnInit() {
  }

  submitOTP() {
      this.modalRef.hide();
      //this['self'].summaryService.deleteActivitiesSeminarsSummary(this['self'].selectedRow.id).subscribe(result => {
      this.modalService.show(MessageBoxComponent, { data: { heading: 'Confirm', content: { heading: '', description: 'Success / Failure Message' } } });
      
    //})
  }

}
