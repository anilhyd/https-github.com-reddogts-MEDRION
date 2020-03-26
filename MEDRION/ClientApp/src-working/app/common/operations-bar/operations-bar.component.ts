import { Component, OnInit, HostListener, ViewChild, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operations-bar',
  templateUrl: './operations-bar.component.html',
  styleUrls: ['./operations-bar.component.scss']
})
export class OperationsBarComponent implements OnInit {

  app_ext = false;
  filterargs = {
    name: 'Add', 
    name1: 'Save', 
    name2:'New',  
    name3:'fundRequest',  
    name4:'productRequest',
    name5:'Reply',
    name6:'Delete',
    name7:'Compose'
  };
  @Input() enableOperations?;
  @Input() operations?;
  @Output() callbackOperation = new EventEmitter();

  

  @ViewChild('operationsBar') operationsBar;

  onOperationClick(operation){
    this.callbackOperation.emit(operation);
  }


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.app_ext = window['app_ext'];
  }

  

}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(
          item => item.name.indexOf(filter['name']) !== -1 || 
          item.name.indexOf(filter['name1']) !== -1 || 
          item.name.indexOf(filter['name2']) !== -1 || 
          item.name.indexOf(filter['name3']) !== -1 || 
          item.name.indexOf(filter['name4']) !== -1 ||
          item.name.indexOf(filter['name5']) !== -1 ||
          item.name.indexOf(filter['name6']) !== -1 ||
          item.name.indexOf(filter['name7']) !== -1
          );
    }
}