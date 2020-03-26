import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    template: `<span class="hover-buttons"><button style="margin-top:0px;padding: 1px 3px !important;" mdbBtn color="link" size="sm" class="waves-light edit-button" (click)="delete()" mdbWavesEffect>
    <mdb-icon far icon="trash-alt"></mdb-icon>
</button>
</span>`,
    styles: [
    ]
})
export class DeleteOperationsRenderer implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public delete() {
        this.params.context.componentParent.deleteRow(this.params)
    }

    refresh(): boolean {
        return false;
    }
}