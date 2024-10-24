import { StageProps } from "@/types/registration";
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
  handleInputChange,
}: StageProps) {
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
      <div className="space-y-2">
        <Label htmlFor="fieldOfStudy">Field of Study</Label>
        <Select
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onValueChange={(value) =>
            handleInputChange({
              target: { name: "fieldOfStudy", value },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          <SelectTrigger>
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
    </div>
  );
}
