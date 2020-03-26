import { Component, OnInit } from "@angular/core";
import { MDBModalRef } from "ng-uikit-pro-standard";
import { ToastService } from "ng-uikit-pro-standard";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.scss"]
})
export class MessageBoxComponent implements OnInit {
  heading: string;
  content: any;
  operation;

  constructor(
    public modalRef: MDBModalRef,
    private toastrService: ToastService
  ) {}

  ngOnInit() {}

  showConfirm(getData): void {
    this.modalRef.hide();
    this.toastrService.success(getData);
  }
}
