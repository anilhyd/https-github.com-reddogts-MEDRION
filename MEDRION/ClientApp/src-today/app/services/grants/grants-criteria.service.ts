import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../constants/service.constants';
import { Observable, ObservedValueOf } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class GrantsCriteriaService {
  registrationCriteria: Observable<any>;
  applicationCriteria: Observable<any>;
  myApplicationCriteria: Observable<any>;
  generalInformationCriteria: Observable<any>;
  grantsInformationCriteria: Observable<any>;
  sponsorshipBenefitsCriteria: Observable<any>;
  accredationDetailsCriteria: Observable<any>;
  authorizedSigneeCriteria: Observable<any>;
  outcomeAssessmentCriteria: Observable<any>;
  audiencesCriteria: Observable<any>;
  documentUploadCriteria: Observable<any>;
  deliveryFormatCriteria: Observable<any>;
  budgetCriteria: Observable<any>;
  budgetAllocateCriteria: Observable<any>;
  reconciliationCriteria: Observable<any>;
  generalInformationSponsorshipCriteria: Observable<any>;
  generalInformationCharitableCriteria: Observable<any>;

  constructor(private http: HttpClient) {
  }

  // Future post requests based on logeed in user type
  getRegistrationCriteria(): Observable<any> {
    if (this.registrationCriteria)
    return this.registrationCriteria
    this.registrationCriteria = this.http.get('../assets/api/grants/criteria/registration-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.registrationCriteria;
  }

  getApplicationCriteria(): Observable<any> {
    if (this.applicationCriteria)
    return this.applicationCriteria
    this.applicationCriteria = this.http.get('../assets/api/grants/criteria/application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.applicationCriteria;
  }

  getMyApplicationCriteria(): Observable<any> {
    if (this.myApplicationCriteria)
    return this.myApplicationCriteria
    this.myApplicationCriteria = this.http.get('../assets/api/grants/criteria/my-application-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.myApplicationCriteria;
  }

  getGeneralInformationCriteria(): Observable<any> {
    if (this.generalInformationCriteria)
    return this.generalInformationCriteria
    this.generalInformationCriteria = this.http.get('../assets/api/grants/criteria/application-ext/general-information.json', httpOptions).map(res => res).shareReplay();
    return this.generalInformationCriteria;
  }

  getGrantsInformationCriteria(): Observable<any> {
    if (this.grantsInformationCriteria)
    return this.grantsInformationCriteria
    this.grantsInformationCriteria = this.http.get('../assets/api/grants/criteria/application-ext/grants-information.json', httpOptions).map(res => res).shareReplay();
    return this.grantsInformationCriteria;
  }

  getSponsorshipBenefitsCriteria(): Observable<any> {
    if (this.sponsorshipBenefitsCriteria)
    return this.sponsorshipBenefitsCriteria
    this.sponsorshipBenefitsCriteria = this.http.get('../assets/api/grants/criteria/application-ext/sponsorship-benefits.json', httpOptions).map(res => res).shareReplay();
    return this.sponsorshipBenefitsCriteria;
  }
  
  getAccredationDetailsCriteria(): Observable<any> {
    if (this.accredationDetailsCriteria)
    return this.accredationDetailsCriteria
    this.accredationDetailsCriteria = this.http.get('../assets/api/grants/criteria/application-ext/accredation-details.json', httpOptions).map(res => res).shareReplay();
    return this.accredationDetailsCriteria;
  }

  getAuthorizedSigneeCriteria(): Observable<any> {
    if (this.authorizedSigneeCriteria)
    return this.authorizedSigneeCriteria
    this.authorizedSigneeCriteria = this.http.get('../assets/api/grants/criteria/application-ext/authorized-signee-and-payee.json', httpOptions).map(res => res).shareReplay();
    return this.authorizedSigneeCriteria;
  }

  getOutcomeAssessmentCriteria(): Observable<any> {
    if (this.outcomeAssessmentCriteria)
    return this.outcomeAssessmentCriteria
    this.outcomeAssessmentCriteria = this.http.get('../assets/api/grants/criteria/application-ext/outcome-assessment.json', httpOptions).map(res => res).shareReplay();
    return this.outcomeAssessmentCriteria;
  }
 
  getAudiencesCriteria(): Observable<any> {
    if (this.audiencesCriteria)
      return this.audiencesCriteria
    this.audiencesCriteria = this.http.get('../assets/api/grants/criteria/application-ext/audiences-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.audiencesCriteria;
  }

  getDocumentUploadCriteria(): Observable<any> {
    if (this.documentUploadCriteria)
      return this.documentUploadCriteria
    this.documentUploadCriteria = this.http.get('../assets/api/grants/criteria/application-ext/document-upload-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.documentUploadCriteria;
  }

  getDeliveryFormatCriteria(): Observable<any> {
    if (this.deliveryFormatCriteria)
      return this.deliveryFormatCriteria
    this.deliveryFormatCriteria = this.http.get('../assets/api/grants/criteria/application-ext/delivery-format-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.deliveryFormatCriteria;
  }

  getBudgetCriteria(): Observable<any> {
    if (this.budgetCriteria)
      return this.budgetCriteria
    this.budgetCriteria = this.http.get('../assets/api/grants/criteria/application-ext/budget-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.budgetCriteria; 
  }

  getBudgetAllocateCriteria(): Observable<any> {
    if (this.budgetAllocateCriteria)
      return this.budgetAllocateCriteria
    this.budgetAllocateCriteria = this.http.get('../assets/api/grants/criteria/application-ext/budget-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.budgetAllocateCriteria; 
  }
  getReconciliationCriteria(): Observable<any> {
    if (this.reconciliationCriteria)
      return this.reconciliationCriteria
    this.reconciliationCriteria = this.http.get('../assets/api/grants/criteria/application-ext/reconciliation-criteria.json', httpOptions).map(res => res).shareReplay();
    return this.reconciliationCriteria; 
  }

  getGeneralInformationSponsorshipCriteria(): Observable<any> {
    if (this.generalInformationSponsorshipCriteria)
    return this.generalInformationSponsorshipCriteria
    this.generalInformationSponsorshipCriteria = this.http.get('../assets/api/grants/criteria/application-ext/general-information-sponsorship.json', httpOptions).map(res => res).shareReplay();
    return this.generalInformationSponsorshipCriteria;
  }

  getGeneralInformationCharitableCriteria(): Observable<any> {
    if (this.generalInformationCharitableCriteria)
    return this.generalInformationCharitableCriteria
    this.generalInformationCharitableCriteria = this.http.get('../assets/api/grants/criteria/application-ext/general-information-charitable.json', httpOptions).map(res => res).shareReplay();
    return this.generalInformationCharitableCriteria;
  }
}
