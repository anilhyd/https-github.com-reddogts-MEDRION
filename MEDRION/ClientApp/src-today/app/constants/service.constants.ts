import { HttpHeaders } from '@angular/common/http';

//export const api = "/api";
export const api = "https://stormy-everglades-94974.herokuapp.com/api";
export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
}; 

export const printMessage = 'The Application form will be downloaded in to your system for taking a print';
export const assignMessage = 'Assign the application to some one in the organisation, so that they can perform the next steps';
export const deleteConfirmMessage = "Selected Record(s) will be deleted. Do you want to proceed?";
export const deleteSuccessMessage = "Selected Record(s) has been Deleted";
export const theraputicAreaConstant = [
  {
    "label": "Oncology,",
    "value": "Oncology,"
  },
  {
    "label": "Pulmonology,",
    "value": "Pulmonology,"
  },
  {
    "label": "Cardiology,",
    "value": "Cardiology,"
  },
  {
    "label": "Neurology",
    "value": "Neurology"
  },
  {
    "label": "Dermatology",
    "value": "Dermatology"
  },
  {
    "label": "Ophthalmology",
    "value": "Ophthalmology"
  },
  {
    "label": "Urology",
    "value": "Urology"
  },
  {
    "label": "Psychiatry",
    "value": "Psychiatry"
  },
  {
    "label": "Reproduction",
    "value": "Reproduction"
  },
  {
    "label": "Immunology",
    "value": "Immunology"
  },
  {
    "label": "Osteoarthritis",
    "value": "Osteoarthritis"
  },
  {
    "label": "Pediatrics",
    "value": "Pediatrics"
  }
]

