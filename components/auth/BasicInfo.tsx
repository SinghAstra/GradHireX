import { StageProps } from "@/types/registration";
import { Building2, GraduationCap, Scale, University } from "lucide-react";
import React from "react";
import { HorizontalAnimationContainer } from "../global/animation-container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const roles = [
  { organization: "Student", icon: <GraduationCap /> },
  { organization: "University", icon: <University /> },
  { organization: "Company", icon: <Building2 /> },
  { organization: "Government", icon: <Scale /> },
];

export function BasicInfo({
  formData,
  errors,
  handleInputChange,
  handleRoleChange,
}: StageProps) {
  return (
    <div className="space-y-4">
      <Input
        id="name"
        name="name"
        errorMessage={errors.name}
        label="Name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        errorMessage={errors.email}
        placeholder="projectmayhem@fc.com"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        errorMessage={errors.password}
        required
        value={formData.password}
        placeholder="••••••••"
        onChange={handleInputChange}
      />
      <HorizontalAnimationContainer className="m-4">
        <RadioGroup
          defaultValue={formData.role}
          onValueChange={handleRoleChange}
          className="grid grid-cols-2"
        >
          {roles.map((role) => (
            <div key={role.organization} className="flex items-center relative">
              <RadioGroupItem
                value={role.organization}
                id={role.organization}
                className={`peer sr-only ${
                  errors.role ? "border-red-500" : "border-gray-300"
                }`}
              />
              <Label
                htmlFor={role.organization}
                className={`flex flex-col items-center justify-center w-full p-4 space-y-2 border rounded-lg cursor-pointer peer-data-[state=checked]:text-blue-500 peer-data-[state=checked]:border-blue-600 bg-black hover:bg-neutral-900 ${
                  errors.role
                    ? "text-red-500 border-red-400"
                    : "text-white border-gray-700"
                }`}
              >
                {role.icon}
                <span>{role.organization}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </HorizontalAnimationContainer>
    </div>
  );
}
