export interface FormData {
  email: string;
  password: string;
  name: string;
  role: string;
  universityName: string;
  studentId: string;
  fieldOfStudy: string;
  organizationName: string;
  organizationWebsite: string;
  userPosition: string;
  document: File | null;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  universityName?: string;
  studentId?: string;
  fieldOfStudy?: string;
  organizationName?: string;
  organizationWebsite?: string;
  userPosition?: string;
  document?: string;
}

export interface StageProps {
  formData: FormData;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
