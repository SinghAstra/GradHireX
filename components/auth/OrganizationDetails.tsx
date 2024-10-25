import {
  COMPANY_POSITIONS,
  GOVERNMENT_POSITIONS,
  UNIVERSITY_POSITIONS,
} from "@/types/organization";
import { FormErrors, StageProps } from "@/types/registration";
import React from "react";
import { HorizontalAnimationContainer } from "../global/animation-container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function OrganizationDetails({
  formData,
  errors,
  setErrors,
  handleInputChange,
}: StageProps) {
  const handleSelectChange = (value: string) => {
    handleInputChange({
      target: { name: "userPosition", value },
    } as React.ChangeEvent<HTMLInputElement>);

    setErrors((prev: FormErrors) => ({
      ...prev,
      userPosition: "",
    }));
  };

  const getPositionOptions = () => {
    switch (formData.role) {
      case "University":
        return UNIVERSITY_POSITIONS;
      case "Company":
        return COMPANY_POSITIONS;
      case "Government":
        return GOVERNMENT_POSITIONS;
      default:
        return [];
    }
  };

  return (
    <div className="space-y-4">
      <Input
        id="organizationName"
        name="organizationName"
        label="Organization Name"
        placeholder="Enter your organization name"
        required
        value={formData.organizationName}
        onChange={handleInputChange}
        errorMessage={errors.organizationName}
      />

      <Input
        id="organizationWebsite"
        name="organizationWebsite"
        type="url"
        label="Organization Website"
        placeholder="https://example.com"
        required
        value={formData.organizationWebsite}
        onChange={handleInputChange}
        errorMessage={errors.organizationWebsite}
      />

      <HorizontalAnimationContainer>
        <div className="space-y-1">
          <Label htmlFor="fieldOfStudy" errorMessage={errors.userPosition}>
            Your Position
          </Label>
          <Select
            name="userPosition"
            value={formData.userPosition}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger errorMessage={errors.userPosition}>
              <SelectValue placeholder="Select your position" />
            </SelectTrigger>
            <SelectContent>
              {getPositionOptions().map((position) => (
                <SelectItem key={position.id} value={position.id}>
                  {position.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </HorizontalAnimationContainer>
    </div>
  );
}
