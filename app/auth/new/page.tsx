"use client";

import AnimationContainer from "@/components/global/animation-container";
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
    <div className="flex flex-col items-center justify-center min-h-screen max-w-sm mx-auto">
      <AnimationContainer
        reverse
        delay={0.3}
        className="flex items-center w-full py-8 border-b border-border/80"
      >
        <Link href="/" className="flex items-center gap-x-2">
          <Icons.logo className="w-6 h-6" />
          <h1 className="text-lg font-medium">{siteConfig.name}</h1>
        </Link>
      </AnimationContainer>
      <AnimationContainer
        delay={0.3}
        className="w-full p-4 border border-border/80 rounded-md my-4"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
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
            )}
            {role === "COMPANY" && (
              <>
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
              </>
            )}
          </form>
        </Form>
        <button
          type="submit"
          className="relative inline-flex h-10 overflow-hidden rounded-md p-[1.5px] w-full my-8"
          disabled={isLoading}
          onClick={form.handleSubmit(onSubmit)}
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--primary-foreground))_50%,hsl(var(--primary))_100%)]" />

          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[hsl(var(--background))] px-4 py-1 text-sm font-medium text-[hsl(var(--primary))] backdrop-blur-3xl ">
            {isLoading ? "Signing up..." : "Sign Up"}
            <Icons.next className="ml-2 size-6 animate-moveLeftRight" />
          </span>
        </button>
      </AnimationContainer>
      <AnimationContainer
        delay={0.5}
        className="w-full p-4 border-t border-border/80"
      >
        <div className="flex flex-col items-start w-full">
          <p className="text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-primary">
              Terms of Service{" "}
            </Link>
            and{" "}
            <Link href="/privacy" className="text-primary">
              Privacy Policy
            </Link>
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
}
