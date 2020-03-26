import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IstSummaryService {

  constructor(private http: HttpClient) {

  }

  // Future post requests based on logeed in user type

  getRegistrationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/ist/summary-id/registration-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/registration-summary.json', httpOptions);
  }

  getApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/ist/summary-id/application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-summary.json', httpOptions);
  }

  getMyApplicationSummary(_id?): Observable<any> {
    if (_id)
      return this.http.get('../assets/api/ist/summary-id/my-application-summary-id.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/my-application-summary.json', httpOptions);
  }
  
  getMilestonesSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/milestones.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/milestones.json', httpOptions);
  }

  getAmendmentsSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/amendments.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/amendments.json', httpOptions);
  }

  getSiteEvaluationSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/site-evaluation.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/site-evaluation.json', httpOptions);
  }
  getStudyReportsSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/study-reports.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/study-reports.json', httpOptions);
  }

  getActivitiesSeminarsSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/activities-seminars.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/activities-seminars.json', httpOptions);
  }

  getPublicationsSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/publications.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/publications.json', httpOptions);
  }
  getStudyTeamTeamSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/study-team-team.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/study-team-team.json', httpOptions);
  }

  getStudyTeamOrganizationSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/study-team-organization.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/study-team-organization.json', httpOptions);
  }

  getPatientInformationSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/patient-information.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/patient-information.json', httpOptions);
  }

  getRequestProductSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/request-details-product.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/request-details-product.json', httpOptions);
  }

  getRequestFundSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/request-details-fund.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/request-details-fund.json', httpOptions);
  }

  getAllRequestsSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/all-requests.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/all-requests.json', httpOptions);
  }

  getAllRequestsFundSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/all-requests-fund.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/all-requests-fund.json', httpOptions);
  }

  getAllRequestsProductSummary(_id?): Observable<any> {
    if(_id)
      return this.http.get('../assets/api/ist/summary-id/application-ext/all-requests-product.json', httpOptions);
    else
      return this.http.get('../assets/api/ist/summary/application-ext/all-requests-product.json', httpOptions);
  }

  getGeneralInformationSummary(): Observable<any> {
      return this.http.get('../assets/api/ist/summary-id/application-ext/general-information.json', httpOptions);
  }

  getConceptProposalSummary(): Observable<any> {
    return this.http.get('../assets/api/ist/summary-id/application-ext/concept-proposal.json', httpOptions);
  }

  getInstitutionalReviewBoardSummary(): Observable<any> {
    return this.http.get('../assets/api/ist/summary-id/application-ext/institutional-review-board.json', httpOptions);
  }
 
}
