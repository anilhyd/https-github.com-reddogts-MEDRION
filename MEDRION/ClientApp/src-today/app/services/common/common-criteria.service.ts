import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from 'src/app/constants/service.constants';

@Injectable({
  providedIn: 'root'
})
export class CommonCriteriaService {

  rfiCriteria: Observable<any>;
  notesCriteria: Observable<any>;
  attachmentsCriteria: Observable<any>;
  bankDetailsCriteria: Observable<any>;


  constructor(private http: HttpClient) {
    
  }

  // Future post requests based on logeed in user type

  getRfiCriteria(): Observable<any> {
    if (this.rfiCriteria)
      return this.rfiCriteria
    this.rfiCriteria = this.http.get('../assets/api/common/criteria/rfi.json', httpOptions).map(res => res).shareReplay();
    return this.rfiCriteria;
  }
  
  getNotesCriteria(): Observable<any> {
    if (this.notesCriteria)
      return this.notesCriteria
    this.notesCriteria = this.http.get('../assets/api/common/criteria/notes.json', httpOptions).map(res => res).shareReplay();
    return this.notesCriteria;
  }

  getAttachmentsCriteria(): Observable<any> {
    if (this.attachmentsCriteria)
      return this.attachmentsCriteria
    this.attachmentsCriteria = this.http.get('../assets/api/common/criteria/attachments.json', httpOptions).map(res => res).shareReplay();
    return this.attachmentsCriteria;
  }

  getBankDetailsCriteria(): Observable<any> {
    if (this.bankDetailsCriteria)
      return this.bankDetailsCriteria
    this.bankDetailsCriteria = this.http.get('../assets/api/common/criteria/add-bank-details.json', httpOptions).map(res => res).shareReplay();
    return this.bankDetailsCriteria;
  }
}

