"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

import { HorizontalAnimationContainer } from "@/components/global/animation-container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const roles = ["Student", "University", "Company", "Government"];
const fields = ["Computer Science", "Engineering", "Business", "Arts", "Other"];

interface FormData {
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

const MultiStageRegistration = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    role: "",
    universityName: "",
    studentId: "",
    fieldOfStudy: "",
    organizationName: "",
    organizationWebsite: "",
    userPosition: "",
    document: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      document: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleNext = () => {
    setStage((prev) => prev + 1);
  };

  const handleBack = () => {
    setStage((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStage(5); // Move to confirmation stage
  };

  return (
    <BackgroundGradient containerClassName="max-w-md mx-auto mt-10 ">
      <div className="bg-black p-8 rounded-none md:rounded-lg overflow-hidden">
        <HorizontalAnimationContainer reverse={true}>
          <h2 className="font-medium text-xl text-neutral-200 flex gap-2 items-center">
            {stage > 1 && stage < 5 ? (
              <span
                onClick={handleBack}
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <CircleArrowLeft />
              </span>
            ) : (
              "Welcome to "
            )}
            <Link href="/" className="text-blue-500 cursor-pointer">
              {siteConfig.name}
            </Link>
          </h2>
        </HorizontalAnimationContainer>

        <form className="my-8" onSubmit={handleSubmit}>
          <HorizontalAnimationContainer>
            {stage === 1 && (
              <div className="space-y-4">
                <Input
                  id="name"
                  name="name"
                  className="peer"
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
                  required
                  value={formData.password}
                  placeholder="••••••••"
                  onChange={handleInputChange}
                />
                <LabelInputContainer>
                  <Label>Role</Label>
                  <RadioGroup
                    name="role"
                    value={formData.role}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, role: value }))
                    }
                  >
                    {roles.map((role) => (
                      <div key={role} className="flex items-center space-x-2">
                        <RadioGroupItem value={role} id={role} />
                        <Label htmlFor={role}>{role}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </LabelInputContainer>
              </div>
            )}

            {stage === 2 && (
              <div className="space-y-4">
                {formData.role === "Student" ? (
                  <>
                    <LabelInputContainer>
                      <Label htmlFor="universityName">University Name</Label>
                      <Input
                        id="universityName"
                        name="universityName"
                        required
                        value={formData.universityName}
                        onChange={handleInputChange}
                      />
                    </LabelInputContainer>
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        required
                        value={formData.studentId}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study</Label>
                      <Select
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            fieldOfStudy: value,
                          }))
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
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="organizationName">
                        Organization Name
                      </Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizationWebsite">
                        Organization Website
                      </Label>
                      <Input
                        id="organizationWebsite"
                        name="organizationWebsite"
                        type="url"
                        required
                        value={formData.organizationWebsite}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="userPosition">Your Position/Title</Label>
                      <Input
                        id="userPosition"
                        name="userPosition"
                        required
                        value={formData.userPosition}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {stage === 3 && formData.role !== "Student" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="document">Upload Document</Label>
                  <Input
                    id="document"
                    name="document"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.role === "University" &&
                      "Please upload your accreditation certificate."}
                    {formData.role === "Company" &&
                      "Please upload your business registration certificate."}
                    {formData.role === "Government" &&
                      "Please upload your official department ID or authorization letter."}
                  </p>
                </div>
              </div>
            )}

            {stage === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Review Your Information
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {formData.role}
                  </p>
                  {formData.role === "Student" && (
                    <>
                      <p>
                        <strong>University:</strong> {formData.universityName}
                      </p>
                      <p>
                        <strong>Student ID:</strong> {formData.studentId}
                      </p>
                      <p>
                        <strong>Field of Study:</strong> {formData.fieldOfStudy}
                      </p>
                    </>
                  )}
                  {formData.role !== "Student" && (
                    <>
                      <p>
                        <strong>Organization:</strong>{" "}
                        {formData.organizationName}
                      </p>
                      <p>
                        <strong>Website:</strong> {formData.organizationWebsite}
                      </p>
                      <p>
                        <strong>Position:</strong> {formData.userPosition}
                      </p>
                    </>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="terms">Terms and Conditions</Label>
                  <Textarea
                    id="terms"
                    readOnly
                    value="By submitting this form, you agree to our terms and conditions..."
                  />
                </div>
              </div>
            )}

            {stage === 5 && (
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold">
                  Thank You for Registering!
                </h3>
                <p>Your registration has been submitted successfully.</p>
                <p>
                  Our team will review your information and verify your account.
                </p>
                <p>
                  You will receive an email once your account has been approved.
                </p>
              </div>
            )}
          </HorizontalAnimationContainer>
        </form>
        {stage < 4 && (
          <Button type="button" onClick={handleNext} className="w-full">
            Next
          </Button>
        )}
        {stage === 4 && (
          <Button type="submit" onClick={handleSubmit} className="ml-auto">
            Submit
          </Button>
        )}
      </div>
    </BackgroundGradient>
  );
};

export default MultiStageRegistration;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full ", className)}>
      {children}
    </div>
  );
};
