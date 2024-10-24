import { StageProps } from "@/types/registration";
import React from "react";
import { Input } from "../ui/input";

export function OrganizationDetails({
  formData,
  errors,
  handleInputChange,
}: StageProps) {
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

      <Input
        id="userPosition"
        name="userPosition"
        placeholder="e.g., Manager, Director, etc."
        label="Your Position/Title"
        type="text"
        required
        value={formData.userPosition}
        onChange={handleInputChange}
        errorMessage={errors.userPosition}
      />
    </div>
  );
}