export const roleOptionsConstant = [
  {
    "label": "Primary Investigator",
    "value": "PI"
  },
  {
    "label": "Lead Investigator",
    "value": "LI"
  },
  {
    "label": "Co-Investigators",
    "value": "CI"
  },
  {
    "label": "Statastics",
    "value": "statastics"
  },
  {
    "label": "Administrator",
    "value": "admin"
  },
  {
    "label": "Nurses",
    "value": "nurses"
  }
];
export const organizationOptionsConstant = [
  {
    "label": "Green Hill Medical Center",
    "value": "org-GHC"
  },
  {
    "label": "Freeman Hospital Center",
    "value": "org-FHC"
  }
]
export const eapTypesOptionsConstant = 
[
  {
    "label": "Individual Patient IND",
    "value": "IndividualPatientIND"             
  },
  {
    "label": "Emergency Use Individual Patient IND",
    "value": "Emergency Use Individual Patient IND"             
  },
  {
    "label": "Intermediate-Size Population IND",
    "value": "Intermediate-Size Population IND"             
  },
  {
    "label": "Treatment IND",
    "value": "Treatment IND"             
  },
  {
    "label": "Individual Patient Protocol",
    "value": "Individual Patient Protocol"             
  },
  {
    "label": "Emergency Use Individual Patient Protocol",
    "value": "Emergency Use Individual Patient Protocol"             
  },
  {
    "label": "Intermediate-Size Population Protocol",
    "value": "Intermediate-Size Population Protocol"             
  },
  {
    "label": "Treatment Protocol",
    "value": "Treatment Protocol"             
  }
]
export const genderOptionsConstant = [{ "value": "male", "label":"Male"},{ "value": "female", "label":"Female"},{ "value": "transGender", "label":"Trans Gender"}];
export const departmentsOptionsConstant = [{ "value": "dept_1", "label":"Department 1"},{ "value": "dept_2", "label":"Department 2"},{ "value": "dept_3", "label":"Department 3"}];
export const personsOptionsConstant = [{ "value": "Alex", "label":"Alex"},{ "value": "James", "label":"James"},{ "value": "Robinson", "label":"Robinson"},{ "value": "Sinofsky", "label":"Sinofsky"}];
export const templatesOptionsConstant = [{ "value": "at", "label":"Administrative Template"}];
export const currencyOptionsConstant = [{ "value": "usd", "label":"USD"},{ "value": "pound", "label":"Pound"},{ "value": "euro", "label":"Euro"},{ "value": "CAD", "label":"CAD"},{ "value": "rupees", "label":"Rupees"}];
export const countryOptionsConstant = [{ "value": "in", "label":"INDIA"},{ "value": "canada", "label":"Canada"},{ "value": "UK", "label":"UK"},{ "value": "USA", "label":"USA"}];
export const stateOptionsConstant = 
[
    
    {
      "value": "Alabama",
      "label": "Alabama"
    },
    {
      "value": "Alaska",
      "label": "Alaska"
    },
    {
      "value": "American Samoa",
      "label": "American Samoa"
    },
    {
      "value": "Arizona",
      "label": "Arizona"
    },
    {
      "value": "Arkansas",
      "label": "Arkansas"
    },
    {
      "value": "California",
      "label": "California"
    },
    {
      "value": "Colorado",
      "label": "Colorado"
    },
    {
      "value": "Connecticut",
      "label": "Connecticut"
    },
    {
      "value": "Delaware",
      "label": "Delaware"
    },
    {
      "value": "District of Columbia",
      "label": "District of Columbia"
    },
    {
      "value": "Federated States of Micronesia",
      "label": "Federated States of Micronesia"
    },
    {
      "value": "Florida",
      "label": "Florida"
    },
    {
      "value": "Fort Lauderdale",
      "label": "Fort Lauderdale"
    },
    {
      "value": "Georgia",
      "label": "Georgia"
    },
    {
      "value": "Guam",
      "label": "Guam"
    },
    {
      "value": "Hawaii",
      "label": "Hawaii"
    },
    {
      "value": "Idaho",
      "label": "Idaho"
    },
    {
      "value": "Illinois",
      "label": "Illinois"
    },
    {
      "value": "Indiana",
      "label": "Indiana"
    },
    {
      "value": "Iowa",
      "label": "Iowa"
    },
    {
      "value": "Kansas",
      "label": "Kansas"
    },
    {
      "value": "Kentucky",
      "label": "Kentucky"
    },
    {
      "value": "Louisiana",
      "label": "Louisiana"
    },
    {
      "value": "Maine",
      "label": "Maine"
    },
    {
      "value": "Marshall Islands",
      "label": "Marshall Islands"
    },
    {
      "value": "Maryland",
      "label": "Maryland"
    },
    {
      "value": "Massachusetts",
      "label": "Massachusetts"
    },
    {
      "value": "Michigan",
      "label": "Michigan"
    },
    {
      "value": "Minnesota",
      "label": "Minnesota"
    },
    {
      "value": "Mississippi",
      "label": "Mississippi"
    },
    {
      "value": "Missouri",
      "label": "Missouri"
    },
    {
      "value": "Montana",
      "label": "Montana"
    },
    {
      "value": "Nebraska",
      "label": "Nebraska"
    },
    {
      "value": "Nevada",
      "label": "Nevada"
    },
    {
      "value": "New Hampshire",
      "label": "New Hampshire"
    },
    {
      "value": "New Jersey",
      "label": "New Jersey"
    },
    {
      "value": "New Mexico",
      "label": "New Mexico"
    },
    {
      "value": "New York",
      "label": "New York"
    },
    {
      "value": "North Carolina",
      "label": "North Carolina"
    },
    {
      "value": "North Dakota",
      "label": "North Dakota"
    },
    {
      "value": "Northern Mariana Islands",
      "label": "Northern Mariana Islands"
    },
    {
      "value": "Ohio",
      "label": "Ohio"
    },
    {
      "value": "Oklahoma",
      "label": "Oklahoma"
    },
    {
      "value": "Oregon",
      "label": "Oregon"
    },
    {
      "value": "Palau",
      "label": "Palau"
    },
    {
      "value": "Pennsylvania",
      "label": "Pennsylvania"
    },
    {
      "value": "Puerto Rico",
      "label": "Puerto Rico"
    },
    {
      "value": "Rhode Island",
      "label": "Rhode Island"
    },
    {
      "value": "South Carolina",
      "label": "South Carolina"
    },
    {
      "value": "South Dakota",
      "label": "South Dakota"
    },
    {
      "value": "Tennessee",
      "label": "Tennessee"
    },
    {
      "value": "Texas",
      "label": "Texas"
    },
    {
      "value": "Utah",
      "label": "Utah"
    },
    {
      "value": "Vermont",
      "label": "Vermont"
    },
    {
      "value": "Virgin Island",
      "label": "Virgin Island"
    },
    {
      "value": "Virginia",
      "label": "Virginia"
    },
    {
      "value": "Washington",
      "label": "Washington"
    },
    {
      "value": "West Virginia",
      "label": "West Virginia"
    },
    {
      "value": "Wisconsin",
      "label": "Wisconsin"
    },
    {
      "value": "Wyoming",
      "label": "Wyoming"
    }
  ]
