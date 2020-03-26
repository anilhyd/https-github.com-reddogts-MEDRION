import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// ag-grid
import { AgGridModule } from "ag-grid-angular";
// application 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { IstComponent } from './ist/ist.component';
import { EapComponent } from './eap/eap.component';
import { GrantsComponent } from './grants/grants.component';
import { UmComponent } from './um/um.component';
import { IstRegistrationsComponent } from './ist/ist-registrations/ist-registrations.component';
import { IstApplicationsComponent } from './ist/ist-applications/ist-applications.component';
import { IstMyApplicationsComponent } from './ist/ist-my-applications/ist-my-applications.component';
import { ClientGridComponent } from './common/client-grid/client-grid.component';
import { WipComponent } from './common/wip/wip.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { OperationsBarComponent, MyFilterPipe } from './common/operations-bar/operations-bar.component';
import { IstApplicationExtComponent } from './ist/ist-application-ext/ist-application-ext.component';
import { ExtHeaderComponent } from './common/ext-header/ext-header.component';
import { HeaderComponent } from './common/header/header.component';
import { IstGeneralInformationComponent } from './ist/ist-application-ext/ist-general-information/ist-general-information.component';
import { IstStudyTeamTeamComponent } from './ist/ist-application-ext/ist-study-team-team/ist-study-team-team.component';
import { MessageBoxComponent } from './common/message-box/message-box.component';
import { AssignDialogComponent } from './common/assign-dialog/assign-dialog.component';
import { UmDepartmentComponent } from './um/um-department/um-department.component';
import { UmUserComponent } from './um/um-user/um-user.component';
import { UmRoleComponent } from './um/um-role/um-role.component';
import { UmPrivilegeComponent } from './um/um-privilege/um-privilege.component';
import { UmOrganizationComponent } from './um/um-organization/um-organization.component';
import { AdministrationComponent } from './administration/administration.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { ChangeThemeComponent } from './personalization/change-theme/change-theme.component';
import { ChangePasswordComponent } from './personalization/change-password/change-password.component';
import { ViewProfileComponent } from './personalization/view-profile/view-profile.component';
import { LoginComponent } from './common/login/login.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { AdvanceSearchComponent } from './common/advance-search/advance-search.component';
import { UmUserViewModalComponent } from './um/um-user/um-user-view-modal/um-user-view-modal.component';
import { UmDepartmentViewModalComponent } from './um/um-department/um-department-view-modal/um-department-view-modal.component';
import { IstMilestonesComponent } from './ist/ist-application-ext/ist-milestones/ist-milestones.component';
import { IstStudyTeamOrganizationComponent } from './ist/ist-application-ext/ist-study-team-organization/ist-study-team-organization.component';
import { UmOrganizationViewModalComponent } from './um/um-organization/um-organization-view-modal/um-organization-view-modal.component';
import { UmPrivilegeViewModalComponent } from './um/um-privilege/um-privilege-view-modal/um-privilege-view-modal.component';
import { UmRoleViewModalComponent } from './um/um-role/um-role-view-modal/um-role-view-modal.component';
import { IstMilestonesViewModalComponent } from './ist/ist-application-ext/ist-milestones/ist-milestones-view-modal/ist-milestones-view-modal.component';
import { IstAmendmentsComponent } from './ist/ist-application-ext/ist-amendments/ist-amendments.component';
import { IstAmendmentsViewModalComponent } from './ist/ist-application-ext/ist-amendments/ist-amendments-view-modal/ist-amendments-view-modal.component';
import { IstSiteEvluationComponent } from './ist/ist-application-ext/ist-site-evaluation/ist-site-evluation.component';
import { IstSiteEvaluationViewModalComponent } from './ist/ist-application-ext/ist-site-evaluation/ist-site-evaluation-view-modal/ist-site-evaluation-view-modal.component';

