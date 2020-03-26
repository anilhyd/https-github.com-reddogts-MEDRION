import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService, IMyOptions } from 'ng-uikit-pro-standard';
import { FormGroup, FormControl } from '@angular/forms';
import { chooseOptionsConstant, controlTypeOptionsConstant, controlStateOptionsConstant } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-configure-controls-add',
  templateUrl: './configure-controls-add.component.html',
  styleUrls: ['./configure-controls-add.component.scss']
})
export class ConfigureControlsAddComponent implements OnInit {

  chooseOptions = chooseOptionsConstant;
  controlTypeOptions = controlTypeOptionsConstant;
  controlStateOptions = controlStateOptionsConstant;

  constructor(public modalRef: MDBModalRef,
    private modalService: MDBModalService) { }

    addControls = new FormGroup({
      controlLabel: new FormControl(null),
      controlType: new FormControl(null),
      mandatory: new FormControl(null),
      values: new FormControl(null),
      state: new FormControl(null),
    })

  ngOnInit() {
  }

}