export const stateOptionsSample = [{ "value": "OptionOne", "label":"Option One"},{ "value": "OptionTwo", "label":"Option Two"},{ "value": "OptionThree", "label":"Option Three"}];
export const documentOptionsConstant = [{"value":"Estimated", "label":"Estimated"},{"value":"Actual", "label":"Actual"}];

export const organisationType = [{"value":"Institution", "label":"Institution"},{"value":"Hospital", "label":"Hospital"},{"value":"Non-Governmental Organisation", "label":"Non-Governmental Organisation"},{"value":"Trust", "label":"Trust"}];
export const organisationSubType = [{"value":"Study Center", "label":"Study Center"},{"value":"Partner Study Center", "label":"Partner Study Center"}];
export const titleOptionsConstant = [
    { value: 'Mr', label: 'Mr.' }, 
    { value: 'Mrs', label: 'Mrs.' },
    { value: 'Dr', label: 'Dr.' },
    { value: 'Rev', label: 'Rev.' },
    { value: 'Ms', label: 'Ms.' },
];
export const chooseOptionsConstant = [
    { value: 'Yes', label: 'Yes.' },
    { value: 'No', label: 'No.' }
];

/*Study Reports*/
export const studyReportTypeConstant = [
    { "value": "Adverse Event", "label": "Adverse Event" },
    { "value": "Product Complaint", "label": "Product Complaint" },
    { "value": "Followups", "label": "Followups" },
    { "value": "Others", "label": "Others" }
];
export const studyReportSubTypeConstant = [
    { "value": "Serious Adverse Event", "label": "Serious Adverse Event" },
    { "value": "Received Damaged Product", "label": "Received Damaged Product" },
    { "value": "FollProduct Expiredowups", "label": "FollProduct Expiredowups" }
];
export const studyReportPatientConstant = [
    { "value": "Aubree Waelchi (P-IST-P001)", "label": "Aubree Waelchi (P-IST-P001)" },
    { "value": "Alexandria Bauch (P-IST-006)", "label": "Alexandria Bauch (P-IST-006)" },
    { "value": "Nia Labadie (P-IST-P002 )", "label": "Nia Labadie (P-IST-P002 )" }
];
/*Study Reports*/

/*Activities and Seminars*/
export const asActivityTypeConstant = [
    { "value": "Seminar", "label": "Seminar" },
    { "value": "Webinar", "label": "Webinar" },
    { "value": "Presentation", "label": "Presentation" },
    { "value": "Awareness", "label": "Awareness" }
];
export const asActivitySubTypeConstant = [
    { "value": "Investigator Awareness", "label": "Investigator Awareness" },
    { "value": "Knowledge Sharing", "label": "Knowledge Sharing" },
    { "value": "Training", "label": "Training" }
];
/*Activities and Seminars*/

/*Publications*/
export const publicationTypeConstant = [
    { "value": "Journal", "label": "Journal" },
    { "value": "Whitepaper", "label": "Whitepaper" }
];
export const publicationContentConstant = [
    { "value": "Abstract", "label": "Abstract" },
    { "value": "Manuscript", "label": "Manuscript" },
    { "value": "Poster", "label": "Poster" },
    { "value": "Slide deck", "label": "Slide deck" }
];
/*Publications*/

export const returnQuantityOptionsConstant = [
    {"value":"dosage_1", "label":"Dosage 1"},
    {"value":"dosage_2", "label":"Dosage 2"},
    {"value":"dosage_3", "label":"Dosage 3"},
    {"value":"dosage_4", "label":"Dosage 4"}
]

export const classificationTypesOptionsConstant = [
    {"value":"prescriptions", "label":"Prescriptions"},
    {"value":"reports", "label":"Reports"},
    {"value":"lab_records", "label":"Lab Records"},
    {"value":"previous_investigations", "label":"Previous Investigations"}
]

