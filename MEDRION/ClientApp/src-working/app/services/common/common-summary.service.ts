import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions, api } from '../../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSummaryService {

  constructor(private http: HttpClient) { }

  getNotesSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/common/summary-id/notes.json', httpOptions);
    else
      return this.http.get('../assets/api/common/summary/notes.json', httpOptions);
  }

  getAttachmentsSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/common/summary-id/attachments.json', httpOptions);
    else
      return this.http.get('../assets/api/common/summary/attachments.json', httpOptions);
  }

  getRfiSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/common/summary-id/rfi.json', httpOptions);
    else
      return this.http.get('../assets/api/common/summary/rfi.json', httpOptions);
  }

}
