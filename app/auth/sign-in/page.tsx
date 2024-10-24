"use client";
import { BasicInfo } from "@/components/auth/BasicInfo";
import { DocumentUpload } from "@/components/auth/DocumentUpload";
import { OrganizationDetails } from "@/components/auth/OrganizationDetails";
import { ReviewStage } from "@/components/auth/ReviewStage";
import { StudentDetails } from "@/components/auth/StudentDetails";
import { SuccessStage } from "@/components/auth/SucessStage";
import {
  HorizontalAnimationContainer,
  VerticalAnimationContainer,
} from "@/components/global/animation-container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FormData, FormErrors } from "@/types/registration";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const initialFormData: FormData = {
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
};

const RegistrationForm = () => {
  const [stage, setStage] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>(initialFormData);

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
    if (formData.role === "Student" && stage === 2) {
      setStage(4);
    } else {
      setStage((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (formData.role === "Student" && stage === 4) {
      setStage(2);
    } else {
      setStage((prev) => prev - 1);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.role) newErrors.role = "Please select a role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setStage(5);
    }
  };

  const renderStage = () => {
    const props = {
      formData,
      errors,
      handleInputChange,
      handleRoleChange,
      handleFileChange,
    };

    switch (stage) {
      case 1:
        return <BasicInfo {...props} />;
      case 2:
        return formData.role === "Student" ? (
          <StudentDetails {...props} />
        ) : (
          <OrganizationDetails {...props} />
        );
      case 3:
        return formData.role !== "Student" ? (
          <DocumentUpload {...props} />
        ) : null;
      case 4:
        return <ReviewStage formData={formData} />;
      case 5:
        return <SuccessStage />;
      default:
        return null;
    }
  };

  const isLastStage =
    (formData.role === "Student" && stage === 4) ||
    (formData.role !== "Student" && stage === 4);

  return (
    <BackgroundGradient containerClassName="max-w-md mx-auto mt-10">
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
            {renderStage()}
          </HorizontalAnimationContainer>
        </form>

        <VerticalAnimationContainer>
          {!isLastStage && stage < 5 && (
            <Button type="button" onClick={handleNext} className="w-full">
              Next
            </Button>
          )}
          {isLastStage && (
            <Button type="submit" onClick={handleSubmit} className="w-full">
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

export default RegistrationForm;
