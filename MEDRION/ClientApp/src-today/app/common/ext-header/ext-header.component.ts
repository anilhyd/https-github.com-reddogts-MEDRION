import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ExtService } from 'src/app/services/ext.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SidenavComponent, MDBModalService } from 'ng-uikit-pro-standard';
import { RouteComponent } from '../route/route.component';
import { ReturnComponent } from '../return/return.component';
import { RejectComponent } from '../reject/reject.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'app-ext-header',
  templateUrl: './ext-header.component.html',
  styleUrls: ['./ext-header.component.scss']
})
export class ExtHeaderComponent implements OnInit {
  moduleUrl;
  requestId;
  routerLinkUrl;
  request;
  module;
  userDetails;
  username;
  currentDate;

  isChecked:number = 0;

  @ViewChild('links') links;
  constructor(private router: Router, private renderer: Renderer2, private extService: ExtService, private modalService: MDBModalService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserData(localStorage.getItem('id')).subscribe(result => {
      this.userService.setUserDetails(result);
      this.userDetails = result;
      this.username = result['username'];
    });
    this.currentDate = new Date();

    // setTimeout(() => {
    //   this.moduleUrl = this.router.url.split('application-ext')[0];
    //   this.requestId = this.router.url.split('application-ext')[1].split('/')[1];
    //   this.module = this.router.url.split('/')[2];
    //   this.routerLinkUrl = this.moduleUrl + 'application-ext/' + this.requestId;
    //   switch (this.module) {
    //     case 'ist':
    //       this.extService.getIstRequest(this.requestId).subscribe((result) => {
    //         this.request = result;
    //       })
    //       break;
    //     case 'grants':
    //       this.extService.getGrantsRequest(this.requestId).subscribe((result) => {
    //         this.request = result;
    //       })
    //       break;
    //     case 'eap':
    //       this.extService.getEapRequest(this.requestId).subscribe((result) => {
    //         this.request = result;
    //       })
    //       break;
    //   }
    // });
  }

  ngOnChanges(){
  }

  changeTab(url, request) {
    this.router.navigateByUrl(url + '/' + request);
  }

  operations = [
    //{ name: 'Save', callback: this.save, self: this, icon: 'save' },
    { name: 'Route', callback: this.route, self: this, icon: 'check ' },
    { name: 'Return', callback: this.return, self: this, icon: 'undo' },
    { name: 'Reject', callback: this.reject, self: this, icon: 'times' },
    { name: 'On-Hold', callback: this.onHold, self: this, icon: 'pause' },
    { name: 'Release', callback: this.release, self: this, icon: 'play' },
    { name: 'withdraw', callback: this.withdraw, self: this, icon: 'ban' }
  ]

  checkOnCallbackOperationhide() {
    this.isChecked = 0;
  }
  checkOnCallbackOperationOn(){
    if(this.isChecked === 0) {
      this.isChecked = 1;
    }  
  }
  checkOnCallbackOperationOff(){
    this.isChecked = 2;
  }

  onCallbackOperation(operation) {
    operation.callback(); 
  }

  save() {
    this['self'].modalService.show(MessageBoxComponent, { data: { heading: 'Save Request', content: { description: 'The Request ID 1234 has been Saved.' } } })
  }

  route() {
    if(this['self'].isChecked === 2){
      this['self'].modalService.show(RouteComponent,{class: 'modal-md modal-full-height modal-right'});
    }
  }

  return() {
    if(this['self'].isChecked === 2){
      this['self'].modalService.show(ReturnComponent,{class: 'modal-md modal-full-height modal-right'});
    }
  }

  reject() {
    if(this['self'].isChecked === 2){
      let modalRef = this['self'].modalService.show(RejectComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-md modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Reject',
          content: null
        }
      });
    }
  }

  onHold() {
    if(this['self'].isChecked === 2){
      let modalRef = this['self'].modalService.show(RejectComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-md modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'On-Hold',
          content: null
        }
      });
    }
  }

  release() {
    if(this['self'].isChecked === 2){
      let modalRef = this['self'].modalService.show(RejectComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-md modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Release',
          content: null
        }
      });
    }
  }

  withdraw() {
    if(this['self'].isChecked === 2){
      this['self'].modalService.show(WithdrawComponent,{class: 'modal-md modal-full-height modal-right'});
    }
  }

  logout() {
    this.userService.userLogout().subscribe(result => {
      this.router.navigate(['login', {skipLocationChange:true}]);
      localStorage.clear();
      window.location.reload();
    })
  }
  

}
