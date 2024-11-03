"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import APP_PATHS from "@/config/path.config";
import {
  SignInSchema,
  SignInSchemaType,
} from "@/lib/validators/auth.validator";
import Link from "next/link";
import { PasswordInput } from "./password-input";
import { DemarcationLine, GoogleOauthButton } from "./social-auth";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SignIn() {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function signInHandler(data: SignInSchemaType) {
    console.log("Inside the signInHandler data is ", data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signInHandler)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="name@gmail.com" />
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
                  <PasswordInput field={field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Link
              href={APP_PATHS.FORGOT_PASSWORD}
              className="text-xs text-muted-foreground font-medium hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full h-10"
            aria-label="submit"
          >
            {form.formState.isSubmitting ? "Please wait..." : "Sign In"}
          </Button>
          <DemarcationLine />
          <GoogleOauthButton label="Sign in with Google" />
        </form>
      </Form>
      <div className="flex items-center justify-center mt-6">
        <span className="text-muted-foreground">
          Don&apos;t have an account yet?{" "}
          <Link
            href={APP_PATHS.SIGN_UP}
            className="text-muted-foreground font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </>
  );
}
