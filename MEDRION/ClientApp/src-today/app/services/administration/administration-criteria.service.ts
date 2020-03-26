import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from 'src/app/constants/service.constants';

@Injectable({
  providedIn: 'root'
})
export class AdministrationCriteriaService {

  eapCriteria: Observable<any>;
  lookupsCriteria: Observable<any>;
  notificationStoreCriteria: Observable<any>;
  emailConfigCriteria: Observable<any>;
  ldapConfigCriteria: Observable<any>;
  samlSsoConfigCriteria: Observable<any>;
  companyRepresentativesCriteria: Observable<any>;
  documentAttachCriteria: Observable<any>;
  theraupeticAreaCriteria: Observable<any>;
  productCriteria: Observable<any>;
  programCriteria: Observable<any>;
  cCodeCriteria: Observable<any>;
  eventCriteria: Observable<any>;
  rfpCriteria: Observable<any>;
  documentTypeCriteria: Observable<any>;
  instructionsCriteria: Observable<any>;
  faqCriteria: Observable<any>;
  policyConfiguratorCriteria: Observable<any>;
  screenRepositoryCriteria: Observable<any>;

  constructor(private http: HttpClient) {
    
  }

  // Future post requests based on logeed in user type

  getEapTypeCriteria(): Observable<any> {
    if (this.eapCriteria)
      return this.eapCriteria
    this.eapCriteria = this.http.get('../assets/api/administration/criteria/eap-type.json', httpOptions).map(res => res).shareReplay();
    return this.eapCriteria;
  }

  getLookupsCriteria(): Observable<any> {
    if (this.lookupsCriteria)
      return this.lookupsCriteria
    this.lookupsCriteria = this.http.get('../assets/api/administration/criteria/lookups.json', httpOptions).map(res => res).shareReplay();
    return this.lookupsCriteria;
  }

  getNotificationStoreCriteria(): Observable<any> {
    if (this.notificationStoreCriteria)
      return this.notificationStoreCriteria
    this.notificationStoreCriteria = this.http.get('../assets/api/administration/criteria/notification-store.json', httpOptions).map(res => res).shareReplay();
    return this.notificationStoreCriteria;
  }

  getEmailConfigCriteria(): Observable<any> {
    if (this.emailConfigCriteria)
      return this.emailConfigCriteria
    this.emailConfigCriteria = this.http.get('../assets/api/administration/criteria/email-configuration.json', httpOptions).map(res => res).shareReplay();
    return this.emailConfigCriteria;
  }

  getLdapConfigCriteria(): Observable<any> {
    if (this.ldapConfigCriteria)
      return this.ldapConfigCriteria
    this.ldapConfigCriteria = this.http.get('../assets/api/administration/criteria/ldap-configuration.json', httpOptions).map(res => res).shareReplay();
    return this.ldapConfigCriteria;
  }

  getSamlSsoConfigCriteria(): Observable<any> {
    if (this.samlSsoConfigCriteria)
      return this.samlSsoConfigCriteria
    this.samlSsoConfigCriteria = this.http.get('../assets/api/administration/criteria/saml-sso-configuration.json', httpOptions).map(res => res).shareReplay();
    return this.samlSsoConfigCriteria;
  }

  getCompanyRepresentativesCriteria(): Observable<any> {
    if (this.companyRepresentativesCriteria)
      return this.companyRepresentativesCriteria
    this.companyRepresentativesCriteria = this.http.get('../assets/api/administration/criteria/company-representatives.json', httpOptions).map(res => res).shareReplay();
    return this.companyRepresentativesCriteria;
  }

  getProductCriteria(): Observable<any> {
    if (this.productCriteria)
      return this.productCriteria
    this.productCriteria = this.http.get('../assets/api/administration/criteria/product.json', httpOptions).map(res => res).shareReplay();
    return this.productCriteria;
  }
  
  getDocumentAttachCriteria(): Observable<any> {
    if (this.documentAttachCriteria)
      return this.documentAttachCriteria
    this.documentAttachCriteria = this.http.get('../assets/api/administration/criteria/document-attach.json', httpOptions).map(res => res).shareReplay();
    return this.documentAttachCriteria;
  }

  getTheraupeticAreaCriteria(): Observable<any> {
    if (this.theraupeticAreaCriteria)
      return this.theraupeticAreaCriteria
    this.theraupeticAreaCriteria = this.http.get('../assets/api/administration/criteria/theraupetic-area.json', httpOptions).map(res => res).shareReplay();
    return this.theraupeticAreaCriteria;
  }

  getProgramCriteria(): Observable<any> {
    if (this.programCriteria)
      return this.programCriteria
    this.programCriteria = this.http.get('../assets/api/administration/criteria/program.json', httpOptions).map(res => res).shareReplay();
    return this.programCriteria;
  }

  getCCodeCriteria(): Observable<any> {
    if (this.cCodeCriteria)
      return this.cCodeCriteria
    this.cCodeCriteria = this.http.get('../assets/api/administration/criteria/c-code.json', httpOptions).map(res => res).shareReplay();
    return this.cCodeCriteria;
  }

  getEventCriteria(): Observable<any> {
    if (this.eventCriteria)
      return this.eventCriteria
    this.eventCriteria = this.http.get('../assets/api/administration/criteria/event.json', httpOptions).map(res => res).shareReplay();
    return this.eventCriteria;
  }

  getRfpCriteria(): Observable<any> {
    if (this.rfpCriteria)
      return this.rfpCriteria
    this.rfpCriteria = this.http.get('../assets/api/administration/criteria/rfp.json', httpOptions).map(res => res).shareReplay();
    return this.rfpCriteria;
  }

  getDocumentTypeCriteria(): Observable<any> {
    if (this.documentTypeCriteria)
      return this.documentTypeCriteria
    this.documentTypeCriteria = this.http.get('../assets/api/administration/criteria/instructions.json', httpOptions).map(res => res).shareReplay();
    return this.documentTypeCriteria;
  }
  getInstructionsCriteria(): Observable<any> {
    if (this.instructionsCriteria)
      return this.instructionsCriteria
    this.instructionsCriteria = this.http.get('../assets/api/administration/criteria/instructions.json', httpOptions).map(res => res).shareReplay();
    return this.instructionsCriteria;
  }

  getfaqCriteria(): Observable<any> {
    if (this.faqCriteria)
      return this.faqCriteria
    this.faqCriteria = this.http.get('../assets/api/administration/criteria/faq.json', httpOptions).map(res => res).shareReplay();
    return this.faqCriteria;
  }


  getPolicyConfiguratorCriteria(): Observable<any> {
    if (this.policyConfiguratorCriteria)
      return this.policyConfiguratorCriteria
    this.policyConfiguratorCriteria = this.http.get('../assets/api/administration/criteria/policy-configurator.json', httpOptions).map(res => res).shareReplay();
    return this.policyConfiguratorCriteria;
  }

  getScreenRepositoryCriteria(): Observable<any> {
    if (this.screenRepositoryCriteria)
      return this.screenRepositoryCriteria
    this.screenRepositoryCriteria = this.http.get('../assets/api/administration/criteria/screen-repository.json', httpOptions).map(res => res).shareReplay();
    return this.screenRepositoryCriteria;
  }
}
