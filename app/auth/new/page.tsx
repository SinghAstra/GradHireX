"use client";

import {
  AnimatedContainer,
  AnimationContainer,
  StaggeredContainer,
} from "@/components/global/animation-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    role: z.enum(["STUDENT", "UNIVERSITY", "COMPANY", "GOVERNMENT"]),
    universityName: z.string().optional(),
    companyName: z.string().optional(),
    industry: z.string().optional(),
    course: z.string().optional(),
    graduationYear: z.number().optional(),
  })
  .refine(
    (data) => {
      if (data.role === "UNIVERSITY" && !data.universityName) {
        return false;
      }
      if (data.role === "COMPANY" && (!data.companyName || !data.industry)) {
        return false;
      }
      if (data.role === "STUDENT" && (!data.course || !data.graduationYear)) {
        return false;
      }
      return true;
    },
    {
      message: "Please fill in all required fields for your role",
      path: ["role"],
    }
  );

type SignUpFormValues = z.infer<typeof signUpSchema>;
const steps = ["Basic Info", "Role Selection", "Role Details"];

export default function SignUp() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "STUDENT",
    },
  });

  const { watch } = form;
  const role = watch("role");

  const onSubmit = async (data: SignUpFormValues) => {
    console.log("data --onSubmit is ", data);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          router.push("/auth/signin");
        } else {
          const errorData = await response.json();
          console.log("Sign up failed:", errorData.error);
        }
      } catch (error) {
        console.log("Sign up error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderStepContent = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="STUDENT">Student</SelectItem>
                      <SelectItem value="UNIVERSITY">University</SelectItem>
                      <SelectItem value="COMPANY">Company</SelectItem>
                      <SelectItem value="GOVERNMENT">Government</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 2:
        return (
          <>
            {role === "STUDENT" && (
              <>
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Graduation Year</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {role === "UNIVERSITY" && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="universityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {role === "COMPANY" && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-sm mx-auto">
      <AnimationContainer
        reverse
        delay={0.3}
        className="flex items-center w-full py-8 "
      >
        <Link href="/" className="flex items-center gap-x-2">
          <Icons.logo className="w-6 h-6" />
          <h1 className="text-lg font-medium">{siteConfig.name}</h1>
        </Link>
      </AnimationContainer>
      <AnimatedContainer className="w-full max-w-md">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl text-font-semibold text-center">
              {steps[step]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepContent(step)}
                  </motion.div>
                </AnimatePresence>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Previous
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)} disabled={isLoading}>
              {isLoading
                ? "Loading..."
                : step === steps.length - 1
                ? "Submit"
                : "Next"}
            </Button>
          </CardFooter>
        </Card>
      </AnimatedContainer>
      <AnimationContainer delay={0.3} className="w-full p-4">
        <div className="flex flex-col items-start w-full">
          <p className="text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="/" className="text-primary">
              Terms of Service{" "}
            </Link>
            and{" "}
            <Link href="/" className="text-primary">
              Privacy Policy
            </Link>
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
}
