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

import {
  HorizontalAnimationContainer,
  VerticalAnimationContainer,
} from "@/components/global/animation-container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  Building2,
  CircleArrowLeft,
  GraduationCap,
  Scale,
  University,
} from "lucide-react";
import Link from "next/link";

const roles = [
  { organization: "Student", icon: <GraduationCap /> },
  { organization: "University", icon: <University /> },
  { organization: "Company", icon: <Building2 /> },
  { organization: "Government", icon: <Scale /> },
];
const fields = ["Computer Science", "Engineering", "Business", "Arts", "Other"];

interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
  universityName: string;
  studentId: string;
  fieldOfStudy: string;
  organizationName: string;
  organizationWebsite: string;
  userPosition: string;
  document: File | null;
}

interface FormErrors {
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
  document?: File | null;
}

const MultiStageRegistration = () => {
  const [stage, setStage] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
    if (errors.role) {
      setErrors((prev) => ({ ...prev, role: undefined }));
    }
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

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Add Validation For Organization and Password

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStage(5); // Move to confirmation stage
  };

  console.log("formData.role is ", formData.role);

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
                <div className="m-4">
                  <RadioGroup
                    name="role"
                    value={formData.role}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, role: value }))
                    }
                    className="grid grid-cols-2"
                  >
                    {roles.map((role) => (
                      <div
                        key={role.organization}
                        className="flex items-center relative"
                      >
                        <input
                          type="radio"
                          name="organization"
                          value={role.organization}
                          id={role.organization}
                          className="peer absolute top-2 left-2 h-4 w-4 checked:bg-blue-500 checked:border-blue-500 focus:outline-none appearance-none border border-gray-300 rounded-full"
                        />
                        <Label
                          htmlFor={role.organization}
                          className="flex flex-col items-center justify-center w-full p-4 space-y-2 border rounded-lg cursor-pointer border-gray-700 peer-checked:text-blue-500 peer-checked:border-blue-600  text-white bg-black hover:bg-neutral-900"
                        >
                          {role.icon}
                          <span>{role.organization}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
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
        <VerticalAnimationContainer>
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
          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Log in
            </Link>
          </p>
        </VerticalAnimationContainer>
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
