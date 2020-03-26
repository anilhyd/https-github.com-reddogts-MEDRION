import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class UmCriteriaService {

  orgCriteria: Observable<any>;
  deptCriteria: Observable<any>;
  roleCriteria: Observable<any>;
  userCriteria: Observable<any>;
  privilegeCriteria: Observable<any>;

  constructor(private http: HttpClient) {
    
  }

  // Future post requests based on logeed in user type

  getOrgCriteria(): Observable<any> {
    if (this.orgCriteria)
      return this.orgCriteria
    this.orgCriteria = this.http.get('../assets/api/um/criteria/org-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.orgCriteria;
  }

  getDeptCriteria(): Observable<any> {
    if (this.deptCriteria)
      return this.deptCriteria
    this.deptCriteria = this.http.get('../assets/api/um/criteria/dept-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.deptCriteria;
  }
  getRoleCriteria(): Observable<any> {
    if (this.roleCriteria)
      return this.roleCriteria
    this.roleCriteria = this.http.get('../assets/api/um/criteria/role-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.roleCriteria;
  }
  getUserCriteria(): Observable<any> {
    if (this.userCriteria)
      return this.userCriteria
    this.userCriteria = this.http.get('../assets/api/um/criteria/user-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.userCriteria;
  }
  getPrivilegeCriteria(): Observable<any> {
    if (this.privilegeCriteria)
      return this.privilegeCriteria
    this.privilegeCriteria = this.http.get('../assets/api/um/criteria/privilege-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.privilegeCriteria;
  }
}
