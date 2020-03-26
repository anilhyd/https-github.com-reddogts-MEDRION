import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, QueryList, ViewChildren } from '@angular/core';
import { SidenavComponent, SBItemComponent, MDBModalService } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/services/user.service';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ExtService } from 'src/app/services/ext.service';
import { RouteComponent } from '../route/route.component';
import { ReturnComponent } from '../return/return.component';
import { RejectComponent } from '../reject/reject.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { FaqViewComponent } from '../faq-view/faq-view.component';
import { DocumentTemplateComponent } from '../document-template/document-template.component';
import { ReleaseComponent } from '../release/release.component';
import { ChangePasswordComponent } from 'src/app/personalization/change-password/change-password.component';
import { NotificationStoreComponent } from 'src/app/administration/notification-store/notification-store.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  moduleUrl;
  requestId;
  routerLinkUrl;
  request;
  module;
  title = 'Medrion';
  userDetails = null;
  selectedRoute;
  username;
  currentDate;
  app_ext: Boolean = false;
  isChecked:number = 2;
  mainHeading;
  userType;
  setQueryParams;
  screenType;
  

  @ViewChild('sidenav') sidenav: SidenavComponent;
  @ViewChild('acc') acc: SidenavComponent;
  @ViewChildren(SBItemComponent) collapses: QueryList<SBItemComponent>[];

  constructor(private activatedRoute: ActivatedRoute , private userService: UserService, private router: Router, private renderer: Renderer2, private extService: ExtService, private modalService: MDBModalService, ) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     if (location.href) {
    //       location.href.indexOf('application-ext') > -1 ? this.app_ext = true : this.app_ext = false;
    //       window['app_ext'] = this.app_ext;
    //       setTimeout(() => {
    //         if (this.app_ext) {
    //           this.moduleUrl = this.router.url.split('application-ext')[0];
    //           this.requestId = this.router.url.split('application-ext')[1].split('/')[1];
    //           this.module = this.router.url.split('/')[2];
    //           window['moduleType'] = this.module;
    //           this.routerLinkUrl = this.moduleUrl + 'application-ext/' + this.requestId;
    //           switch (this.module) {
    //             case 'ist':
    //               this.mainHeading = "New IST Request";
    //               this.extService.getIstRequest(this.requestId).subscribe((result) => {
    //                 this.request = result;
    //               })
    //               break;
    //             case 'grants':
    //               this.mainHeading = "New Grants Request";
    //               this.extService.getGrantsRequest(this.requestId).subscribe((result) => {
    //                 this.request = result;
    //               })
    //               break;
    //             case 'eap':
    //               this.mainHeading = "New EAP Request";
    //               this.extService.getEapRequest(this.requestId).subscribe((result) => {
    //                 this.request = result;
    //               })
    //               break;
    //           }
    //         }
    //       });
    //     }
    //   }
    // });

    this.activatedRoute.queryParams.subscribe(params=>{
      if(params){
        //console.log(params);
        this.setQueryParams = params;
        params && params['app_ext']?this.app_ext = true : this.app_ext = false;
        window['app_ext'] = this.app_ext;
        this.screenType = params['screen_type'];
        this.moduleUrl = '/home/'+params['module']+'/'+params['screen_type']+'/';
        this.requestId = params['id'];
        this.module = params['module'];
        window['moduleType'] = this.module;
        this.routerLinkUrl = this.moduleUrl + 'application-ext/:' + this.requestId;
        switch (params['module']) {
          case 'ist':
            this.mainHeading = "New IST Request";
            this.extService.getIstRequest(this.requestId).subscribe((result) => {
              this.request = result;
            })
            break;
          case 'grants':
            this.mainHeading = "New Grants Request";
            this.extService.getGrantsRequest(this.requestId).subscribe((result) => {
              this.request = result;
            })
            break;
          case 'eap':
            this.mainHeading = "New EAP Request";
            this.extService.getEapRequest(this.requestId).subscribe((result) => {
              this.request = result;
            })
            break;
        }
      }
    })
  }

  ngOnInit() {
    this.userService.getUserData(localStorage.getItem('id')).subscribe(result => {
      this.userService.setUserDetails(result);
      this.userDetails = result;
      this.username = result['alias_name'];
      this.userType = result['username'];
    });
    this.currentDate = new Date().toDateString();
  }


  onChangeRoute(route) {
    this.selectedRoute = route;

  }

  preventParent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  collapseInfo(moduleId) {
    if (this.selectedRoute === (moduleId + 1)) {
      return false;
    } else {
      return true;
    }
  }

  toggleNav() {
    if (this.sidenav.el.nativeElement.firstElementChild.classList.contains('side-nav-extended')) {
      this.renderer.removeClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-extended');
      this.renderer.addClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-closed');
    } else {
      this.renderer.removeClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-closed')
      this.renderer.addClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-extended')
    }
  }

  toggle(id) {
    this.renderer.removeClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-closed');
    this.renderer.addClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-extended');
  }


  closeToggle() {
    this.renderer.removeClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-extended');
    this.renderer.addClass(this.sidenav.el.nativeElement.firstElementChild, 'side-nav-closed');
  }

  logout() {
    this.userService.userLogout().subscribe(result => {
      this.router.navigate(['login']);
      localStorage.clear();
      window.location.reload();
    })
  }

  operations = [
    //{ name: 'Save', callback: this.save, self: this, icon: 'save' },
    { name: 'Route', callback: this.route, self: this, icon: 'check' },
    { name: 'Return', callback: this.return, self: this, icon: 'undo' },
    { name: 'Reject', callback: this.reject, self: this, icon: 'times' },
    { name: 'On-Hold', callback: this.onHold, self: this, icon: 'pause' },
    { name: 'Release', callback: this.release, self: this, icon: 'play' },
    { name: 'withdraw', callback: this.withdraw, self: this, icon: 'times' }
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
    this.modalService.show(MessageBoxComponent, { data: { heading: 'Save Request', content: { description: 'The Request ID 1234 has been Saved.' } } })
  }

  route() {
    if(this.isChecked === 2){
      this.modalService.show(RouteComponent,{class: 'modal-lg modal-full-height modal-right'});
    }
  }

  return() {
    if(this.isChecked === 2){
      this.modalService.show(ReturnComponent,{class: 'modal-lg modal-full-height modal-right'});
    }
  }

  reject() {
    if(this.isChecked === 2){
      let modalRef = this.modalService.show(RejectComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-lg modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Reject',
          content: null
        }
      });
    }
  }

  openChangePasswordPopup() {
    let modalRef = this.modalService.show(ChangePasswordComponent, {
      backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-md modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Change Password',
          content: null
        }
    })
  }
  
  openNotificationStorePopup()  {
    let modalRef = this.modalService.show(NotificationStoreComponent, {
      backdrop: true,
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-vvlg modal-full-height modal-right',
      animated: true,
      data: {
        heading: 'Notifications Store',
        content: null
      }
    });
  }

  onHold() {
    if(this.isChecked === 2){
      let modalRef = this.modalService.show(RejectComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-lg modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'On-Hold',
          content: null
        }
      });
    }
  }

  release() {
    if(this.isChecked === 2){
      let modalRef = this.modalService.show(ReleaseComponent, {
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
        class: 'modal-lg modal-full-height modal-right',
        animated: true,
        data: {
          heading: 'Release',
          content: null
        }
      });
    }
  }

  

  withdraw() {
    if(this.isChecked === 2){
      this.modalService.show(WithdrawComponent,{class: 'modal-lg modal-full-height modal-right'});
    }
  }

  faqView() {
    this.modalService.show(FaqViewComponent,{class: 'modal-lg modal-full-height modal-right'});
  }
  documentTemplateView() {
    this.modalService.show(DocumentTemplateComponent,{class: 'modal-md modal-full-height modal-right'});
  }

  close(){
    this.router.navigate([this.moduleUrl], {skipLocationChange:true})
  }

  discard(){
    
  }

}
