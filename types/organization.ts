export type Position = {
  id: string;
  title: string;
  documents: DocumentRequirement[];
};

export type DocumentRequirement = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};

export const UNIVERSITY_POSITIONS: Position[] = [
  {
    id: "dean",
    title: "Dean",
    documents: [
      {
        id: "appointment_letter",
        name: "Official Appointment Letter",
        description:
          "University-issued appointment letter with dean position confirmation",
        required: true,
      },
      {
        id: "university_id",
        name: "University ID Card",
        description: "Valid university identification card",
        required: true,
      },
      {
        id: "credentials",
        name: "Academic Credentials",
        description: "Proof of academic qualifications",
        required: true,
      },
    ],
  },
  {
    id: "department_head",
    title: "Department Head",
    documents: [
      {
        id: "appointment_letter",
        name: "Department Head Appointment Letter",
        description: "Official letter confirming department head position",
        required: true,
      },
      {
        id: "university_id",
        name: "University ID Card",
        description: "Valid university identification card",
        required: true,
      },
    ],
  },
  {
    id: "professor",
    title: "Professor",
    documents: [
      {
        id: "employment_contract",
        name: "Employment Contract",
        description: "Current employment contract with the university",
        required: true,
      },
      {
        id: "university_id",
        name: "University ID Card",
        description: "Valid university identification card",
        required: true,
      },
    ],
  },
];

export const COMPANY_POSITIONS: Position[] = [
  {
    id: "ceo",
    title: "CEO",
    documents: [
      {
        id: "company_registration",
        name: "Company Registration Certificate",
        description: "Official company registration document",
        required: true,
      },
      {
        id: "appointment_letter",
        name: "Board Appointment Letter",
        description: "Board resolution or appointment letter for CEO position",
        required: true,
      },
      {
        id: "business_license",
        name: "Business License",
        description: "Valid business operation license",
        required: true,
      },
    ],
  },
  {
    id: "director",
    title: "Director",
    documents: [
      {
        id: "appointment_letter",
        name: "Director Appointment Letter",
        description: "Official appointment letter for director position",
        required: true,
      },
      {
        id: "company_id",
        name: "Company ID",
        description: "Valid company identification card",
        required: true,
      },
    ],
  },
  {
    id: "manager",
    title: "Manager",
    documents: [
      {
        id: "employment_letter",
        name: "Employment Verification Letter",
        description: "Current employment verification letter",
        required: true,
      },
      {
        id: "company_id",
        name: "Company ID",
        description: "Valid company identification card",
        required: true,
      },
    ],
  },
];

export const GOVERNMENT_POSITIONS: Position[] = [
  {
    id: "senior_official",
    title: "Senior Official",
    documents: [
      {
        id: "appointment_letter",
        name: "Official Appointment Letter",
        description: "Government-issued appointment letter",
        required: true,
      },
      {
        id: "gov_id",
        name: "Government ID",
        description: "Valid government employee identification",
        required: true,
      },
      {
        id: "authorization",
        name: "Department Authorization",
        description: "Department-specific authorization letter",
        required: true,
      },
    ],
  },
  {
    id: "department_head",
    title: "Department Head",
    documents: [
      {
        id: "appointment_letter",
        name: "Department Head Appointment",
        description: "Official department head appointment document",
        required: true,
      },
      {
        id: "gov_id",
        name: "Government ID",
        description: "Valid government employee identification",
        required: true,
      },
    ],
  },
  {
    id: "staff",
    title: "Staff Member",
    documents: [
      {
        id: "employment_letter",
        name: "Employment Letter",
        description: "Current employment verification letter",
        required: true,
      },
      {
        id: "gov_id",
        name: "Government ID",
        description: "Valid government employee identification",
        required: true,
      },
    ],
  },
];