export const weightOptionsConstant = [
    { value: 'kgs', label: 'Kgs' },
    { value: 'lbs', label: 'Lbs' }
];

export const heightOptionsConstant = [
    { value: 'ft', label: 'Ft' },
    { value: 'inches', label: 'Inches' },
    { value: 'cms', label: 'Cms' }
];

export const deliveryTypeOptionsConstant = [
    { value: 'natural_child_birth', label: 'Natural Childbirth' },
    { value: 'caesarean_section', label: 'Caesarean Section' },
    { value: 'forceps_delivery', label: 'Forceps Delivery' },
    { value: 'vaginal_delivery', label: 'Vaginal Delivery' },
    { value: 'vaccum_extraction', label: 'Vaccum Extraction' }
];
export const birthTypeOptionsConstant = [
    { value: 'cb', label: 'Cesarean Birth (C-section)' },
    { value: 'vbacd', label: 'Vaginal Birth After Cesarean Delivery (VBAC)' },
    { value: 'vb', label: 'Vaginal Birth' }
];

export const productNamesOptionsConstant = [
  {
    "label": "Exemestane",
    "value": "ex"
  },
  {
    "label": "Radium-223 dichloride (radium-223)",
    "value": "rad"
  }
]

export const dosageFormulationOptionsConstant = [
  {
    "label": "Tablets",
    "value": "Tablets"
  },
  {
    "label": "Capsules",
    "value": "Capsules"
  },
  {
    "label": "Strips",
    "value": "Strips"
  },
  {
    "label": "Syrup",
    "value": "Syrup"
  },
  {
    "label": "Inhailer",
    "value": "Inhailer"
  }
]

export const strengthAndUnitsOptionsConstant = [
  {
    "label": "mg",
    "value": "mg"
  },
  {
    "label": "grams",
    "value": "grams"
  },
  {
    "label": "ml",
    "value": "ml"
  }
]

export const strengthAndUnitsOtherOptionsConstant = [
  {
    "label": "trillion cells/L",
    "value": "trillion cells/L"
  },
  {
    "label": "grams/dL",
    "value": "grams/dL"
  },
  {
    "label": "Percent",
    "value": "Percent"
  },
  {
    "label": "Billion cells/L",
    "value": "Billion cells/L"
  },
  {
    "label": "Billion/L",
    "value": "Billion/L"
  }
]

export const shippingAddressOptionsConstant = [
  {
    "label": "Green Hill Medical Center,1507 Nolan, Texas, 78202",
    "value": "GHC"
  }
]

export const fullFillmentTypeOptionsConstant = [
  {
    "label": "Shipping Address",
    "value": "shipping_address"
  }
]

export const patientIdOptionsConstant = [
  {
    "label": "P-IST-P001",
    "value": "P-IST-P001"
  },
  {
    "label": "P-IST-P002",
    "value": "P-IST-P002"
  },
  {
    "label": "P-IST-P003",
    "value": "P-IST-P003"
  },
  {
    "label": "P-IST-P004",
    "value": "P-IST-P004"
  },
  {
    "label": "P-IST-P005",
    "value": "P-IST-P005"
  },
  {
    "label": "P-IST-P006",
    "value": "P-IST-P006"
  }
]

export const strengthValuesOptionsConstant = [
  {
    "label": "25",
    "value": "25"
  },
  {
    "label": "50",
    "value": "50"
  },
  {
    "label": "75",
    "value": "75"
  }
]



export const fullfillmentOptionsConstant = [
    { value: 'ship_to_address', label: 'Ship to Address' },
    { value: 'partner_network', label: 'Partner Network' }
];
export const recurrenceOptionsConstant = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
];
export const categoryOptionsConstant = [
    { value: 'staff', label: 'staff' },
    { value: 'travel', label: 'travel' },
    { value: 'Investigations', label: 'Investigations' },
    { value: 'Miscellaneous', label: 'Miscellaneous' }
];
export const subCategoryOptionsConstant = [
    { value: 'bus', label: 'Bus' },
    { value: 'train', label: 'Train' },
    { value: 'local_travel', label: 'Local Travel' },
    { value: 'flight', label: 'Flight' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'etc', label: 'Etc' },
];

export const connectionTypeOptionsConstant = [
    { value: 'ssl', label: 'SSL' },
    { value: 'Normal', label: 'Normal' }
];

