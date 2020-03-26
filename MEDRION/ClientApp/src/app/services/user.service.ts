import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions, api } from '../constants/service.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:Observable<any>;
  userDetails;
  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor(private http: HttpClient) {
    
   }

  getUserData(_id):Observable<any>{
      if(this.userData)
        return this.userData
      this.userData = this.http.get(api +'/users/'+_id, httpOptions).map(res=> res).shareReplay();
      return this.userData;
  }


  

  userLogin(request): Observable<any>{
    return this.http.post(api+ '/login', request, httpOptions);
  }

  userLogout(): Observable<any>{
    return this.http.get(api+ '/logout', httpOptions);
  }


  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }



  setUserDetails(_userDetails){
    this.userDetails = _userDetails;
  }

  getUserDetais(){
    return this.userDetails;
  }
}