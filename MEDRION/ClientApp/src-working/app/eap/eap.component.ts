import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eap',
  templateUrl: './eap.component.html',
  styleUrls: ['./eap.component.scss']
})
export class EapComponent implements OnInit {

  constructor(public route: ActivatedRoute){}

  ngOnInit() {
  }

}
