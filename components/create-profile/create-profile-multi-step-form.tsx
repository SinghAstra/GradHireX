"use client";

// import { validateUserBoarding } from "@/actions/user.profile.actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as React from "react";
import AddExperienceForm from "./add-experience-form";
import { AddProject } from "./add-project-form";
import { AddResume } from "./add-resume-form";
import { AddSkills } from "./add-skills-form";

const forms = [
  {
    label: "Add Experience",
    description:
      "Adding your experience helps showcase your skills, build credibility, and increase your chances of standing out to potential employers or collaborators.",
    component: AddExperienceForm,
  },
  {
    label: "Add Skills",
    description:
      "Highlighting your skills is essential for demonstrating your proficiency in key areas.",
    component: AddSkills,
  },
  {
    label: "Add Projects",
    description:
      "Adding projects allows you to showcase practical examples of your work.",
    component: AddProject,
  },
  {
    label: "Add Resume",
    description:
      "Uploading your resume provides a comprehensive summary of your career.",
    component: AddResume,
  },
];

const MultiStepForm = () => {
  const [step, setStep] = React.useState(0);
  const router = useRouter();
  const { toast } = useToast();
  const { data: session, update } = useSession();

  const handleNext = () => {
    if (step < forms.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = async () => {
    try {
      // const response = await validateUserBoarding();
      // if (!response.status) {
      //   return toast({
      //     title: response.message || "Error",
      //     variant: "destructive",
      //   });
      // }
      // toast({
      //   title: response.message,
      //   variant: "success",
      // });
      // await update({
      //   ...session,
      //   user: {
      //     onBoard: true,
      //   },
      // });
      // router.refresh();
      toast({
        title: "Something went wrong!! Please Try Again Later.",
        description: "Internal server error",
        variant: "destructive",
      });
    } catch (_error) {
      toast({
        title: "Something went wrong!! Please Try Again Later.",
        description: "Internal server error",
        variant: "destructive",
      });
    }
  };

  const CurrentForm = forms[step].component;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Complete Your Profile</CardTitle>
        <CardDescription>
          Fill out the following steps to set up your profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-8">
          {forms.map((form, index) => (
            <div key={form.label} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                  step > index
                    ? "bg-green-500"
                    : step === index
                    ? "bg-blue-500"
                    : "bg-gray-300"
                )}
              >
                {step > index ? <Check className="w-6 h-6" /> : index + 1}
              </div>
              <span className="text-sm mt-2">{form.label}</span>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-2">{forms[step].label}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {forms[step].description}
        </p>
        <CurrentForm />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleBack} disabled={step === 0} variant="outline">
          Back
        </Button>
        {step < forms.length - 1 ? (
          <Button onClick={handleNext}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleFinish}>Finish</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MultiStepForm;