import { IstStudyReportsComponent } from './ist/ist-application-ext/ist-study-reports/ist-study-reports.component';
import { IstStudyReportsViewModalComponent } from './ist/ist-application-ext/ist-study-reports/ist-study-reports-view-modal/ist-study-reports-view-modal.component';
import { IstActivitiesSeminarsComponent } from './ist/ist-application-ext/ist-activities-seminars/ist-activities-seminars.component';
import { IstActivitiesSeminarsViewModalComponent } from './ist/ist-application-ext/ist-activities-seminars/ist-activities-seminars-view-modal/ist-activities-seminars-view-modal.component';
import { IstPublicationsComponent } from './ist/ist-application-ext/ist-publications/ist-publications.component';
import { IstPublicationsViewModalComponent } from './ist/ist-application-ext/ist-publications/ist-publications-view-modal/ist-publications-view-modal.component';
import { AttachmentsComponent } from './common/attachments/attachments.component';
import { RfiComponent } from './common/rfi/rfi.component';
import { NotesComponent } from './common/notes/notes.component';
import { IstInstitutionalReviewBoardComponent } from './ist/ist-application-ext/ist-institutional-review-board/ist-institutional-review-board.component';
import { IstConceptProposalComponent } from './ist/ist-application-ext/ist-concept-proposal/ist-concept-proposal.component';
import { IstStudyTeamOrganizationViewModalComponent } from './ist/ist-application-ext/ist-study-team-organization/ist-study-team-organization-view-modal/ist-study-team-organization-view-modal.component';
import { IstStudyTeamTeamViewModalComponent } from './ist/ist-application-ext/ist-study-team-team/ist-study-team-team-view-modal/ist-study-team-team-view-modal.component';
import { RouteComponent } from './common/route/route.component';
import { NotesViewModalComponent } from './common/notes/notes-view-modal/notes-view-modal.component';
import { ReturnComponent } from './common/return/return.component';
import { RejectComponent } from './common/reject/reject.component';
import { WithdrawComponent } from './common/withdraw/withdraw.component';
import { IstRequestProductComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product.component';
import { IstRequestFundComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund.component';
import { IstPatientInformationComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information.component';
import { AttachmentsViewModalComponent } from './common/attachments/attachments-view-modal/attachments-view-modal.component';
import { RfiViewModalComponent } from './common/rfi/rfi-view-modal/rfi-view-modal.component';
import { IstPatientInformationViewModalComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information-view-modal/ist-patient-information-view-modal.component';
import { ConfirmOtpComponent } from './common/withdraw/confirm-otp/confirm-otp.component';
import { IstSiteEvaluationUpdateStatusComponent } from './ist/ist-application-ext/ist-site-evaluation/ist-site-evaluation-update-status/ist-site-evaluation-update-status.component';
import { IstRequestFundViewModalComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund-view-modal/ist-request-fund-view-modal.component';
import { IstRequestFundAllocationModalComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund-allocation-modal/ist-request-fund-allocation-modal.component';
import { IstRequestFundReturnOrRetrieveModalComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund-return-or-retrieve-modal/ist-request-fund-return-or-retrieve-modal.component';
import { IstRequestFundUpdateUsageModalComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund-update-usage-modal/ist-request-fund-update-usage-modal.component';
import { IstRequestFundBankAccountsModalComponent } from './ist/ist-application-ext/ist-request-fund/ist-request-fund-bank-accounts-modal/ist-request-fund-bank-accounts-modal.component';
import { IstRequestProductViewModalComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product-view-modal/ist-request-product-view-modal.component';
import { IstRequestProductUpdateUsageModalComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product-update-usage-modal/ist-request-product-update-usage-modal.component';
import { IstRequestProductReturnOrRetrieveModalComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product-return-or-retrieve-modal/ist-request-product-return-or-retrieve-modal.component';
import { IstRequestProductAllocateModalComponent } from './ist/ist-application-ext/ist-request-product/ist-request-product-allocate-modal/ist-request-product-allocate-modal.component';
import { IstPatientInformationClassificationModalComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information-classification-modal/ist-patient-information-classification-modal.component';
import { IstPatientInformationMedicalHistoryModalComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information-medical-history-modal/ist-patient-information-medical-history-modal.component';
import { IstPatientInformationDiagnosisModalComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information-diagnosis-modal/ist-patient-information-diagnosis-modal.component';
import { GrantsGeneralInformationComponent } from './grants/grants-application-ext/grants-general-information/grants-general-information.component';
import { GrantsGrantInformationComponent } from './grants/grants-application-ext/grants-grant-information/grants-grant-information.component';
import { IstRegistrationsViewModalComponent } from './ist/ist-registrations/ist-registrations-view-modal/ist-registrations-view-modal.component';
import { IstPatientInformationImportPatientsViewModalComponent } from './ist/ist-application-ext/ist-patient-information/ist-patient-information-import-patients-view-modal/ist-patient-information-import-patients-view-modal.component';


import { ToastModule } from "ng-uikit-pro-standard";
import { DeleteBoxComponent } from "./common/delete-box/delete-box.component";
import { UmRoleMapUsersViewModalComponent } from './um/um-role/um-role-map-users-view-modal/um-role-map-users-view-modal.component';
import { UmRoleMapPrivilegesViewModalComponent } from './um/um-role/um-role-map-privileges-view-modal/um-role-map-privileges-view-modal.component';
import { UmOrganizationPasswordPolicyViewModalComponent } from './um/um-organization/um-organization-password-policy-view-modal/um-organization-password-policy-view-modal.component';
import { IstStudyTeamViewComponent } from './ist/ist-application-ext/ist-study-team-team/ist-study-team-view/ist-study-team-view.component';
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
import { GrantsMyApplicationsComponent } from './grants/grants-my-applications/grants-my-applications.component';
import { GrantsApplicationsComponent } from './grants/grants-applications/grants-applications.component';
import { GrantsRegistrationsViewModalComponent } from './grants/grants-registrations/grants-registrations-view-modal/grants-registrations-view-modal.component';
import { GrantsApplicationExtComponent } from './grants/grants-application-ext/grants-application-ext.component';
import { GrantsAuthorizedSigneeAndPayeeViewModalComponent } from './grants/grants-application-ext/grants-authorized-signee-and-payee/grants-authorized-signee-and-payee-view-modal/grants-authorized-signee-and-payee-view-modal.component';
import { GrantsOutcomeAssessmentViewModalComponent } from './grants/grants-application-ext/grants-outcome-assessment/grants-outcome-assessment-view-modal/grants-outcome-assessment-view-modal.component';
import { GrantsAudiencesViewModalComponent } from './grants/grants-application-ext/grants-audiences/grants-audiences-view-modal/grants-audiences-view-modal.component';
import { GrantsDeliveryFormatViewModalComponent } from './grants/grants-application-ext/grants-delivery-format/grants-delivery-format-view-modal/grants-delivery-format-view-modal.component';
import { EapApplicationsComponent } from './eap/eap-applications/eap-applications.component';
import { EapMyApplicationsComponent } from './eap/eap-my-applications/eap-my-applications.component';
import { EapApplicationExtComponent } from './eap/eap-application-ext/eap-application-ext.component';
import { EapProgramInfoComponent } from './eap/eap-application-ext/eap-program-info/eap-program-info.component';
import { CorrespondenceComponent } from './common/correspondence/correspondence.component';
import { GrantsBudgetViewModalComponent } from './grants/grants-application-ext/grants-budget/grants-budget-view-modal/grants-budget-view-modal.component';
import { GrantsBudgetAllocateComponent } from './grants/grants-application-ext/grants-budget/grants-budget-allocate/grants-budget-allocate.component';
import { GrantsBudgetViewBudgetRequestComponent } from './grants/grants-application-ext/grants-budget/grants-budget-view-budget-request/grants-budget-view-budget-request.component';
import { GrantsBudgetRecordExpenditureComponent } from './grants/grants-application-ext/grants-reconciliation/grants-budget-record-expenditure/grants-budget-record-expenditure.component';
import { LookupsComponent } from './administration/lookups/lookups.component';
import { DocumentAttachComponent } from './administration/document-attach/document-attach.component';
import { CompanyRepresentativesComponent } from './administration/company-representatives/company-representatives.component';
import { TheraupeticAreaComponent } from './administration/theraupetic-area/theraupetic-area.component';
import { ProductComponent } from './administration/product/product.component';
import { ProgramComponent } from './administration/program/program.component';
import { CCodeComponent } from './administration/c-code/c-code.component';
import { NotificationStoreComponent } from './administration/notification-store/notification-store.component';
import { EventSummaryComponent } from './administration/event-summary/event-summary.component';
import { EmailConfigurationComponent } from './administration/email-configuration/email-configuration.component';
import { LdapConfigurationComponent } from './administration/ldap-configuration/ldap-configuration.component';
import { SamlSsoConfigurationComponent } from './administration/saml-sso-configuration/saml-sso-configuration.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { EapTypeComponent } from './administration/eap-type/eap-type.component';
import { AttachDocumentsModalComponent } from './administration/document-attach/attach-documents-modal/attach-documents-modal.component';
import { AttachDocumentTypesComponent } from './administration/document-attach/attach-document-types/attach-document-types.component';
import { TheraupeticAreaViewModalComponent } from './administration/theraupetic-area/theraupetic-area-view-modal/theraupetic-area-view-modal.component';
import { LookupsModalEditComponent } from './administration/lookups/lookups-modal-edit/lookups-modal-edit.component';
import { LookupsAddMultipleComponent } from './administration/lookups/lookups-add-multiple/lookups-add-multiple.component';
import { EapTypeViewComponent } from './administration/eap-type/eap-type-view/eap-type-view.component';
import { CompanyRepresentativesViewModalComponent } from './administration/company-representatives/company-representatives-view-modal/company-representatives-view-modal.component';
import { ProductViewModalComponent } from './administration/product/product-view-modal/product-view-modal.component';
import { AddProductApprovalComponent } from './administration/product/add-product-approval/add-product-approval.component';
import { AvailableProductsComponent } from './administration/available-products/available-products.component';
import { ProgramViewModalComponent } from './administration/program/program-view-modal/program-view-modal.component';
import { SetFormatComponent } from './administration/c-code/set-format/set-format.component';
import { ComposeComponent } from './common/correspondence/compose/compose.component';
import { ToBccComponent } from './common/correspondence/to-bcc/to-bcc.component';
import { AttachmentsCorrespondenceComponent } from './common/correspondence/attachments-correspondence/attachments-correspondence.component';
import { SetEventDeliveryComponent } from './administration/event-summary/set-event-delivery/set-event-delivery.component';
import { UmUserMapUserViewModalComponent } from './um/um-user/um-user-map-user-view-modal/um-user-map-user-view-modal.component';
import { GrantsRegistrationsComplianceComponent } from './grants/grants-registrations/grants-registrations-compliance/grants-registrations-compliance.component';
import { RequestTypeModalComponent } from './grants/grants-applications/request-type-modal/request-type-modal.component';
import { LetterOfIntentModalComponent } from './grants/grants-applications/letter-of-intent-modal/letter-of-intent-modal.component';
import { UserInstructionModalComponent } from './grants/grants-applications/user-instruction-modal/user-instruction-modal.component';
import { RfiAddModalComponent } from './common/rfi/rfi-add-modal/rfi-add-modal.component';
import { EditOthersRenderer, NoAddBtnPipe } from './common/client-grid/edit-others-operations.component';
import { DeleteOperationsRenderer } from './common/client-grid/delete-operations.component';
import { TextareaAddonComponent } from './common/textarea-addon/textarea-addon.component';
import { ComplainceStatementComponent } from './common/complaince-statement/complaince-statement.component';
import { RfpComponent } from './administration/rfp/rfp.component';
import { RfpModalComponent } from './administration/rfp/rfp-modal/rfp-modal.component';
import { IstAllRequestsComponent } from './ist/ist-application-ext/ist-all-requests/ist-all-requests.component';
import { AllRequestsViewModalComponent } from './ist/ist-application-ext/ist-all-requests/all-requests-view-modal/all-requests-view-modal.component';
import { LookupsSortOrderComponent } from './administration/lookups/lookups-sort-order/lookups-sort-order.component';
import { ReturnRetrivalModalComponent } from './ist/ist-application-ext/ist-all-requests/return-retrival-modal/return-retrival-modal.component';
import { FundRequestModalComponent } from './ist/ist-application-ext/ist-all-requests/fund-request-modal/fund-request-modal.component';
import { FundReturnRetrivalModalComponent } from './ist/ist-application-ext/ist-all-requests/fund-return-retrival-modal/fund-return-retrival-modal.component';
import { DocumentTypeComponent } from './administration/document-type/document-type.component';
import { DocumentTypeModalComponent } from './administration/document-type/document-type-modal/document-type-modal.component';
import { InstructionsComponent } from './administration/instructions/instructions.component';
import { InstructionsModalComponent } from './administration/instructions/instructions-modal/instructions-modal.component';
import { FaqComponent } from './administration/faq/faq.component';
import { FaqModalComponent } from './administration/faq/faq-modal/faq-modal.component';
import { FaqViewComponent } from './common/faq-view/faq-view.component';
import { DocumentTemplateComponent } from './common/document-template/document-template.component';
import { PolicyConfiguratorComponent } from './administration/policy-configurator/policy-configurator.component';
import { PolicyConfiguratorModalComponent } from './administration/policy-configurator/policy-configurator-modal/policy-configurator-modal.component';
import { ScreenRepositoryComponent } from './administration/screen-repository/screen-repository.component';
import { ScreenRepositoryModalComponent } from './administration/screen-repository/screen-repository-modal/screen-repository-modal.component';
import { ConfigureControlsModalComponent } from './administration/screen-repository/configure-controls-modal/configure-controls-modal.component';
import { GrantsSponsershipBenefitsSponsorshipComponent } from './grants/grants-application-ext/grants-sponsership-benefits-sponsorship/grants-sponsership-benefits-sponsorship.component';
import { GrantsDocumentUploadSponsorshipComponent } from './grants/grants-application-ext/grants-document-upload-sponsorship/grants-document-upload-sponsorship.component';
import { GrantsGeneralInformationCharitableComponent } from './grants/grants-application-ext/grants-general-information-charitable/grants-general-information-charitable.component';
import { GrantsGeneralInformationSponsorshipComponent } from './grants/grants-application-ext/grants-general-information-sponsorship/grants-general-information-sponsorship.component';
import { RfpGrantsComponent } from './grants/grants-applications/rfp-grants/rfp-grants.component';
import { FileUploadComponent } from './common/file-upload/file-upload.component';
import { ReleaseComponent } from './common/release/release.component';
import { AdditionalAttachmentsModalComponent } from './ist/ist-application-ext/ist-patient-information/additional-attachments-modal/additional-attachments-modal.component';
import { PregnancyDetailsModalComponent } from './ist/ist-application-ext/ist-patient-information/pregnancy-details-modal/pregnancy-details-modal.component';
import { PatientDiagnosisNotesModalComponent } from './ist/ist-application-ext/ist-patient-information/patient-diagnosis-notes-modal/patient-diagnosis-notes-modal.component';
import { LabDetailsModalComponent } from './ist/ist-application-ext/ist-patient-information/lab-details-modal/lab-details-modal.component';
import { LabDetailsViewModalComponent } from './ist/ist-application-ext/ist-patient-information/lab-details-modal/lab-details-view-modal/lab-details-view-modal.component';
import { MedicalHistoryModalComponent } from './ist/ist-application-ext/ist-patient-information/medical-history-modal/medical-history-modal.component';
import { MedicalHistoryViewModalComponent } from './ist/ist-application-ext/ist-patient-information/medical-history-modal/medical-history-view-modal/medical-history-view-modal.component';
import { EditAndDeleteOperationsRenderer } from './common/client-grid/edit-and-delete-operations.component';
import { IstStudyTeamAddOrRoleComponent } from './ist/ist-application-ext/ist-study-team-team/ist-study-team-add-or-role/ist-study-team-add-or-role.component';
import { AttachmentClassificationComponent } from './common/attachment-classification/attachment-classification.component';
import { DocumentTypeAddComponent } from './common/document-type-add/document-type-add.component';
import { IstUserInstructionsModalComponent } from './ist/ist-my-applications/ist-user-instructions-modal/ist-user-instructions-modal.component';
import { EapUserInstructionsModalComponent } from './eap/eap-my-applications/eap-user-instructions-modal/eap-user-instructions-modal.component';
import { ConfigureControlsAddComponent } from './administration/screen-repository/configure-controls-modal/configure-controls-add/configure-controls-add.component';
import { AddBankDetailsComponent } from './common/add-bank-details/add-bank-details.component';

import { DatePickerGlobalOptions } from '../app/constants/service.constants';

@NgModule({
  declarations: [
    AppComponent,
    IstComponent,
    EapComponent,
    GrantsComponent,
    UmComponent,
    IstRegistrationsComponent,
    IstApplicationsComponent,
    IstMyApplicationsComponent,
    ClientGridComponent,
    WipComponent,
    BreadcrumbComponent,
    OperationsBarComponent,
    IstApplicationExtComponent,
    ExtHeaderComponent,
    HeaderComponent,
    IstGeneralInformationComponent,
    IstStudyTeamTeamComponent,
    MessageBoxComponent,
    AssignDialogComponent,
    UmDepartmentComponent,
    UmUserComponent,
    UmRoleComponent,
    UmPrivilegeComponent,
    UmOrganizationComponent,
    AdministrationComponent,
    PersonalizationComponent,
    ChangeThemeComponent,
    ChangePasswordComponent,
    ViewProfileComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AdvanceSearchComponent,
    UmUserViewModalComponent,
    UmDepartmentViewModalComponent,
    IstMilestonesComponent,
    IstStudyTeamOrganizationComponent,
    UmOrganizationViewModalComponent,
    UmPrivilegeViewModalComponent,
    UmRoleViewModalComponent,
    IstMilestonesViewModalComponent,
    IstAmendmentsComponent,
    IstAmendmentsViewModalComponent,
    IstSiteEvluationComponent,
    IstSiteEvaluationViewModalComponent,
    IstStudyReportsComponent,
    IstStudyReportsViewModalComponent,
    IstActivitiesSeminarsComponent,
    IstActivitiesSeminarsViewModalComponent,
    IstPublicationsComponent,
    IstPublicationsViewModalComponent,
    AttachmentsComponent,
    RfiComponent,
    NotesComponent,
    IstInstitutionalReviewBoardComponent,
    IstConceptProposalComponent,
    IstStudyTeamOrganizationViewModalComponent,
    IstStudyTeamTeamViewModalComponent,
    RouteComponent,
    NotesViewModalComponent,
    ReturnComponent,
    RejectComponent,
    WithdrawComponent,
    IstRequestProductComponent,
    IstRequestFundComponent,
    IstPatientInformationComponent,
    AttachmentsViewModalComponent,
    RfiViewModalComponent,
    IstPatientInformationViewModalComponent,
    ConfirmOtpComponent,
    IstSiteEvaluationUpdateStatusComponent,
    DeleteBoxComponent,
    IstRequestFundViewModalComponent,
    IstRequestFundAllocationModalComponent,
    IstRequestFundReturnOrRetrieveModalComponent,
    IstRequestFundUpdateUsageModalComponent,
    IstRequestFundBankAccountsModalComponent,
    IstRequestProductViewModalComponent,
    IstRequestProductUpdateUsageModalComponent,
    IstRequestProductReturnOrRetrieveModalComponent,
    IstRequestProductAllocateModalComponent,
    IstPatientInformationClassificationModalComponent,
    IstPatientInformationMedicalHistoryModalComponent,
    IstPatientInformationDiagnosisModalComponent,
    GrantsGeneralInformationComponent,
    GrantsGrantInformationComponent,
    IstRegistrationsViewModalComponent,
    IstPatientInformationImportPatientsViewModalComponent,
    UmRoleMapUsersViewModalComponent,
    UmRoleMapPrivilegesViewModalComponent,
    UmOrganizationPasswordPolicyViewModalComponent,
    IstStudyTeamViewComponent,
    GrantsLetterOfIntentComponent,
    GrantsUserInstructionsComponent,
    GrantsDeliveryFormatComponent,
    GrantsAudiencesComponent,
    GrantsBudgetComponent,
    GrantsAccredationDetailsComponent,
    GrantsAuthorizedSigneeAndPayeeComponent,
    GrantsOutcomeAssessmentComponent,
    GrantsReconciliationComponent,
    GrantsSponsershipBenefitsComponent,
    GrantsDocumentUploadComponent,
    GrantsRegistrationsComponent,
    GrantsMyApplicationsComponent,
    GrantsApplicationsComponent,
    GrantsRegistrationsViewModalComponent,
    GrantsApplicationExtComponent,
    GrantsAuthorizedSigneeAndPayeeViewModalComponent,
    GrantsOutcomeAssessmentViewModalComponent,
    GrantsAudiencesViewModalComponent,
    GrantsDeliveryFormatViewModalComponent,
    EapApplicationsComponent,
    EapMyApplicationsComponent,
    EapApplicationExtComponent,
    EapProgramInfoComponent,
    CorrespondenceComponent,
    GrantsBudgetViewModalComponent,
    GrantsBudgetAllocateComponent,
    GrantsBudgetViewBudgetRequestComponent,
    GrantsBudgetRecordExpenditureComponent,
    LookupsComponent,
    DocumentAttachComponent,
    CompanyRepresentativesComponent,
    TheraupeticAreaComponent,
    ProductComponent,
    ProgramComponent,
    CCodeComponent,
    NotificationStoreComponent,
    EventSummaryComponent,
    EmailConfigurationComponent,
    LdapConfigurationComponent,
    SamlSsoConfigurationComponent,
    ForgotPasswordComponent,
    EapTypeComponent,
    AttachDocumentsModalComponent,
    AttachDocumentTypesComponent,
    TheraupeticAreaViewModalComponent,
    LookupsModalEditComponent,
    LookupsAddMultipleComponent,
    EapTypeViewComponent,
    CompanyRepresentativesViewModalComponent,
    ProductViewModalComponent,
    AddProductApprovalComponent,
    AvailableProductsComponent,
    ProgramViewModalComponent,
    SetFormatComponent,
    ComposeComponent,
    ToBccComponent,
    AttachmentsCorrespondenceComponent,
    SetEventDeliveryComponent,
    UmUserMapUserViewModalComponent,
    GrantsRegistrationsComplianceComponent,
    RequestTypeModalComponent,
    LetterOfIntentModalComponent,
    UserInstructionModalComponent,
    RfiAddModalComponent,
    EditOthersRenderer,
    DeleteOperationsRenderer,
    EditAndDeleteOperationsRenderer,
    MyFilterPipe,
    NoAddBtnPipe,
    TextareaAddonComponent,
    ComplainceStatementComponent,
    RfpComponent,
    RfpModalComponent,
    IstAllRequestsComponent,
    AllRequestsViewModalComponent,
    LookupsSortOrderComponent,
    ReturnRetrivalModalComponent,
    FundRequestModalComponent,
    FundReturnRetrivalModalComponent,
    DocumentTypeComponent,
    DocumentTypeModalComponent,
    InstructionsComponent,
    InstructionsModalComponent,
    FaqComponent,
    FaqModalComponent,
    FaqViewComponent,
    DocumentTemplateComponent,
    PolicyConfiguratorComponent,
    PolicyConfiguratorModalComponent,
    ScreenRepositoryComponent,
    ScreenRepositoryModalComponent,
    ConfigureControlsModalComponent,
    GrantsSponsershipBenefitsSponsorshipComponent,
    GrantsDocumentUploadSponsorshipComponent,
    GrantsGeneralInformationCharitableComponent,
    GrantsGeneralInformationSponsorshipComponent,
    RfpGrantsComponent,
    FileUploadComponent,
    ReleaseComponent,
    AdditionalAttachmentsModalComponent,
    PregnancyDetailsModalComponent,
    PatientDiagnosisNotesModalComponent,
    LabDetailsModalComponent,
    LabDetailsViewModalComponent,
    MedicalHistoryModalComponent,
    MedicalHistoryViewModalComponent,
    IstStudyTeamAddOrRoleComponent,
    AttachmentClassificationComponent,
    DocumentTypeAddComponent,
    IstUserInstructionsModalComponent,
    EapUserInstructionsModalComponent,
    ConfigureControlsAddComponent,
    AddBankDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot()
  ],
  entryComponents: [
    MessageBoxComponent,
    AssignDialogComponent,
    AdvanceSearchComponent,
    UmUserViewModalComponent,
    UmDepartmentViewModalComponent,
    UmRoleViewModalComponent,
    UmPrivilegeViewModalComponent,
    UmOrganizationViewModalComponent,
    IstMilestonesViewModalComponent,
    IstAmendmentsViewModalComponent,
    IstSiteEvaluationViewModalComponent,
    IstStudyReportsViewModalComponent,
    IstActivitiesSeminarsViewModalComponent,
    IstPublicationsViewModalComponent,
    IstStudyTeamOrganizationViewModalComponent,
    IstStudyTeamTeamViewModalComponent,
    RouteComponent,
    NotesViewModalComponent,
    ReturnComponent,
    RejectComponent,
    WithdrawComponent,
    NotesViewModalComponent,
    AttachmentsViewModalComponent,
    ConfirmOtpComponent,
    IstSiteEvaluationUpdateStatusComponent,
    DeleteBoxComponent,
    IstRequestFundViewModalComponent,
    IstRequestFundAllocationModalComponent,
    IstRequestFundReturnOrRetrieveModalComponent,
    IstRequestFundUpdateUsageModalComponent,
    IstRequestFundBankAccountsModalComponent,
    IstRequestProductViewModalComponent,
    IstRequestProductUpdateUsageModalComponent,
    IstRequestProductReturnOrRetrieveModalComponent,
    IstRequestProductAllocateModalComponent,
    IstRegistrationsViewModalComponent,
    IstPatientInformationMedicalHistoryModalComponent,
    IstPatientInformationClassificationModalComponent,
    IstPatientInformationViewModalComponent,
    IstPatientInformationImportPatientsViewModalComponent,
    IstPatientInformationDiagnosisModalComponent,
    UmRoleMapUsersViewModalComponent,
    UmRoleMapPrivilegesViewModalComponent,
    UmOrganizationPasswordPolicyViewModalComponent,
    RfiViewModalComponent,
    GrantsAuthorizedSigneeAndPayeeViewModalComponent,
    GrantsOutcomeAssessmentViewModalComponent,
    GrantsAudiencesViewModalComponent,
    GrantsDeliveryFormatViewModalComponent,
    GrantsBudgetViewModalComponent,
    GrantsBudgetAllocateComponent,
    GrantsBudgetViewBudgetRequestComponent,
    GrantsBudgetRecordExpenditureComponent,
    AttachDocumentsModalComponent,
    AttachDocumentTypesComponent,
    TheraupeticAreaViewModalComponent,
    LookupsModalEditComponent,
    LookupsAddMultipleComponent,
    EapTypeViewComponent,
    CompanyRepresentativesViewModalComponent,
    ProductViewModalComponent,
    AddProductApprovalComponent,
    AvailableProductsComponent,
    ProgramViewModalComponent,
    SetFormatComponent,
    ComposeComponent,
    ToBccComponent,
    AttachmentsCorrespondenceComponent,
    SetEventDeliveryComponent,
    UmUserMapUserViewModalComponent,
    GrantsRegistrationsViewModalComponent,
    GrantsRegistrationsComplianceComponent,
    RequestTypeModalComponent,
    LetterOfIntentModalComponent,
    UserInstructionModalComponent,
    RfiAddModalComponent,
    EditOthersRenderer,
    DeleteOperationsRenderer,
    EditAndDeleteOperationsRenderer,
    TextareaAddonComponent,
    ComplainceStatementComponent,
    RfpModalComponent,
    AllRequestsViewModalComponent,
    LookupsSortOrderComponent,
    ReturnRetrivalModalComponent,
    FundRequestModalComponent,
    FundReturnRetrivalModalComponent,
    DocumentTypeModalComponent,
    InstructionsModalComponent,
    FaqModalComponent,
    FaqViewComponent,
    DocumentTemplateComponent,
    PolicyConfiguratorModalComponent,
    ScreenRepositoryModalComponent,
    ConfigureControlsModalComponent,
    RfpGrantsComponent,
    ReleaseComponent,
    ChangePasswordComponent,
    AdditionalAttachmentsModalComponent,
    PregnancyDetailsModalComponent,
    PatientDiagnosisNotesModalComponent,
    LabDetailsModalComponent,
    LabDetailsViewModalComponent,
    MedicalHistoryModalComponent,
    MedicalHistoryViewModalComponent,
    IstStudyTeamAddOrRoleComponent,
    DocumentTypeAddComponent,
    AttachmentClassificationComponent,
    IstUserInstructionsModalComponent,
    EapUserInstructionsModalComponent,
    ConfigureControlsAddComponent,
    AddBankDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

