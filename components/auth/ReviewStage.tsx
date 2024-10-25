import {
  COMPANY_POSITIONS,
  GOVERNMENT_POSITIONS,
  UNIVERSITY_POSITIONS,
} from "@/types/organization";
import { FormData } from "@/types/registration";
import {
  Briefcase,
  Building2,
  FileCheck,
  Globe,
  GraduationCap,
  Mail,
  User,
} from "lucide-react";
import React from "react";
import { HorizontalAnimationContainer } from "../global/animation-container";

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-neutral-900 rounded-lg">
      <div className="text-neutral-400">{icon}</div>
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="text-sm text-neutral-200">{value}</p>
      </div>
    </div>
  );
}

const getPositionTitle = (role: string, positionId: string): string => {
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

export function ReviewStage({ formData }: { formData: FormData }) {
  const positionTitle = getPositionTitle(formData.role, formData.userPosition);

  return (
    <div className="space-y-4">
      <HorizontalAnimationContainer reverse={true}>
        <h3 className="text-lg font-medium text-center text-gray-200 mb-6">
          Review Your Information
        </h3>
      </HorizontalAnimationContainer>

      <HorizontalAnimationContainer className="space-y-3">
        <InfoItem
          icon={<User size={20} />}
          label="Name"
          value={formData.name}
        />
        <InfoItem
          icon={<Mail size={20} />}
          label="Email"
          value={formData.email}
        />
        {formData.role === "Student" ? (
          <>
            <InfoItem
              icon={<GraduationCap size={20} />}
              label="University"
              value={formData.universityName}
            />
            <InfoItem
              icon={<FileCheck size={20} />}
              label="Student ID"
              value={formData.studentId}
            />
            <InfoItem
              icon={<Briefcase size={20} />}
              label="Field of Study"
              value={formData.fieldOfStudy}
            />
          </>
        ) : (
          <>
            <InfoItem
              icon={<Building2 size={20} />}
              label="Organization"
              value={formData.organizationName}
            />
            <InfoItem
              icon={<Globe size={20} />}
              label="Website"
              value={formData.organizationWebsite}
            />
            <InfoItem
              icon={<Briefcase size={20} />}
              label="Position"
              value={positionTitle}
            />
          </>
        )}
      </HorizontalAnimationContainer>
    </div>
  );
}

export default ReviewStage;
