import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IstCriteriaService } from 'src/app/services/ist/ist-criteria.service';
import { reviewBoardOptionsConstant } from 'src/app/constants/service.constants';
import { MDBModalService } from 'ng-uikit-pro-standard';
import { MessageBoxComponent } from 'src/app/common/message-box/message-box.component';
import { IstSummaryService } from 'src/app/services/ist/ist-summary.service';
import { AppFunctionsService } from 'src/app/services/app-functions.service';

@Component({
  selector: 'app-ist-institutional-review-board',
  templateUrl: './ist-institutional-review-board.component.html',
  styleUrls: ['./ist-institutional-review-board.component.scss']
})
export class IstInstitutionalReviewBoardComponent implements OnInit {
  formFields;
  constructor(
    private criteriaService: IstCriteriaService,
    private modalService : MDBModalService,
    private appFunctions: AppFunctionsService,
    private summaryService: IstSummaryService
    ) { }

  reviewBoardOptions = reviewBoardOptionsConstant;
  institutionalReviewBoardForm = new FormGroup({
    // name : new FormControl(null),
    // website : new FormControl(null),
    // address : new FormControl(null),
    // city : new FormControl(null),
    // state_province : new FormControl(null),

    // postal_code : new FormControl(null),
    // country : new FormControl(null),
    // institutional_review_board_type : new FormControl(null),
    // email_address : new FormControl(null),
    // phone_number : new FormControl(null),
    
    // ext_phone_number : new FormControl(null),
    // other_phone_number : new FormControl(null),
    // ext_other_phone_number : new FormControl(null),
    // fax_number : new FormControl(null),
    // ext_fax_number : new FormControl(null),

    // notes : new FormControl(null)
  });

  
  ngOnInit() {
    this.criteriaService.getInstitutionalReviewBoardCriteria().subscribe(criteria => {
      this.formFields = criteria.formFields;
      this.appFunctions.getFormStructure(this.institutionalReviewBoardForm, this.formFields);
    });

    this.summaryService.getInstitutionalReviewBoardSummary().subscribe((result) => {
      this.institutionalReviewBoardForm.patchValue(result);
    })
  }

  operations = [
    { name: 'Save', type:'submit', callback: this.save, self: this }
  ]

  onCallbackOperation(opr){
    opr.callback();
  }


  save() {
    if(this['self'].institutionalReviewBoardForm.valid){
      this['self'].modalService.show(MessageBoxComponent, {data:{heading:'Save',content: { heading: '', description: 'Data Saved Successfully.'}}});
      this['self'].institutionalReviewBoardForm.reset();
    }
  }

}