export const authTypeOptionsConstant = [
    { value: 'negotiate', label: 'Negotiate' }
];

export const privilegesOperationsConstant = [
    {value : 'add', label: 'Add'},
    {value : 'edit', label: 'Edit'},
    {value : 'view', label: 'View'},
    {value : 'delete', label: 'Delete'},
    {value : 'active_or_inactive', label: 'Active/Inactive'},
    {value : 'assign', label: 'Assign'}
]

export const reviewBoardOptionsConstant = [
    {value : 'institutional_review_board', label: 'Institutional Review Board'},
    {value : 'ethics_committee', label: 'Ethics Committee'}
]

export const deliveryFormatOptionsConstant = [
    {value : 'enduring_material', label: 'Enduring Material'},
    {value : 'live', label: 'Live'},
    {value : 'web', label: 'Web'}
]

export const durationOptionsConstant = [
    { value: 'days', label: 'Days' },
    { value: 'weeks', label: 'Weeks' },
    { value: 'months', label: 'Months' },
    { value: 'years', label: 'Years' },
];

export const statusOptions = [
    { value: 'New', label: 'New' },
    { value: 'Submitted', label: 'Submitted' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' },
    { value: 'Allocated', label: 'Allocated' },
    { value: 'Closed', label: 'Closed' },
]

export const modulesOptions = [
    { value: 'ist', label: 'IST' },
    { value: 'eap', label: 'EAP' },
    { value: 'grants', label: 'Grants' },
]

export const subModulesOptions = [
    { value: 'cme', label: 'CME' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'charity', label: 'Charity' },
]

export const controlTypeOptionsConstant = [
  { label:"Generic Text Box", value:"gtb"},
  { label:"Text Area", value:"ta"},
  { label:"Numeric Text Box", value:"ntb"},
  { label:"DropDown", value:"dd"},
  { label:"Date", value:"date"},
  { label:"Check Box Group", value:"cbg"},
  { label:"Radio Button Group", value:"rbg"}
]

export const controlStateOptionsConstant = [
  { label:"New", value:"New"},
  { label:"Make it Active", value:"New"},
  { label:"Make it Inactive", value:"New"}
]

export const formNameOptionsConstant = 
[
  {
    "label": "General Information",
    "value": "general_information_request",
    
  },
  {
    "label": "Study Team - Team",
    "value": "study_team_team_request",
    
  },
  {
    "label": "Study Team - Organisation Setup",
    "value": "study_team_organisation_setup_request",
    
  },
  {
    "label": "Institutional Review Board",
    "value": "institutional_reiew_board_request",
    
  },
  {
    "label": "Concept Proposal",
    "value": "concept_proposal_request",
    
  },
  {
    "label": "Patient Information",
    "value": "patient_information_request",
    
  },
  {
    "label": "All Requests",
    "value": "all_requests",
    
  },
  {
    "label": "Milestones",
    "value": "milestones_request",
    
  },
  {
    "label": "Study Reports",
    "value": "study_reports_request",
    
  },
  {
    "label": "Activities and Seminars",
    "value": "activities_and_seminars_request",
    
  },
  {
    "label": "Publications",
    "value": "publications_Request",
    
  },
  {
    "label": "Amendments",
    "value": "amendments_request",
    
  },
  {
    "label": "Site Evaluation",
    "value": "site_evaluation_request",
    
  }
];
export const sectionOptionsConstant = [
  {
    "label": "Address and Communication details",
    "value": "Address and Communication details"
  },
  {
    "label": "Additional info",
    "value": "Additional info"
  }
];
export const fieldLabelOptionsConstant = 
[
  {
    "label": "Address",
    "value": "Address"
  },
  {
    "label": "Postal Code",
    "value": "Postal Code"
  },
  {
    "label": "City",
    "value": "City"
  },
  {
    "label": "State",
    "value": "State"
  },
  {
    "label": "Country",
    "value": "Country"
  },
  {
    "label": "Email",
    "value": "Email"
  },
  {
    "label": "Mobile Number",
    "value": "Mobile Number"
  },
  {
    "label": "Phone Number",
    "value": "Phone Number"
  }
];

export const amendmentTypeOptionsConstant = [
  {
    "label": "New Protocol",
    "value": "New Protocol"
  },
  {
    "label": "Change In Protocol",
    "value": "Change In Protocol"
  },
  {
    "label": "New Investigator",
    "value": "New Investigator"
  },
  {
    "label": "Study Report",
    "value": "Study Report"
  }
];

export const fetalOutcomeOptionsConstant = [
  {
    "label": "Tablets",
    "value": "Tablets"
  },
  {
    "label": "Capsules",
    "value": "Capsules"
  },
  {
    "label": "Strips",
    "value": "Strips"
  },
  {
    "label": "Syrup",
    "value": "Syrup"
  },
  {
    "label": "Inhailer",
    "value": "Inhailer"
  }
]

export const fundCategoryOptionsConstant = [
  {
    "label": "Staff",
    "value": "Staff"
  },
  {
    "label": "Travel",
    "value": "Travel"
  },
  {
    "label": "Investigations",
    "value": "Investigations"
  },
  {
    "label": "Miscellaneous",
    "value": "Miscellaneous"
  },
  {
    "label": "Lab Expenses",
    "value": "Labexpenses"
  }
]

export const fundSubCategoryOptionsConstant = [
  {
    "label": "Staff Salary",
    "value": "Staff Salary"
  },
  {
    "label": "Bus Travel",
    "value": "Bus Travel"
  },
  {
    "label": "Local Travel Allowance",
    "value": "Local Travel Allowance"
  },
  {
    "label": "Air Fair",
    "value": "Air Fair"
  },
  {
    "label": "Scan Reports",
    "value": "Scan Reports"
  },
  {
    "label": "Blood Reports",
    "value": "Blood Reports"
  },
  {
    "label": "Urine Reports",
    "value": "Urine Reports"
  },
  {
    "label": "Miscellaneous",
    "value": "Miscellaneous"
  },
  {
    "label": "PET Scan Rental",
    "value": "PETScanRental"
  }
]

export const siteEvalOptionsConstant = [
  {
    "label": "Pre-Study Evaluation",
    "value": "Pre-Study Evaluation"
  },
  {
    "label": "Site Initiation",
    "value": "Site Initiation"
  },
  {
    "label": "Interim Monitoring Visit",
    "value": "Interim Monitoring Visit"
  },
  {
    "label": "Close-out report",
    "value": "Close-out report"
  },
  {
    "label":"Site Evaluation",
    "value": "Site Evaluation"
  }
]

export const studyInvolvesOptionsConstant = [
  {"label":"Yes", "value":"Yes"},
  {"label":"No", "value":"No"}
]

export const orgStudyCenterOptionsConstant = [
  {
    "label": "Partner Study Center",
    "value": "Partner Study Center"
  },
  {
    "label": "Green Hill Medical Center, San Antonio, 78202",
    "value": "Green Hill Medical Center, San Antonio, 78202"
  }
]

export const DatePickerGlobalOptions = {
  dateFormat: 'dd-mmm-yyyy'
}
export const recurrenceOptions = [
  {
    "label": "Daily",
    "value": "Daily"
  },
  {
    "label": "Weekly",
    "value": "weekly"
  },
  {
    "label": "Monthly",
    "value": "Monthly"
  },
  {
    "label": "Yearly",
    "value": "Yearly"
  },
]

export const repeatsEveryOptions = [
  {
    "label": "Monday",
    "value": "Monday"
  },
  {
    "label": "Tuesday",
    "value": "Tuesday"
  },
  {
    "label": "Wednesday",
    "value": "Wednesday"
  },
  {
    "label": "Thursday",
    "value": "Thursday"
  },
  {
    "label": "Friday",
    "value": "Friday"
  },
  {
    "label": "Saturday",
    "value": "Saturday"
  },
  {
    "label": "Sunday",
    "value": "Sunday"
  }







]

export const documentTemplateOptionsConstant = [
  {
    "label": "Insurance Statement",
    "value": "Insurance Statement"
  },
  {
    "label": "License Copy",
    "value": "License Copy"
  },
  {
    "label": "Source Document",
    "value": "Source Document"
  },
  {
    "label": "Delegation of Responsibility Log",
    "value": "Delegation of Responsibility Log"
  },
  {
    "label": "Abstract Draft",
    "value": "Abstract Draft"
  },
  {
    "label": "Letter of Authorization",
    "value": "Letter of Authorization"
  }
]

