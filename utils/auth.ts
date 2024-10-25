import {
  COMPANY_POSITIONS,
  DocumentRequirement,
  GOVERNMENT_POSITIONS,
  UNIVERSITY_POSITIONS,
} from "@/types/organization";
import { FormData } from "@/types/registration";

export const getRequiredDocuments = (
  formData: FormData
): DocumentRequirement[] => {
  let positions = [];
  switch (formData.role) {
    case "University":
      positions = UNIVERSITY_POSITIONS;
      break;
    case "Company":
      positions = COMPANY_POSITIONS;
      break;
    case "Government":
      positions = GOVERNMENT_POSITIONS;
      break;
    default:
      return [];
  }

  const position = positions.find((p) => p.id === formData.userPosition);
  return position?.documents || [];
};

export const getPositionTitle = (role: string, positionId: string): string => {
  let positions;
  switch (role) {
    case "University":
      positions = UNIVERSITY_POSITIONS;
      break;
    case "Company":
      positions = COMPANY_POSITIONS;
      break;
    case "Government":
      positions = GOVERNMENT_POSITIONS;
      break;
    default:
      return positionId;
  }

  const position = positions.find((p) => p.id === positionId);
  return position?.title || positionId;
};
