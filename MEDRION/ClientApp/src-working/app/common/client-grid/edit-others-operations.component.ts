import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import * as cloneDeep from "lodash/cloneDeep";

@Component({
    selector: 'child-cell',
    template: `<span class="hover-buttons"><button *ngIf="!hideEdit" style="margin-top:0px;padding: 1px 3px !important;" mdbBtn color="link" class="waves-light edit-button" (click)="edit()" mdbWavesEffect>
    <mdb-icon far icon="edit"></mdb-icon>
</button>
<div class="btn-group" mdbDropdown style="top:-3px;" *ngIf="oprs">
                <button style="margin-top:0px;padding: 1px 3px !important;" mdbBtn color="link" class="waves-light" classInside="dropdown-toggle" mdbDropdownToggle mdbWavesEffect>
                    <mdb-icon fas icon="cog"></mdb-icon>
                </button>
              <div class="dropdown-menu dropdown-primary dropdown-menu-right" style="font-size:13px;">
                <a *ngFor="let operation of oprs | noAddBtnfilter:filterargs" class="dropdown-item" (click)="onOperationClick(operation)" style="padding-top: 0px;padding-bottom: 0px;">{{operation.name}}</a>
             </div>
            </div>
</span>`,
    styles: [
    ]
})
export class EditOthersRenderer implements ICellRendererAngularComp {
    public params: any;
    public oprs;
    public hideEdit = false;
    filterargs = {name: 'Add'};
    agInit(params: any): void {
        this.params = params;
        if(this.params.context && this.params.context.componentParent && this.params.context.componentParent.operations){
            this.oprs = this.params.context.componentParent.operations;
            this.oprs.reverse(); 
        }
        if(this.params.context && this.params.context.componentParent && this.params.context.componentParent.noView){
            this.hideEdit = true;
        }
    }

    public onOperationClick(operation) {
        this.params.context.componentParent.onOperationClick(operation)
    }
    public isPopup(){
        return true;
    }

    public edit(){
        this.params.context.componentParent.editButton();
    }

    refresh(): boolean {
        return false;
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noAddBtnfilter',
    pure: false
})

export class NoAddBtnPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.name.indexOf(filter['name']) === -1);
    }
}