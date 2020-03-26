import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions, api } from '../../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationSummaryService {

  constructor(private http: HttpClient) { }

  getEapTypeSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/eap-type.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/eap-type.json', httpOptions);
  }

  getLookupsSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/lookups.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/lookups.json', httpOptions);
  }

  getNotificationStoreSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/notification-store.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/notification-store.json', httpOptions);
  }

  getCompanyRepresentativesSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/company-representatives.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/company-representatives.json', httpOptions);
  }

  getProductSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/product.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/product.json', httpOptions);
  }

  getDocumentAttachSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/document-attach.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/document-attach.json', httpOptions);
  }
  
  getTheraupeticAreaSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/theraupetic-area.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/theraupetic-area.json', httpOptions);
  }

  getProgramSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/program.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/program.json', httpOptions);
  }

  getCCodeSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/c-code.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/c-code.json', httpOptions);
  }
  getEventSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/event.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/event.json', httpOptions);
  }
  getRfpSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/rfp.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/rfp.json', httpOptions);
  }
  getDocumentTypeSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/document-type.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/document-type.json', httpOptions);
  }
  getInstructionsSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/instructions.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/instructions.json', httpOptions);
  }
  getfaqSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/faq.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/faq.json', httpOptions);
  }

  getPolicyConfiguratorSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/policy-configurator.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/policy-configurator.json', httpOptions);
  }

  getScreenRepositorySummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/administration/summary-id/screen-repository.json', httpOptions);
    else
      return this.http.get('../assets/api/administration/summary/screen-repository.json', httpOptions);
  }
}
