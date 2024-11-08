"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Building2,
  Check,
  ChevronRight,
  CreditCard,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AddExperienceForm from "./add-experience-form";
import { AddResume } from "./add-resume-form";
import { AddSkills } from "./add-skills-form";

const VerticalLinearStepper = () => {
  const forms = [
    {
      label: "Personal Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
      icon: <UserCircle className="w-5 h-5" />,
    },
    {
      label: "Company Information",
      description: "Enter your professional details",
      component: <AddSkills />,
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      label: "Subscription",
      description: "Choose your plan",
      component: <AddResume />,
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      label: "Personal Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
      icon: <UserCircle className="w-5 h-5" />,
    },
    {
      label: "Company Information",
      description: "Enter your professional details",
      component: <AddSkills />,
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      label: "Subscription",
      description: "Choose your plan",
      component: <AddResume />,
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      label: "Personal Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
      icon: <UserCircle className="w-5 h-5" />,
    },
    {
      label: "Company Information",
      description: "Enter your professional details",
      component: <AddSkills />,
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      label: "Subscription",
      description: "Choose your plan",
      component: <AddResume />,
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(Array(forms.length).fill(0));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    updateLineProgress(activeStep);
  };

  const handleBack = () => {
    setLineProgress((prev) => {
      const newProgress = [...prev];
      newProgress[activeStep - 1] = 0;
      return newProgress;
    });
    setActiveStep((prev) => prev - 1);
  };

  const updateLineProgress = (step: number) => {
    const timer = setInterval(() => {
      setLineProgress((prev) => {
        const newProgress = [...prev];
        if (newProgress[step] < 100) {
          newProgress[step] = Math.min(newProgress[step] + 2, 100);
          return newProgress;
        } else {
          clearInterval(timer);
          return newProgress;
        }
      });
    }, 20);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex">
      {/* Left sidebar */}
      <div className="w-1/3 border-r bg-[#19181d] h-full flex flex-col overflow-y-auto">
        {/* Logo header */}
        <div className="sticky top-0 backdrop-blur-lg bg-[#171717]/50 z-50">
          <div className="flex items-center gap-2 p-4">
            <Image
              src={"/assets/images/favicon.ico"}
              alt={`${siteConfig.name} logo`}
              width={30}
              height={30}
              className="rounded"
              priority
            />
            <h3 className="text-xl font-bold text-white">
              <span className="text-primary">{siteConfig.name}</span>
            </h3>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12 p-6">
          {forms.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < forms.length - 1 && (
                <div className="absolute left-6 top-[60px] w-0.5 h-8">
                  <div className="h-full bg-gray-600" />
                  <div
                    className="absolute top-0 left-0 w-full bg-primary transition-all duration-500"
                    style={{
                      height: `${lineProgress[index]}%`,
                    }}
                  />
                </div>
              )}

              {/* Step item */}
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  {index < activeStep ? (
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  ) : index === activeStep ? (
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 animate-bounce">
                      {step.icon}
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                  )}
                </div>

                <div className="flex-1 pt-1.5">
                  <h3
                    className={`text-sm font-medium ${
                      index === activeStep ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      index === activeStep ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="w-2/3 flex-1 flex flex-col ">
        <div className="flex-1 overflow-y-auto p-8 bg-[#1b1c20]">
          <div className="max-w-3xl mx-auto">{forms[activeStep].component}</div>
        </div>
      </div>
    </div>
  );
};

export default VerticalLinearStepper;
