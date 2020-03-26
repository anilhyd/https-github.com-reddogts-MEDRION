import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { organizationOptionsConstant, roleOptionsConstant } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-ist-study-team-add-or-role',
  templateUrl: './ist-study-team-add-or-role.component.html',
  styleUrls: ['./ist-study-team-add-or-role.component.scss']
})
export class IstStudyTeamAddOrRoleComponent implements OnInit {
  content:any;
  heading:string;

  organizationOptions = organizationOptionsConstant;
  roleOptions = roleOptionsConstant;

  studyTeamAddOrgRole = new FormGroup({
    organization: new FormControl(null),
    role: new FormControl(null),
  })

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
