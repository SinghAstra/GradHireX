"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Check, ChevronRight, HelpCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddExperienceForm from "./add-experience-form";
import { AddProject } from "./add-project-form";
import { AddResume } from "./add-resume-form";
import { AddSkills } from "./add-skills-form";

const VerticalLinearStepper = () => {
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
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(Array(forms.length).fill(0));

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (activeStep > 0) {
      const newProgress = [...lineProgress];
      newProgress[activeStep - 1] = 0;
      setLineProgress(newProgress);

      const timer = setInterval(() => {
        setLineProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[activeStep - 1] < 100) {
            newProgress[activeStep - 1] += 2;
          }
          return newProgress;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [activeStep]);

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
        </div>

        {/* Stepper content */}
        <div className="relative z-10 h-full bg-[#171717]">
          {/* All content in single scrollable container */}
          <div className="h-full overflow-y-auto">
            {/* Sticky header with backdrop blur */}
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

            <div className="space-y-12 p-8">
              {forms.map((step, index) => (
                <div key={step.label} className="relative">
                  {index < forms.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24">
                      <div className="h-full bg-gray-600" />
                      <div
                        className="absolute top-0 left-0 w-full bg-primary transition-all duration-500"
                        style={{
                          height: `${lineProgress[index]}%`,
                        }}
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-6">
                    <div className="relative">
                      {index < activeStep ? (
                        // Completed step
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-primary/20">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      ) : index === activeStep ? (
                        // Current step
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-primary/20 animate-bounce">
                          <span className="text-white font-semibold">
                            {index + 1}
                          </span>
                        </div>
                      ) : (
                        // Future step
                        <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
                          <span className="text-gray-400 font-semibold">
                            {index + 1}
                          </span>
                        </div>
                      )}
                    </div>

                    <div
                      className={`text-white pt-2 ${
                        index === activeStep ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <h3 className="font-medium text-lg">{step.label}</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-2/3 p-6 overflow-y-auto">
        {/* <Card className="h-full overflow-y-auto"> */}
        {/* <CardContent className="p-6"> */}
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
        {/* </CardContent> */}
        {/* </Card> */}
      </div>
    </div>
  );
};

export default VerticalLinearStepper;
