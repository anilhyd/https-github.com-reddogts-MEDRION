import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ist',
  templateUrl: './ist.component.html',
  styleUrls: ['./ist.component.scss']
})
export class IstComponent implements OnInit {
  
  constructor(public route: ActivatedRoute){}

  ngOnInit() {
  }

}
