import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EapSummaryService {

  constructor(private http: HttpClient) {

  }

  // Future post requests based on logeed in user type

  getApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/eap/summary-id/application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/eap/summary/application-summary.json', httpOptions);
  }

  getMyApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/eap/summary-id/my-application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/eap/summary/my-application-summary.json', httpOptions);
  }

  getProgramInfoSummary(): Observable<any> {
    return this.http.get('../assets/api/eap/summary-id/application-ext/program-info.json', httpOptions);
  }

  

}
