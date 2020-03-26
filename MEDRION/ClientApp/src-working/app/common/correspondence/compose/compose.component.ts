import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ToBccComponent } from '../to-bcc/to-bcc.component';
import { AttachmentsCorrespondenceComponent } from '../attachments-correspondence/attachments-correspondence.component';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,private modalService: MDBModalService) { }

  ngOnInit() {
  }
  heading:string;
  composeForm = new FormGroup({
    name: new FormControl(''),
    to: new FormControl(''),
    cc: new FormControl(''),
    desc: new FormControl('')
  });

  uploadedFiles = ["File 1", "File 2", "File 3"];
  to(){
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

  attachments() {
    let modalRef = this.modalService.show(AttachmentsCorrespondenceComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Attach Files',
        content: null
      }
    });
  }
}
