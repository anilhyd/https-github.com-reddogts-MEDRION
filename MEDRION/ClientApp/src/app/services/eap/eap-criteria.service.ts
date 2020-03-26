import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class EapCriteriaService {

  applicationCriteria: Observable<any>;
  myApplicationCriteria: Observable<any>;
  programInfoCriteria: Observable<any>;

  constructor(private http: HttpClient) {

  }

  // Future post requests based on logeed in user type

  getApplicationCriteria(): Observable<any> {
    if (this.applicationCriteria)
      return this.applicationCriteria
    this.applicationCriteria = this.http.get('../assets/api/eap/criteria/application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.applicationCriteria;
  }

  getMyApplicationCriteria(): Observable<any> {
    if (this.myApplicationCriteria)
      return this.myApplicationCriteria
    this.myApplicationCriteria = this.http.get('../assets/api/eap/criteria/my-application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.myApplicationCriteria;
  }

  getProgramInfoCriteria(): Observable<any> {
    if (this.programInfoCriteria)
      return this.programInfoCriteria
    this.programInfoCriteria = this.http.get('../assets/api/eap/criteria/application-ext/program-info-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.programInfoCriteria;
  }
}
