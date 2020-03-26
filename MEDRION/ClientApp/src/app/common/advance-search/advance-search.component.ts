import { Component, OnInit, Input } from '@angular/core';
import { MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { stateOptionsSample, DatePickerGlobalOptions } from 'src/app/constants/service.constants';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  advanceSearch: any;
  basicOptions = stateOptionsSample;
  constructor(public modalRef: MDBModalRef) {}

  @Input() filter_selected? = null;

  onSelectFilter(filter_key, criteria){
    this.filter_selected = filter_key;
  }

  removeFilter(){
    this.filter_selected = null;
  }



  ngOnInit() {
    
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

}
