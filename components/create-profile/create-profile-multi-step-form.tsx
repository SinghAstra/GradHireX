"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Building,
  Building2,
  Check,
  ChevronRight,
  CreditCard,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddExperienceForm from "./add-experience-form";
import { AddProject } from "./add-project-form";
import { AddResume } from "./add-resume-form";
import { AddSkills } from "./add-skills-form";

const CreateProfileMultiStepForm = () => {
  const forms = [
    {
      label: "Add Experience",
      description:
        "Adding your experience helps showcase your skills, build credibility, and increase your chances of standing out to potential employers or collaborators. Share details about your past roles, achievements, and responsibilities to give a full picture of your career journey.",
      component: <AddExperienceForm />,
      icon: <UserCircle />,
    },
    {
      label: "Add Skills",
      description:
        "Highlighting your skills is essential for demonstrating your proficiency in key areas. Add relevant skills that reflect your expertise and align with the job roles you're targeting to increase your visibility to potential employers.",
      component: <AddSkills />,
      icon: <Building />,
    },
    {
      label: "Add Projects",
      description:
        "Adding projects allows you to showcase practical examples of your work. Whether it's personal, academic, or professional, showcasing your projects demonstrates your ability to apply your skills and solve real-world problems.",
      component: <AddProject />,
      icon: <Building />,
    },
    {
      label: "Add Resume",
      description:
        "Uploading your resume provides a comprehensive summary of your career. It gives potential employers a clear and structured view of your background, helping you stand out in job applications and networking opportunities.",
      component: <AddResume />,
      icon: <Building />,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(Array(forms.length).fill(0));
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

  const handleFinish = () => {};

  return (
    <div className="w-full overflow-y-auto flex">
      <div className="space-y-12 p-6 max-w-md mx-auto">
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
                {index === activeStep && (
                  <p className={`text-sm mt-1 text-primary`}>
                    {step.description}
                  </p>
                )}
                {index === activeStep && (
                  <div className="my-2 flex gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button aria-label="add">Add</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md max-h-[90vh] flex flex-col p-0">
                        <DialogHeader className="p-6 pb-2">
                          <DialogTitle>{step.label}</DialogTitle>
                        </DialogHeader>
                        <div className="flex-grow overflow-y-auto px-6 pb-6">
                          {step.component}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      onClick={
                        index === forms.length - 1 ? handleFinish : handleNext
                      }
                      aria-label="next/finish"
                    >
                      {index === forms.length - 1 ? "Finish" : "Skip"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateProfileMultiStepForm;
