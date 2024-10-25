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

const fields = ["Computer Science", "Engineering", "Business", "Arts", "Other"];

export function StudentDetails({
  formData,
  errors,
  setErrors,
  handleInputChange,
}: StageProps) {
  const handleSelectChange = (value: string) => {
    handleInputChange({
      target: { name: "fieldOfStudy", value },
    } as React.ChangeEvent<HTMLInputElement>);

    setErrors((prev: FormErrors) => ({
      ...prev,
      fieldOfStudy: "",
    }));
  };

  return (
    <div className="space-y-4">
      <Input
        id="universityName"
        name="universityName"
        label="University Name"
        required
        value={formData.universityName}
        onChange={handleInputChange}
        errorMessage={errors.universityName}
      />
      <Input
        id="studentId"
        name="studentId"
        label="Student ID"
        required
        value={formData.studentId}
        onChange={handleInputChange}
        errorMessage={errors.studentId}
      />
      <HorizontalAnimationContainer>
        <div className="space-y-1">
          <Label htmlFor="fieldOfStudy" errorMessage={errors.fieldOfStudy}>
            Field of Study
          </Label>
          <Select
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger errorMessage={errors.fieldOfStudy}>
              <SelectValue placeholder="Select field of study" />
            </SelectTrigger>
            <SelectContent>
              {fields.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </HorizontalAnimationContainer>
    </div>
  );
}
