"use client";

import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["STUDENT", "UNIVERSITY", "COMPANY", "GOVERNMENT"]),
  universityName: z.string().optional(),
  companyName: z.string().optional(),
  industry: z.string().optional(),
  course: z.string().optional(),
  graduationYear: z.number().optional(),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
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
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/auth/signin");
      } else {
        const errorData = await response.json();
        console.log("Sign up failed:", errorData.error);
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.log("Sign up error:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <AnimationContainer delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-center ">
          <Card className="shadow-lg w-[600px] ">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Sign Up
              </CardTitle>
              <TextGenerateEffect
                className="font-medium text-sm text-center"
                words="Create your account to get started"
              />
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="transition-all duration-200 focus:ring-2"
                            />
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
                            <Input
                              type="email"
                              {...field}
                              className="transition-all duration-200 focus:ring-2 "
                            />
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
                            <Input
                              type="password"
                              {...field}
                              className="transition-all duration-200 focus:ring-2 "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                              <SelectTrigger className="transition-all duration-200 focus:ring-2 ">
                                <SelectValue placeholder="Select Role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="STUDENT">Student</SelectItem>
                              <SelectItem value="UNIVERSITY">
                                University
                              </SelectItem>
                              <SelectItem value="COMPANY">Company</SelectItem>
                              <SelectItem value="GOVERNMENT">
                                Government
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {role === "STUDENT" && (
                      <AnimationContainer
                        reverse
                        delay={0.3}
                        className="size-full space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="course"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Course</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="transition-all duration-200 focus:ring-2 "
                                />
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
                                  className="transition-all duration-200 focus:ring-2 "
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </AnimationContainer>
                    )}

                    {role === "UNIVERSITY" && (
                      <AnimationContainer
                        reverse
                        delay={0.3}
                        className="size-full"
                      >
                        <FormField
                          control={form.control}
                          name="universityName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>University Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="transition-all duration-200 focus:ring-2 "
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </AnimationContainer>
                    )}

                    {role === "COMPANY" && (
                      <AnimationContainer
                        reverse
                        delay={0.3}
                        className="size-full space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="transition-all duration-200 focus:ring-2 "
                                />
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
                                <Input
                                  {...field}
                                  className="transition-all duration-200 focus:ring-2 "
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </AnimationContainer>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </CardFooter>
          </Card>
        </MaxWidthWrapper>
      </AnimationContainer>
    </div>
  );
}
