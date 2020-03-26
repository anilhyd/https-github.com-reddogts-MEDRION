import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.scss']
})
export class GrantsComponent implements OnInit {

  constructor(public route: ActivatedRoute){}

  ngOnInit() {
  }

}
