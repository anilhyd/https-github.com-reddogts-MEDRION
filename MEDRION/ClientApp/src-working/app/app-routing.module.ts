import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IstComponent } from './ist/ist.component';
import { GrantsComponent } from './grants/grants.component';
import { UmComponent } from './um/um.component';
import { EapComponent } from './eap/eap.component';

import { IstRegistrationsComponent } from './ist/ist-registrations/ist-registrations.component';
import { IstApplicationsComponent } from './ist/ist-applications/ist-applications.component';
import { IstMyApplicationsComponent } from './ist/ist-my-applications/ist-my-applications.component';
import { WipComponent } from './common/wip/wip.component';
import { IstApplicationExtComponent } from './ist/ist-application-ext/ist-application-ext.component';
import { IstGeneralInformationComponent } from './ist/ist-application-ext/ist-general-information/ist-general-information.component';
import { IstStudyTeamTeamComponent } from './ist/ist-application-ext/ist-study-team-team/ist-study-team-team.component';
import { UmOrganizationComponent } from './um/um-organization/um-organization.component';
import { UmDepartmentComponent } from './um/um-department/um-department.component';
import { UmRoleComponent } from './um/um-role/um-role.component';
import { UmUserComponent } from './um/um-user/um-user.component';
import { UmPrivilegeComponent } from './um/um-privilege/um-privilege.component';
import { AdministrationComponent } from './administration/administration.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { ChangeThemeComponent } from './personalization/change-theme/change-theme.component';
import { ChangePasswordComponent } from './personalization/change-password/change-password.component';
import { ViewProfileComponent } from './personalization/view-profile/view-profile.component';
import { LoginComponent } from './common/login/login.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { IstStudyTeamOrganizationComponent } from './ist/ist-application-ext/ist-study-team-organization/ist-study-team-organization.component';
import { IstMilestonesComponent } from './ist/ist-application-ext/ist-milestones/ist-milestones.component';
import { IstAmendmentsComponent } from './ist/ist-application-ext/ist-amendments/ist-amendments.component';
import { IstSiteEvluationComponent } from './ist/ist-application-ext/ist-site-evaluation/ist-site-evluation.component';
import { IstStudyReportsComponent } from './ist/ist-application-ext/ist-study-reports/ist-study-reports.component';
import { IstActivitiesSeminarsComponent } from './ist/ist-application-ext/ist-activities-seminars/ist-activities-seminars.component';
import { IstPublicationsComponent } from './ist/ist-application-ext/ist-publications/ist-publications.component';
import { IstInstitutionalReviewBoardComponent } from './ist/ist-application-ext/ist-institutional-review-board/ist-institutional-review-board.component';
import { IstConceptProposalComponent } from './ist/ist-application-ext/ist-concept-proposal/ist-concept-proposal.component';
import { AttachmentsComponent } from './common/attachments/attachments.component';
import { RfiComponent } from './common/rfi/rfi.component';
import { NotesComponent } from './common/notes/notes.component';
import { IstRequestProductComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product.component';
import { IstRequestFundComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund.component';
import { IstPatientInformationComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information.component';
import { GrantsGeneralInformationComponent } from './grants/grants-application-ext/grants-general-information/grants-general-information.component';
import { GrantsGrantInformationComponent } from './grants/grants-application-ext/grants-grant-information/grants-grant-information.component';
import { GrantsLetterOfIntentComponent } from './grants/grants-application-ext/grants-letter-of-intent/grants-letter-of-intent.component';
import { GrantsUserInstructionsComponent } from './grants/grants-application-ext/grants-user-instructions/grants-user-instructions.component';
import { GrantsDeliveryFormatComponent } from './grants/grants-application-ext/grants-delivery-format/grants-delivery-format.component';
import { GrantsAudiencesComponent } from './grants/grants-application-ext/grants-audiences/grants-audiences.component';
import { GrantsBudgetComponent } from './grants/grants-application-ext/grants-budget/grants-budget.component';
import { GrantsAccredationDetailsComponent } from './grants/grants-application-ext/grants-accredation-details/grants-accredation-details.component';
import { GrantsAuthorizedSigneeAndPayeeComponent } from './grants/grants-application-ext/grants-authorized-signee-and-payee/grants-authorized-signee-and-payee.component';
import { GrantsOutcomeAssessmentComponent } from './grants/grants-application-ext/grants-outcome-assessment/grants-outcome-assessment.component';
import { GrantsReconciliationComponent } from './grants/grants-application-ext/grants-reconciliation/grants-reconciliation.component';
import { GrantsSponsershipBenefitsComponent } from './grants/grants-application-ext/grants-sponsership-benefits/grants-sponsership-benefits.component';
import { GrantsDocumentUploadComponent } from './grants/grants-application-ext/grants-document-upload/grants-document-upload.component';
import { GrantsRegistrationsComponent } from './grants/grants-registrations/grants-registrations.component';
import { GrantsApplicationsComponent } from './grants/grants-applications/grants-applications.component';
import { GrantsMyApplicationsComponent } from './grants/grants-my-applications/grants-my-applications.component';
import { GrantsApplicationExtComponent } from './grants/grants-application-ext/grants-application-ext.component';
import { EapApplicationsComponent } from './eap/eap-applications/eap-applications.component';
import { EapMyApplicationsComponent } from './eap/eap-my-applications/eap-my-applications.component';
import { EapProgramInfoComponent } from './eap/eap-application-ext/eap-program-info/eap-program-info.component';
import { CorrespondenceComponent } from './common/correspondence/correspondence.component';
import { NotificationStoreComponent } from './administration/notification-store/notification-store.component';
import { LookupsComponent } from './administration/lookups/lookups.component';
import { DocumentAttachComponent } from './administration/document-attach/document-attach.component';
import { CompanyRepresentativesComponent } from './administration/company-representatives/company-representatives.component';
import { TheraupeticAreaComponent } from './administration/theraupetic-area/theraupetic-area.component';
import { ProductComponent } from './administration/product/product.component';
import { ProgramComponent } from './administration/program/program.component';
import { CCodeComponent } from './administration/c-code/c-code.component';
import { EventSummaryComponent } from './administration/event-summary/event-summary.component';
import { EmailConfigurationComponent } from './administration/email-configuration/email-configuration.component';
import { LdapConfigurationComponent } from './administration/ldap-configuration/ldap-configuration.component';
import { SamlSsoConfigurationComponent } from './administration/saml-sso-configuration/saml-sso-configuration.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { EapTypeComponent } from './administration/eap-type/eap-type.component';
import { RfpComponent } from './administration/rfp/rfp.component';
import { IstAllRequestsComponent } from './ist/ist-application-ext/ist-all-requests/ist-all-requests.component';
import { DocumentTypeComponent } from './administration/document-type/document-type.component';
import { InstructionsComponent } from './administration/instructions/instructions.component';
import { FaqComponent } from './administration/faq/faq.component';
import { PolicyConfiguratorComponent } from './administration/policy-configurator/policy-configurator.component';
import { ScreenRepositoryComponent } from './administration/screen-repository/screen-repository.component';
import { GrantsDocumentUploadSponsorshipComponent } from './grants/grants-application-ext/grants-document-upload-sponsorship/grants-document-upload-sponsorship.component';
import { GrantsGeneralInformationSponsorshipComponent } from './grants/grants-application-ext/grants-general-information-sponsorship/grants-general-information-sponsorship.component';
import { GrantsGeneralInformationCharitableComponent } from './grants/grants-application-ext/grants-general-information-charitable/grants-general-information-charitable.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' },
    canActivate: [AuthGuard],
    children: [

      // IST
      {
        path: 'ist', component: IstComponent, data: { breadcrumb: 'IST Dashboard' },
        children: [
          
          {
            path: 'applications',
            component: IstApplicationsComponent,
            data: { breadcrumb: 'All Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: IstApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'general_information_request', component: IstGeneralInformationComponent, data: { breadcrumb: 'General Information' } },
                  { path: 'study_team_team_request', component: IstStudyTeamTeamComponent, data: { breadcrumb: 'Study Team - Team' } },
                  { path: 'study_team_organisation_setup_request', component: IstStudyTeamOrganizationComponent, data: { breadcrumb: 'Study Team - Organisation Setup' } },
                  { path: 'institutional_reiew_board_request', component: IstInstitutionalReviewBoardComponent, data: { breadcrumb: 'Institutional Review Board' } },
                  { path: 'concept_proposal_request', component: IstConceptProposalComponent, data: { breadcrumb: 'Concept Proposal' } },
                  { path: 'compliance_statement_request', component: WipComponent, data: { breadcrumb: 'Compliance Statement' } },
                  { path: 'patient_information_request', component: IstPatientInformationComponent, data: { breadcrumb: 'Patient Information' } },
                  { path: 'all_requests', component: IstAllRequestsComponent, data: { breadcrumb: 'All Requests' } },
                  { path: 'request_details_product_request', component: IstRequestProductComponent, data: { breadcrumb: 'Request Details - Product' } },
                  { path: 'request_details_fund', component: IstRequestFundComponent, data: { breadcrumb: 'Request Details - Fund' } },
                  { path: 'milestones_request', component: IstMilestonesComponent, data: { breadcrumb: 'MileStones' } },
                  { path: 'study_reports_request', component: IstStudyReportsComponent, data: { breadcrumb: 'Study Reports' } },
                  { path: 'activities_and_seminars_request', component: IstActivitiesSeminarsComponent, data: { breadcrumb: 'Activities and Seminars' } },
                  { path: 'publications_Request', component: IstPublicationsComponent, data: { breadcrumb: 'Publications' } },
                  { path: 'amendments_request', component: IstAmendmentsComponent, data: { breadcrumb: 'Amendments' } },
                  { path: 'site_evaluation_request', component: IstSiteEvluationComponent, data: { breadcrumb: 'Site Evaluation' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },

                  { path: '**', component: IstGeneralInformationComponent }
                ]
              },
            ]
          },
          {
            path: 'my-applications',
            component: IstMyApplicationsComponent,
            data: { breadcrumb: 'My Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: IstApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'general_information_request', component: IstGeneralInformationComponent, data: { breadcrumb: 'General Information' } },
                  { path: 'study_team_team_request', component: IstStudyTeamTeamComponent, data: { breadcrumb: 'Study Team - Team' } },
                  { path: 'study_team_organisation_setup_request', component: IstStudyTeamOrganizationComponent, data: { breadcrumb: 'Study Team - Organisation Setup' } },
                  { path: 'institutional_reiew_board_request', component: IstInstitutionalReviewBoardComponent, data: { breadcrumb: 'Institutional Review Board' } },
                  { path: 'concept_proposal_request', component: IstConceptProposalComponent, data: { breadcrumb: 'Concept Proposal' } },
                  { path: 'compliance_statement_request', component: WipComponent, data: { breadcrumb: 'Compliance Statement' } },
                  { path: 'all_requests', component: IstAllRequestsComponent, data: { breadcrumb: 'All Requests' } },
                  { path: 'patient_information_request', component: IstPatientInformationComponent, data: { breadcrumb: 'Patient Information' } },
                  { path: 'request_details_product_request', component: IstRequestProductComponent, data: { breadcrumb: 'Request Details - Product' } },
                  { path: 'request_details_fund', component: IstRequestFundComponent, data: { breadcrumb: 'Request Details - Fund' } },
                  { path: 'milestones_request', component: IstMilestonesComponent, data: { breadcrumb: 'MileStones' } },
                  { path: 'study_reports_request', component: IstStudyReportsComponent, data: { breadcrumb: 'Study Reports' } },
                  { path: 'activities_and_seminars_request', component: IstActivitiesSeminarsComponent, data: { breadcrumb: 'Activities and Seminars' } },
                  { path: 'publications_Request', component: IstPublicationsComponent, data: { breadcrumb: 'Publications' } },
                  { path: 'amendments_request', component: IstAmendmentsComponent, data: { breadcrumb: 'Amendments' } },
                  { path: 'site_evaluation_request', component: IstSiteEvluationComponent, data: { breadcrumb: 'Site Evaluation' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },

                  { path: '**', component: IstGeneralInformationComponent }
                ]
              },
            ]
          }
        ]
      },

      // GRANTS
      {
        path: 'grants', component: GrantsComponent, data: { breadcrumb: 'Grants Dashboard' },
        children: [
          {
            path: 'applications',
            component: GrantsApplicationsComponent,
            data: { breadcrumb: 'All Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: GrantsApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'general_information', component: GrantsGeneralInformationComponent, data: { breadcrumb: 'General Information' } },
                  { path: 'grant_information', component: GrantsGrantInformationComponent, data: { breadcrumb: 'Grant Information' } },
                  { path: 'delivery_format', component: GrantsDeliveryFormatComponent, data: { breadcrumb: 'Delivery Format' } },
                  { path: 'audiences', component: GrantsAudiencesComponent, data: { breadcrumb: 'Audiences' } },
                  { path: 'budget', component: GrantsBudgetComponent, data: { breadcrumb: 'Budget' } },
                  { path: 'accredation_details', component: GrantsAccredationDetailsComponent, data: { breadcrumb: 'Accredation details' } },
                  { path: 'authorized_signee_and_payee', component: GrantsAuthorizedSigneeAndPayeeComponent, data: { breadcrumb: 'Authorized Signee And Payee' } },
                  { path: 'outcome_assessment', component: GrantsOutcomeAssessmentComponent, data: { breadcrumb: 'Outcome Assessment' } },
                  { path: 'reconciliation', component: GrantsReconciliationComponent, data: { breadcrumb: 'Reconciliation' } },
                  { path: 'sponsorship_benefits', component: GrantsSponsershipBenefitsComponent, data: { breadcrumb: 'Sponsorship Benefits' } },
                  { path: 'sponsorship_benefits_sponsorship', component: GrantsSponsershipBenefitsComponent, data: { breadcrumb: 'Sponsorship Benefits (Sponsorship)' } },
                  { path: 'document_upload', component: GrantsDocumentUploadComponent, data: { breadcrumb: 'Document Upload' } },
                  { path: 'document_upload_sponsorship', component: GrantsDocumentUploadSponsorshipComponent, data: { breadcrumb: 'Document Upload (Sponsorship)' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },
                  { path: 'general_information_sponsorship', component: GrantsGeneralInformationSponsorshipComponent, data: { breadcrumb: 'General Information Sponsorship' } },
                  { path: 'general_information_charitable', component: GrantsGeneralInformationCharitableComponent, data: { breadcrumb: 'General Information Charitable' } },

                  { path: '**', component: GrantsGeneralInformationComponent }
                ]
              },
            ]

          },
          {
            path: 'my-applications',
            component: GrantsMyApplicationsComponent,
            data: { breadcrumb: 'My Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: GrantsApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'general_information', component: GrantsGeneralInformationComponent, data: { breadcrumb: 'General Information' } },
                  { path: 'grant_information', component: GrantsGrantInformationComponent, data: { breadcrumb: 'Grant Information' } },
                  { path: 'delivery_format', component: GrantsDeliveryFormatComponent, data: { breadcrumb: 'Delivery Format' } },
                  { path: 'audiences', component: GrantsAudiencesComponent, data: { breadcrumb: 'Audiences' } },
                  { path: 'budget', component: GrantsBudgetComponent, data: { breadcrumb: 'Budget' } },
                  { path: 'accredation_details', component: GrantsAccredationDetailsComponent, data: { breadcrumb: 'Accredation details' } },
                  { path: 'authorized_signee_and_payee', component: GrantsAuthorizedSigneeAndPayeeComponent, data: { breadcrumb: 'Authorized Signee And Payee' } },
                  { path: 'outcome_assessment', component: GrantsOutcomeAssessmentComponent, data: { breadcrumb: 'Outcome Assessment' } },
                  { path: 'reconciliation', component: GrantsReconciliationComponent, data: { breadcrumb: 'Reconciliation' } },
                  { path: 'sponsorship_benefits', component: GrantsSponsershipBenefitsComponent, data: { breadcrumb: 'Sponsorship Benefits' } },
                  { path: 'sponsorship_benefits_sponsorship', component: GrantsSponsershipBenefitsComponent, data: { breadcrumb: 'Sponsorship Benefits (Sponsorship)' } },
                  { path: 'document_upload', component: GrantsDocumentUploadComponent, data: { breadcrumb: 'Document Upload' } },
                  { path: 'document_upload_sponsorship', component: GrantsDocumentUploadSponsorshipComponent, data: { breadcrumb: 'Document Upload (Sponsorship)' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },
                  { path: 'general_information_sponsorship', component: GrantsGeneralInformationSponsorshipComponent, data: { breadcrumb: 'General Information Sponsorship' } },
                  { path: 'general_information_charitable', component: GrantsGeneralInformationCharitableComponent, data: { breadcrumb: 'General Information Charitable' } },

                  { path: '**', component: GrantsGeneralInformationComponent }
                ]
              },
            ]
          },
        ]
      },


      // EAP
      {
        path: 'eap', component: EapComponent, data: { breadcrumb: 'EAP Dashboard' },
        children: [
          {
            path: 'applications',
            component: EapApplicationsComponent,
            data: { breadcrumb: 'All Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: GrantsApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'program_info', component: EapProgramInfoComponent, data: { breadcrumb: 'Program Info' } },
                  { path: 'study_team_team', component: IstStudyTeamTeamComponent, data: { breadcrumb: 'Study Team - Team' } },
                  { path: 'study_team_org_setup', component: IstStudyTeamOrganizationComponent, data: { breadcrumb: 'Study Team Org Setup' } },
                  { path: 'institutional_review_board', component: IstInstitutionalReviewBoardComponent, data: { breadcrumb: 'Institutional Review Board' } },
                  { path: 'patient_information', component: IstPatientInformationComponent, data: { breadcrumb: 'Patient Information' } },
                  { path: 'request_product', component: IstRequestProductComponent, data: { breadcrumb: 'Request Product' } },
                  { path: 'study_reports', component: IstStudyReportsComponent, data: { breadcrumb: 'Study Reports' } },
                  { path: 'amendments', component: IstAmendmentsComponent, data: { breadcrumb: 'Amendments' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },
                  { path: 'all_requests', component: IstAllRequestsComponent, data: { breadcrumb: 'All Requests', from:"eap" } },

                  { path: '**', component: EapProgramInfoComponent }
                ]
              },
            ]
          },
          {
            path: 'my-applications',
            component: EapMyApplicationsComponent,
            data: { breadcrumb: 'My Applications' },
            children: [
              {
                path: 'application-ext/:id',
                component: GrantsApplicationExtComponent,
                data: { breadcrumb: 'Request' },
                children: [
                  { path: 'program_info', component: EapProgramInfoComponent, data: { breadcrumb: 'Program Info' } },
                  { path: 'study_team_team', component: IstStudyTeamTeamComponent, data: { breadcrumb: 'Study Team - Team' } },
                  { path: 'study_team_org_setup', component: IstStudyTeamOrganizationComponent, data: { breadcrumb: 'Study Team Org Setup' } },
                  { path: 'institutional_review_board', component: IstInstitutionalReviewBoardComponent, data: { breadcrumb: 'Institutional Review Board' } },
                  { path: 'patient_information', component: IstPatientInformationComponent, data: { breadcrumb: 'Patient Information' } },
                  { path: 'request_product', component: IstRequestProductComponent, data: { breadcrumb: 'Request Product' } },
                  { path: 'study_reports', component: IstStudyReportsComponent, data: { breadcrumb: 'Study Reports' } },
                  { path: 'amendments', component: IstAmendmentsComponent, data: { breadcrumb: 'Amendments' } },

                  { path: 'attachments_request', component: AttachmentsComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'rfi_request', component: RfiComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'notes_request', component: NotesComponent, data: { breadcrumb: 'Attachments' } },
                  { path: 'correspondence_request', component: CorrespondenceComponent, data: { breadcrumb: 'Correspondence' } },
                  { path: 'all_requests', component: IstAllRequestsComponent, data: { breadcrumb: 'All Requests', from:"eap" } },

                  { path: '**', component: WipComponent }
                ]
              },
            ]
          },
        ]
      },

      // UM
      {
        path: 'um', component: UmComponent, data: { breadcrumb: 'UM Dashboard' },
        children: [
          {
            path: 'organization',
            component: UmOrganizationComponent,
            data: { breadcrumb: 'Organization' }
          },
          {
            path: 'department',
            component: UmDepartmentComponent,
            data: { breadcrumb: 'Department' }
          },
          {
            path: 'role',
            component: UmRoleComponent,
            data: { breadcrumb: 'Role' }
          },
          {
            path: 'user',
            component: UmUserComponent,
            data: { breadcrumb: 'User' }
          },
          {
            path: 'privilege',
            component: UmPrivilegeComponent,
            data: { breadcrumb: 'Privilege' }
          },
        ]
      },

      // Administration
      {
        path: 'administration', component: AdministrationComponent, data: { breadcrumb: 'Administration' },
        children: [
          { path: 'istRegistrations', component: IstRegistrationsComponent, data: { breadcrumb: 'Registrations' }},
          { path: 'eapRegistrations', component: IstRegistrationsComponent, data: { breadcrumb: 'Registrations' }},
          { path: 'grantsRegistrations', component: GrantsRegistrationsComponent, data: { breadcrumb: 'Registrations' }},
          { path: 'eapType', component: EapTypeComponent, data: { breadcrumb: 'EAP Type' } },
          { path: 'lookups', component: LookupsComponent, data: { breadcrumb: 'Lookups' } },
          { path: 'rfp', component: RfpComponent, data: { breadcrumb: 'RFP' } },
          { path: 'faq', component: FaqComponent, data: { breadcrumb: 'FAQ' } },
          { path: 'document_type', component: DocumentTypeComponent, data: { breadcrumb: 'Document Type' } },
          { path: 'document_attach', component: DocumentAttachComponent, data: { breadcrumb: 'Document Attach' } },
          { path: 'company_representatives', component: CompanyRepresentativesComponent, data: { breadcrumb: 'Company Representatives' } },
          { path: 'theraupetic_area', component: TheraupeticAreaComponent, data: { breadcrumb: 'Theraupetic Area' } },
          { path: 'product', component: ProductComponent, data: { breadcrumb: 'Product' } },
          { path: 'program', component: ProgramComponent, data: { breadcrumb: 'Program' } },
          { path: 'c_code', component: CCodeComponent, data: { breadcrumb: 'Ccode' } },
          { path: 'event_summary', component: EventSummaryComponent, data: { breadcrumb: 'Events' } },
          { path: 'email_configuration', component: EmailConfigurationComponent, data: { breadcrumb: 'Email Configuration' } },
          { path: 'policy_configurator', component: PolicyConfiguratorComponent, data: { breadcrumb: 'Policy Configurator' } },
          { path: 'ldap_configuration', component: LdapConfigurationComponent, data: { breadcrumb: 'LDAP Configuration' } },
          { path: 'saml_sso_configuration', component: SamlSsoConfigurationComponent, data: { breadcrumb: 'SAML-SSO Configuration' } },
          { path: 'instructions', component: InstructionsComponent, data: { breadcrumb: 'Instructions' } },
          { path: 'screen_repository', component: ScreenRepositoryComponent, data: { breadcrumb: 'Screen Repository' } }
        ]
      },

      // Personalization
      {
        path: 'personalization', component: PersonalizationComponent, data: { breadcrumb: 'Personalization' },
        children: [
          { path: 'changeTheme', component: ChangeThemeComponent, data: { breadcrumb: 'Change Theme' } },
          { path: 'changePassword', component: ChangePasswordComponent, data: { breadcrumb: 'Change Password' } },
          { path: 'viewProfile', component: ViewProfileComponent, data: { breadcrumb: 'View Profile' } },
        ]
      },

      // notifications store
      { path: 'notifications_store', component: NotificationStoreComponent, data: { breadcrumb: 'Notifications Store' } },
    ]
  },

  // other screens
  
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'signup', component: SignUpComponent, data: { breadcrumb: 'Sign Up' } },
  { path: 'forgot_password', component: ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
