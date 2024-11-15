"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import APP_PATHS from "@/config/path.config";
import {
  SignUpSchema,
  SignUpSchemaType,
} from "@/lib/validators/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpAction } from "@/app/actions/auth.action";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { PasswordInput } from "./password-input";
import { DemarcationLine, GoogleOauthButton } from "./social-auth";

const SignUp = () => {
  const router = useRouter();

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function SignUpHandler(data: SignUpSchemaType) {
    try {
      const response = await signUpAction(data);
      if (!response.status) {
        toast({
          title: response.message || "Something went wrong",
        });
      } else {
        toast({
          title: response.message || "Sign-up successful! Welcome to !",
        });

        router.push(APP_PATHS.WELCOME);
      }
    } catch {
      toast({
        title: "something went wrong",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(SignUpHandler)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
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
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full h-10"
            aria-label="submit"
          >
            {form.formState.isSubmitting ? "Please wait..." : "Create Account"}
          </Button>
          <DemarcationLine />
          <GoogleOauthButton label="Sign up with Google" />
        </form>
      </Form>
      <div className="flex items-center justify-center mt-6">
        <span className="text-muted-foreground">
          Already have an account?{" "}
          <Link
            href={APP_PATHS.SIGN_IN}
            className="text-primary font-semibold hover:underline "
          >
            Sign In
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUp;
