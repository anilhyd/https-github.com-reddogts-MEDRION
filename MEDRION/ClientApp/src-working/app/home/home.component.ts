import { Component, OnInit, Renderer2, ViewChild, Inject } from '@angular/core';
import { SidenavComponent, MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from '../services/user.service';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  app_ext: boolean = false;
  hasLoggedIn: boolean = false;

  @ViewChild('appHeader') appHeader: SidenavComponent;
  constructor(
    private renderer: Renderer2,
    private userDetails: UserService,
    private router: Router,
    private modalService: MDBModalService,
    private activatedRoute : ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     if (location.href) {
    //       location.href.indexOf('application-ext') > -1 ? this.app_ext = true : this.app_ext = false;
    //       window['app_ext'] = this.app_ext;
    //     }
    //   }
    // });
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.app_ext){
        this.app_ext = true;
        
      }else{
        this.app_ext = false;
      }
      window['app_ext']=this.app_ext;
    })
  }
  ngOnInit() {
    
    // if (location.href) {
    //   location.href.indexOf('application-ext') > -1 ? this.app_ext = true : this.app_ext = false;
    //   window['app_ext'] = this.app_ext;
    // }
    this.modalService.opened.subscribe((event) =>{
      this.renderer.addClass(this.document.getElementsByTagName('mdb-modal-container')[0], 'right');
    });
  }
  closeToggle() {
    this.renderer.removeClass(this.appHeader['sidenav'].el.nativeElement.firstElementChild, 'side-nav-extended');
    this.renderer.addClass(this.appHeader['sidenav'].el.nativeElement.firstElementChild, 'side-nav-closed');
  }
}
