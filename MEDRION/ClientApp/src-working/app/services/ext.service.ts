import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtService {

  constructor(private http: HttpClient) { }
  
  getIstRequest(_id): Observable<object>{
    return this.http.get('../assets/api/ist-request.json', httpOptions)
  }

  getGrantsRequest(_id): Observable<object>{
    return this.http.get('../assets/api/grants-request.json', httpOptions)
  }

  getEapRequest(_id): Observable<object>{
    return this.http.get('../assets/api/eap-request.json', httpOptions)
  }
}




