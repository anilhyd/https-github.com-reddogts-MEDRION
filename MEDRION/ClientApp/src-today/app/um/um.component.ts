import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.scss']
})
export class UmComponent implements OnInit {

  constructor(public route: ActivatedRoute){}

  ngOnInit() {
    
  }

}
