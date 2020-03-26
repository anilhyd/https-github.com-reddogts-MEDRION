import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions, api } from '../../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UmSummaryService {

  constructor(private http: HttpClient) {

  }

  
  // Department

  addDeptSummary(obj): Observable<any>{
    return this.http.post(api + '/um/departments', obj, httpOptions)
  }

  editDeptSummary(_id, obj): Observable<any>{
    return this.http.put(api + '/um/departments/'+ _id, obj, httpOptions)
  }

  getDeptSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get(api + '/um/departments/' + _id, httpOptions);
    else
      return this.http.get(api + '/um/departments', httpOptions);
  }

  deleteDeptSummary(_id): Observable<any> {
    return this.http.delete(api + '/um/departments/' + _id, httpOptions);
  }



  // Organization

  addOrgSummary(obj): Observable<any>{
    return this.http.post(api + '/um/organizations', obj, httpOptions)
  }

  editOrgSummary(_id, obj): Observable<any>{
    return this.http.put(api + '/um/organizations/'+ _id, obj, httpOptions)
  }

  getOrgSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get(api + '/um/organizations/' + _id, httpOptions);
    else
      return this.http.get(api + '/um/organizations', httpOptions);
  }

  deleteOrgSummary(_id): Observable<any> {
    return this.http.delete(api + '/um/organizations/' + _id, httpOptions);
  }




  // Users

  addUserSummary(obj): Observable<any>{
    return this.http.post(api + '/um/users', obj, httpOptions)
  }

  editUserSummary(_id, obj): Observable<any>{
    return this.http.put(api + '/um/users/'+ _id, obj, httpOptions)
  }

  getUserSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get(api + '/um/users/' + _id, httpOptions);
    else
      return this.http.get(api + '/um/users', httpOptions);
  }

  deleteUserSummary(_id): Observable<any> {
    return this.http.delete(api + '/um/users/' + _id, httpOptions);
  }



  // Roles

  addRoleSummary(obj): Observable<any>{
    return this.http.post(api + '/um/roles', obj, httpOptions)
  }

  editRoleSummary(_id, obj): Observable<any>{
    return this.http.put(api + '/um/roles/'+ _id, obj, httpOptions)
  }

  getRoleSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get(api + '/um/roles/' + _id, httpOptions);
    else
      return this.http.get(api + '/um/roles', httpOptions);
  }

  deleteRoleSummary(_id): Observable<any> {
    return this.http.delete(api + '/um/roles/' + _id, httpOptions);
  }


  // Privileges

  getPrivilegeSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get(api + '/um/privileges/' + _id, httpOptions);
    else
      return this.http.get(api + '/um/privileges', httpOptions);
  }
}
