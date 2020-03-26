import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})

export class IstCriteriaService {

  registrationCriteria: Observable<any>;
  applicationCriteria: Observable<any>;
  myApplicationCriteria: Observable<any>;
  milestoneCriteria: Observable<any>;
  amendmentsCriteria: Observable<any>;
  studyreportCriteria: Observable<any>;
  activitiesseminarsCriteria: Observable<any>;
  publicationsCriteria: Observable<any>;
  studyTeamCriteria: Observable<any>;
  studyTeamTeamCriteria: Observable<any>;
  studyTeamOrginizationCriteria: Observable<any>;
  institutionalReviewBoardCriteria: Observable<any>;
  conceptProposalCriteria: Observable<any>;
  siteEvaluationCriteria: Observable<any>;
  generalInformationCriteria: Observable<any>;
  patientInformationCriteria: Observable<any>;
  requestProductCriteria: Observable<any>;
  requestFundCriteria: Observable<any>;
  allRequestsCriteria: Observable<any>;

  constructor(private http: HttpClient) {
    
  }

  // Future post requests based on logeed in user type

  getRegistrationCriteria(): Observable<any> {
    if (this.registrationCriteria)
      return this.registrationCriteria
    this.registrationCriteria = this.http.get('../assets/api/ist/criteria/registration-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.registrationCriteria;
  }

  getApplicationCriteria(): Observable<any> {
    if (this.applicationCriteria)
      return this.applicationCriteria
    this.applicationCriteria = this.http.get('../assets/api/ist/criteria/application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.applicationCriteria;
  }

  getMyApplicationCriteria(): Observable<any> {
    if (this.myApplicationCriteria)
      return this.myApplicationCriteria
    this.myApplicationCriteria = this.http.get('../assets/api/ist/criteria/my-application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.myApplicationCriteria;
  }

  getStudyTeamTeamCriteria(): Observable<any> {
    if (this.studyTeamTeamCriteria)
      return this.studyTeamTeamCriteria
    this.studyTeamTeamCriteria = this.http.get('../assets/api/ist/criteria/application-ext/study-team-team.json', httpOptions).map(res => res).shareReplay();
    return this.studyTeamTeamCriteria;
  }

  getStudyTeamOrganizationCriteria(): Observable<any> {
    if (this.studyTeamOrginizationCriteria)
      return this.studyTeamOrginizationCriteria
    this.studyTeamOrginizationCriteria = this.http.get('../assets/api/ist/criteria/application-ext/study-team-organization.json', httpOptions).map(res => res).shareReplay();
    return this.studyTeamOrginizationCriteria;
  }

  getInstitutionalReviewBoardCriteria(): Observable<any> {
    if (this.institutionalReviewBoardCriteria)
      return this.institutionalReviewBoardCriteria
    this.institutionalReviewBoardCriteria = this.http.get('../assets/api/ist/criteria/application-ext/institutional-review-board.json', httpOptions).map(res => res).shareReplay();
    return this.institutionalReviewBoardCriteria;
  }

  getConceptProposalCriteria(): Observable<any> {
    if (this.conceptProposalCriteria)
      return this.conceptProposalCriteria
    this.conceptProposalCriteria = this.http.get('../assets/api/ist/criteria/application-ext/concept-proposal.json', httpOptions).map(res => res).shareReplay();
    return this.conceptProposalCriteria;
  }
  
  getMilestonesCriteria(): Observable<any> {
    if (this.milestoneCriteria)
      return this.milestoneCriteria
    this.milestoneCriteria = this.http.get('../assets/api/ist/criteria/application-ext/milestones.json', httpOptions).map(res => res).shareReplay();
    return this.milestoneCriteria;
  }

  getAmendmentsCriteria(): Observable<any> {
    if (this.amendmentsCriteria)
      return this.amendmentsCriteria
    this.amendmentsCriteria = this.http.get('../assets/api/ist/criteria/application-ext/amendments.json', httpOptions).map(res => res).shareReplay();
    return this.amendmentsCriteria;
  }

  getSiteEvaluationCriteria(): Observable<any> {
    if (this.siteEvaluationCriteria)
      return this.siteEvaluationCriteria
    this.siteEvaluationCriteria = this.http.get('../assets/api/ist/criteria/application-ext/site-evaluation.json', httpOptions).map(res => res).shareReplay();
    return this.siteEvaluationCriteria;
  }

  getGeneralInformationCriteria(): Observable<any> {
    if (this.generalInformationCriteria)
      return this.generalInformationCriteria
    this.generalInformationCriteria = this.http.get('../assets/api/ist/criteria/application-ext/general-information.json', httpOptions).map(res => res).shareReplay();
    return this.generalInformationCriteria;
  }

  getStudyReportsCriteria(): Observable<any> {
    if (this.studyreportCriteria)
      return this.studyreportCriteria
    this.studyreportCriteria = this.http.get('../assets/api/ist/criteria/application-ext/study-reports.json', httpOptions).map(res => res).shareReplay();
    return this.studyreportCriteria;
  }

  getActivitiesSeminarsCriteria(): Observable<any> {
    if (this.activitiesseminarsCriteria)
      return this.activitiesseminarsCriteria
    this.activitiesseminarsCriteria = this.http.get('../assets/api/ist/criteria/application-ext/activities-seminars.json', httpOptions).map(res => res).shareReplay();
    return this.activitiesseminarsCriteria;
  }

  getPublicationsCriteria(): Observable<any>{
    if (this.publicationsCriteria)
      return this.publicationsCriteria
    this.publicationsCriteria = this.http.get('../assets/api/ist/criteria/application-ext/publications.json', httpOptions).map(res => res).shareReplay();
    return this.publicationsCriteria;
  }

  getPatientInformationCriteria(): Observable<any>{
    if (this.patientInformationCriteria)
      return this.patientInformationCriteria
    this.patientInformationCriteria = this.http.get('../assets/api/ist/criteria/application-ext/patient-information.json', httpOptions).map(res => res).shareReplay();
    return this.patientInformationCriteria;
  }

  getRequestProductCriteria(): Observable<any>{
    if (this.requestProductCriteria)
      return this.requestProductCriteria
    this.requestProductCriteria = this.http.get('../assets/api/ist/criteria/application-ext/request-details-product.json', httpOptions).map(res => res).shareReplay();
    return this.requestProductCriteria;
  }

  getRequestFundCriteria(): Observable<any>{
    if (this.requestFundCriteria)
      return this.requestFundCriteria
    this.requestFundCriteria = this.http.get('../assets/api/ist/criteria/application-ext/request-details-fund.json', httpOptions).map(res => res).shareReplay();
    return this.requestFundCriteria;
  }

  getAllRequestsCriteria(): Observable<any>{
    if (this.allRequestsCriteria)
      return this.allRequestsCriteria
    this.allRequestsCriteria = this.http.get('../assets/api/ist/criteria/application-ext/all-requests.json', httpOptions).map(res => res).shareReplay();
    return this.allRequestsCriteria;
  }
}
