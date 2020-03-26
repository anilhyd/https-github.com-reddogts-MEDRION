import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { MDBModalService, MDBModalRef, IMyOptions } from 'ng-uikit-pro-standard';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { stateOptionsSample, DatePickerGlobalOptions } from 'src/app/constants/service.constants';
import { EditOthersRenderer } from './edit-others-operations.component';
import * as find from 'lodash/find';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.scss']
})
export class ClientGridComponent implements OnInit {

  @Input() search?: boolean = true;
  @Input() gridApi: GridApi;
  @Input() gridBar? = true;
  @Input() gridOptions?: GridOptions;
  @Input() rowData;
  @Input() selectedRow?;
  @Input() gridOperations?;
  @Input() enableGridOperations?;
  @Input() advanceSearch?;
  @Input() hasFloatingFilter?: boolean = false;
  @Input() noFitColumnSizeSet?: boolean = false;
  @Input() skipCaseDetails?: boolean = false;
  @Input() operations?;
  @Input() caseDetails?;
  @Input() noView? = false;
  @Input() firstSelected? = false;
  @Input() pagination? = true;

  @Output() setGridApi = new EventEmitter();
  @Output() selectionChanged = new EventEmitter();
  @Output() rowDoubleClicked = new EventEmitter();
  @Output() gridOperationClicked = new EventEmitter();
  @Output() callbackOperation = new EventEmitter();


  private _columnDefs;
  private caseDetailsSelectedRow = {};
  get columnDefs() {
    
    return this._columnDefs;
  }
  @Input() set columnDefs(columnDefs){
    if(columnDefs && this.gridBar){
      this._columnDefs = columnDefs;
      if(!find(this._columnDefs, { 'cellRenderer': "editOthersRenderer"})){
        this._columnDefs.push({
          headerName: "",
          field: "value",
          cellRenderer: "editOthersRenderer",
          colId: "params",
          width: 180,
          sortable: false,
          cellStyle: { "overflow": 'visible' }
        })
      }
    }else{
      this._columnDefs = columnDefs;
    }
    
  }; 


  app_ext:Boolean = false;
  toggleCaseDetails:Boolean = false;
  collapesedOrNot:Boolean = false;

  searchValue: string;
  modalRef: MDBModalRef;
  showAdv : boolean = true;
  basicOptions = stateOptionsSample;
  frameworkComponents;
  context;
  advInfoLabels;

  
  
  constructor(private modalService: MDBModalService, private route: ActivatedRoute,
    private router: Router) {
    this.gridOptions = {
      pagination: true,
      rowSelection: 'single',
      rowHeight: 32,     
      
      defaultColDef: {
        sortable: true,
        suppressNavigable: true,
        cellClass: 'no-border',
        suppressMovable: true,
        
      }
    }
    this.context = { componentParent: this };
    this.frameworkComponents = {
      editOthersRenderer: EditOthersRenderer
    }; 
     
  }

 
  onGridReady(params) {
    this.gridApi = params.api;
    this.setGridApi.emit(this.gridApi);
    setTimeout(() => {
      if (this.firstSelected) {
        params.api.forEachNode(node => node.rowIndex ? 0 : node.setSelected(true));
      }
      if (!this.noFitColumnSizeSet) {
        this.gridApi.sizeColumnsToFit();
      }
    }, 500);
  }

  onSelectionChanged(event) {
    if(this.caseDetails){
      this.caseDetailsSelectedRow = event.api.getSelectedRows()[0];
    }
    this.selectionChanged.emit(event);
  }

  onRowDoubleClicked(event) {
    this.rowDoubleClicked.emit(event);
  }

  onGridOperationClick(operation) {
    this.gridOperationClicked.emit(operation)
  }

  editButton(){
    setTimeout(()=>{
      this.onSelectRow();
    },300);
  }

  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }

  ngOnInit() {
    this.advInfoLabels = this.advanceSearch;
    this.route.queryParams
      .subscribe(params => {
        if(params && params.app_ext){
          this.app_ext = true
          this.toggleCaseDetails = false;
        }else{
          this.app_ext = false;
        }
        window['app_ext'] = this.app_ext;        
      });


    // if (location.href) {
    //   location.href.indexOf('application-ext') > -1 ? this.app_ext = true : this.app_ext = false;
    //   window['app_ext'] = this.app_ext;
    //   this.toggleCaseDetails = false;
    // }
    if(this.skipCaseDetails){
      this.app_ext = true;
      window['app_ext'] = this.app_ext;
      this.toggleCaseDetails = false;
    }
    if(!this.app_ext){
      this.toggleCaseDetails = true
    }    
  }

  advanceSearchOpen() {
    this.modalRef = this.modalService.show(AdvanceSearchComponent,
      {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class:'modal-llg modal-full-height modal-right',
        animated: true,
        data: {
          advanceSearch: this.advanceSearch
        }
      }
    );
  }

  public myDatePickerOptions: IMyOptions = DatePickerGlobalOptions 

  onSelectRow(){
    if(this.gridApi.getSelectedRows() && this.gridApi.getSelectedRows().length)
      this.rowDoubleClicked.emit({data:this.gridApi.getSelectedRows()[0]})
  }

  toggleCase(result){
    this.toggleCaseDetails = result;
    setTimeout(()=>{
      this.gridApi.sizeColumnsToFit();
    })
  }

  onOperationClick(operation){
    setTimeout(()=>{
      this.callbackOperation.emit(operation);
      //this.onSelectRow();
    },300)
  }


}

