import { Component, OnInit } from '@angular/core';
import { ComposeComponent } from './compose/compose.component';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { AttachmentsCorrespondenceComponent } from './attachments-correspondence/attachments-correspondence.component';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit {

  

  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
  }
  uploadedFiles = ["File 1", "File 2", "File 3"];
  operations = [
    { name: 'Reply', type: 'button', callback: this.reply, self: this },
    { name: 'Delete', type: 'button', callback: this.delete, self: this },
    { name: 'Compose', type: 'submit', callback: this.compose, self: this }
  ]

  onCallbackOperation(opr) {
    opr.callback();
  }

  compose(){
    let modalRef = this['self'].modalService.show(ComposeComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class:'modal-llg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Compose',
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

  delete(){

  }

  reply(){

  }
  


}
