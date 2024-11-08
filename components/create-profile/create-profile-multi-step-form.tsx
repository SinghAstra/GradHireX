"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Check, ChevronRight, HelpCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AddExperienceForm from "./add-experience-form";
import { AddProject } from "./add-project-form";
import { AddResume } from "./add-resume-form";
import { AddSkills } from "./add-skills-form";

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const forms = [
    {
      label: "Basic Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
    },
    {
      label: "Company Details",
      description: "Enter your company information",
      component: <AddSkills />,
    },
    {
      label: "Subscription Plan",
      description: "Choose your subscription plan",
      component: <AddResume />,
    },
    {
      label: "Payment Details",
      description: "Complete your payment information",
      component: <AddProject />,
    },
    {
      label: "Basic Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
    },
    {
      label: "Company Details",
      description: "Enter your company information",
      component: <AddSkills />,
    },
    {
      label: "Subscription Plan",
      description: "Choose your subscription plan",
      component: <AddResume />,
    },
    {
      label: "Payment Details",
      description: "Complete your payment information",
      component: <AddProject />,
    },
    {
      label: "Basic Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
    },
    {
      label: "Company Details",
      description: "Enter your company information",
      component: <AddSkills />,
    },
    {
      label: "Subscription Plan",
      description: "Choose your subscription plan",
      component: <AddResume />,
    },
    {
      label: "Payment Details",
      description: "Complete your payment information",
      component: <AddProject />,
    },
    {
      label: "Basic Details",
      description: "Fill in your basic information",
      component: <AddExperienceForm />,
    },
    {
      label: "Company Details",
      description: "Enter your company information",
      component: <AddSkills />,
    },
    {
      label: "Subscription Plan",
      description: "Choose your subscription plan",
      component: <AddResume />,
    },
    {
      label: "Payment Details",
      description: "Complete your payment information",
      component: <AddProject />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Left side with stepper and background image */}
      <div className="w-1/3 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/images/bg-form.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Stepper content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Logo - Fixed at top, full width */}
            <div className="sticky top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10">
              <div className="flex items-center gap-2 p-4 w-full">
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

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Steps */}
              <div className="space-y-6 p-4">
                {forms.map((step, index) => (
                  <div key={step.label} className="relative">
                    {/* Connector Line */}
                    {index < forms.length - 1 && (
                      <div className="absolute left-5 top-8 w-0.5 h-16 bg-gray-300" />
                    )}

                    {/* Step Content */}
                    <div className="flex items-center gap-4">
                      {/* Status Circle */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index < activeStep
                            ? "bg-green-500"
                            : index === activeStep
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } text-white`}
                      >
                        {index < activeStep ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>

                      {/* Step Label */}
                      <div className="text-white">
                        <h3 className="font-medium">{step.label}</h3>
                        <p className="text-sm text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Help Link */}
              <div className="p-4">
                <Button variant="ghost" className="text-white">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Having Problems?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-2/3">
        <Card className="h-full">
          <CardContent className="p-6">
            {/* Active Form */}
            {forms[activeStep].component}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handleBack}
                disabled={activeStep === 0}
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={activeStep === forms.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerticalLinearStepper;
