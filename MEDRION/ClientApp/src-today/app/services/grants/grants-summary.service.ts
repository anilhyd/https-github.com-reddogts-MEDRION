import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrantsSummaryService {

  constructor(private http: HttpClient) {

  }

  // Future post requests based on logeed in user type

  getRegistrationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/registration-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/registration-summary.json', httpOptions);
  }

  getApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/application-summary.json', httpOptions);
  }

  getMyApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/my-application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/my-application-summary.json', httpOptions);
  }

  getAuthorizedSigneeSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/application-ext/authorized-signee-and-payee.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/application-ext/authorized-signee-and-payee.json', httpOptions);
  }
  getOutcomeAssessmentSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/application-ext/outcome-assessment.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/application-ext/outcome-assessment.json', httpOptions);
  
  }
  getAudiencesSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/audiences-summary.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/audiences-summary.json', httpOptions);
  }
  getDeliveryFormatSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/delivery-format.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/delivery-format-summary.json', httpOptions);
  }

  getBudgetSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/application-ext/budget.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/budget-summary.json', httpOptions);
  }

  getReconciliationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/grants/summary-id/application-ext/reconciliation.json', httpOptions);
    else
      return this.http.get('../assets/api/grants/summary/reconciliation-summary.json', httpOptions);
  }

  getGeneralInformationSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/general-information.json', httpOptions);
  }

  getGrantsInformationSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/grants-information.json', httpOptions);
  }

  getDeliveryFormatNewSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/delivery-format.json', httpOptions);
  }

  getAccredationDetailsSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/accredation-details.json', httpOptions);
  }

  getSponsorshipBenefitsSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/sponsorship-benefits.json', httpOptions);
  }

  getGeneralInformationSponsorshipSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/general-information-sponsorship.json', httpOptions);
  }

  getGeneralInformationCharitableSummary(): Observable<any> {
    return this.http.get('../assets/api/grants/summary-id/application-ext/general-information-charitable.json', httpOptions);
  }
}
