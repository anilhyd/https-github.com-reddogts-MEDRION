import { Component, OnInit } from "@angular/core";
import { MDBModalRef, ToastService } from "ng-uikit-pro-standard";
import { deleteConfirmMessage, deleteSuccessMessage } from 'src/app/constants/service.constants';

@Component({
  selector: "app-delete-box",
  templateUrl: "./delete-box.component.html",
  styleUrls: ["./delete-box.component.scss"]
})
export class DeleteBoxComponent implements OnInit {
  deleteConfirmMessage = deleteConfirmMessage;
  deleteSuccessMessage = deleteSuccessMessage;

  constructor(
    public modalRef: MDBModalRef,
    private toastrService: ToastService
  ) { }

  ngOnInit() { }

  showConfirm(): void {
    this.modalRef.hide();
    this.toastrService.success(deleteSuccessMessage);
  }
}
