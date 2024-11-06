"use client";

import SlideInAnimation from "@/components/animation/SlideInAnimation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

const steps = [
  { number: 1, title: "YOUR INFO" },
  { number: 2, title: "SELECT PLAN" },
  { number: 3, title: "ADD-ONS" },
  { number: 4, title: "SUMMARY" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  billing: "monthly" | "yearly";
  addons: string[];
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "monthly",
    addons: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }));
  };

  const handleBillingChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      billing: checked ? "yearly" : "monthly",
    }));
  };

  const handleAddonChange = (addon: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      addons: checked
        ? [...prev.addons, addon]
        : prev.addons.filter((item) => item !== addon),
    }));
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="sm:w-1/3">
              <div className="flex sm:flex-col gap-4 sm:gap-8 justify-center sm:justify-start">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center gap-4">
                    <SlideInAnimation direction="right" delay={index * 0.2}>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold",
                          currentStep === step.number
                            ? "bg-blue-200 border-blue-500 text-blue-800"
                            : "border-gray-300 text-gray-500"
                        )}
                      >
                        {step.number}
                      </div>
                    </SlideInAnimation>
                    <div className="hidden sm:block">
                      <SlideInAnimation direction="left" delay={index * 0.2}>
                        <p className="text-xs text-gray-500">
                          STEP {step.number}
                        </p>
                        <p className="font-bold text-sm text-gray-700">
                          {step.title}
                        </p>
                      </SlideInAnimation>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <SlideInAnimation>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Personal Info
                    </CardTitle>
                    <CardDescription>
                      Please provide your name, email address, and phone number.
                    </CardDescription>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g. Stephen King"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Select your plan
                    </CardTitle>
                    <CardDescription>
                      You have the option of monthly or yearly billing.
                    </CardDescription>
                    <RadioGroup
                      onValueChange={handlePlanChange}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem
                          value="arcade"
                          id="arcade"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="arcade"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 mb-3"
                          >
                            <rect width="20" height="12" x="2" y="6" rx="2" />
                            <path d="M12 12h.01" />
                            <path d="M7 12h.01" />
                            <path d="M17 12h.01" />
                          </svg>
                          Arcade
                          <span className="mt-1 text-sm text-muted-foreground">
                            {formData.billing === "monthly"
                              ? "$9/mo"
                              : "$90/yr"}
                          </span>
                          {formData.billing === "yearly" && (
                            <span className="mt-1 text-xs text-primary">
                              2 months free
                            </span>
                          )}
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="advanced"
                          id="advanced"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="advanced"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 mb-3"
                          >
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                          </svg>
                          Advanced
                          <span className="mt-1 text-sm text-muted-foreground">
                            {formData.billing === "monthly"
                              ? "$12/mo"
                              : "$120/yr"}
                          </span>
                          {formData.billing === "yearly" && (
                            <span className="mt-1 text-xs text-primary">
                              2 months free
                            </span>
                          )}
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="pro"
                          id="pro"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="pro"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 mb-3"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.29 7 12 12 20.71 7" />
                            <line x1="12" x2="12" y1="22" y2="12" />
                          </svg>
                          Pro
                          <span className="mt-1 text-sm text-muted-foreground">
                            {formData.billing === "monthly"
                              ? "$15/mo"
                              : "$150/yr"}
                          </span>
                          {formData.billing === "yearly" && (
                            <span className="mt-1 text-xs text-primary">
                              2 months free
                            </span>
                          )}
                        </Label>
                      </div>
                    </RadioGroup>
                    <div className="flex items-center justify-center space-x-2 mt-6">
                      <span
                        className={
                          formData.billing === "monthly" ? "font-bold" : ""
                        }
                      >
                        Monthly
                      </span>
                      <Switch
                        checked={formData.billing === "yearly"}
                        onCheckedChange={handleBillingChange}
                      />
                      <span
                        className={
                          formData.billing === "yearly" ? "font-bold" : ""
                        }
                      >
                        Yearly
                      </span>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Pick add-ons
                    </CardTitle>
                    <CardDescription>
                      Add-ons help enhance your gaming experience.
                    </CardDescription>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="online-service"
                          checked={formData.addons.includes("online-service")}
                          onCheckedChange={(checked) =>
                            handleAddonChange(
                              "online-service",
                              checked as boolean
                            )
                          }
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="online-service"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Online service
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Access to multiplayer games
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {formData.billing === "monthly"
                            ? "+$1/mo"
                            : "+$10/yr"}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="larger-storage"
                          checked={formData.addons.includes("larger-storage")}
                          onCheckedChange={(checked) =>
                            handleAddonChange(
                              "larger-storage",
                              checked as boolean
                            )
                          }
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="larger-storage"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Larger storage
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Extra 1TB of cloud save
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {formData.billing === "monthly"
                            ? "+$2/mo"
                            : "+$20/yr"}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="customizable-profile"
                          checked={formData.addons.includes(
                            "customizable-profile"
                          )}
                          onCheckedChange={(checked) =>
                            handleAddonChange(
                              "customizable-profile",
                              checked as boolean
                            )
                          }
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="customizable-profile"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Customizable Profile
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Custom theme on your profile
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {formData.billing === "monthly"
                            ? "+$2/mo"
                            : "+$20/yr"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Finishing up
                    </CardTitle>
                    <CardDescription>
                      Double-check everything looks OK before confirming.
                    </CardDescription>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="font-semibold">
                            {formData.plan} ({formData.billing})
                          </p>
                          <Button
                            variant="link"
                            className="p-0"
                            onClick={() => setCurrentStep(2)}
                          >
                            Change
                          </Button>
                        </div>
                        <p className="font-semibold">
                          {formData.billing === "monthly"
                            ? `$${
                                formData.plan === "arcade"
                                  ? "9"
                                  : formData.plan === "advanced"
                                  ? "12"
                                  : "15"
                              }/mo`
                            : `$${
                                formData.plan === "arcade"
                                  ? "90"
                                  : formData.plan === "advanced"
                                  ? "120"
                                  : "150"
                              }/yr`}
                        </p>
                      </div>
                      {formData.addons.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {formData.addons.includes("online-service") && (
                            <div className="flex justify-between">
                              <p className="text-gray-500">Online service</p>
                              <p className="font-medium">
                                {formData.billing === "monthly"
                                  ? "+$1/mo"
                                  : "+$10/yr"}
                              </p>
                            </div>
                          )}
                          {formData.addons.includes("larger-storage") && (
                            <div className="flex justify-between">
                              <p className="text-gray-500">Larger storage</p>
                              <p className="font-medium">
                                {formData.billing === "monthly"
                                  ? "+$2/mo"
                                  : "+$20/yr"}
                              </p>
                            </div>
                          )}
                          {formData.addons.includes("customizable-profile") && (
                            <div className="flex justify-between">
                              <p className="text-gray-500">
                                Customizable profile
                              </p>
                              <p className="font-medium">
                                {formData.billing === "monthly"
                                  ? "+$2/mo"
                                  : "+$20/yr"}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <p className="text-gray-500">
                        Total (per{" "}
                        {formData.billing === "monthly" ? "month" : "year"})
                      </p>
                      <p className="text-xl font-bold text-blue-600">
                        $
                        {/* Calculate total based on selected plan and add-ons */}
                        {formData.billing === "monthly"
                          ? (formData.plan === "arcade"
                              ? 9
                              : formData.plan === "advanced"
                              ? 12
                              : 15) +
                            (formData.addons.includes("online-service")
                              ? 1
                              : 0) +
                            (formData.addons.includes("larger-storage")
                              ? 2
                              : 0) +
                            (formData.addons.includes("customizable-profile")
                              ? 2
                              : 0)
                          : (formData.plan === "arcade"
                              ? 90
                              : formData.plan === "advanced"
                              ? 120
                              : 150) +
                            (formData.addons.includes("online-service")
                              ? 10
                              : 0) +
                            (formData.addons.includes("larger-storage")
                              ? 20
                              : 0) +
                            (formData.addons.includes("customizable-profile")
                              ? 20
                              : 0)}
                        /{formData.billing === "monthly" ? "mo" : "yr"}
                      </p>
                    </div>
                  </div>
                )}
              </SlideInAnimation>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            {currentStep > 1 && (
              <Button variant="ghost" onClick={prevStep}>
                Go Back
              </Button>
            )}
          </div>

          <div>
            {currentStep < steps.length ? (
              <Button onClick={nextStep}>Next </Button>
            ) : (
              <Button onClick={() => console.log(formData)}>Confirm</Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
