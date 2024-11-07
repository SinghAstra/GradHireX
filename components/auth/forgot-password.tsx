"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
// import { forgetPassword } from '@/actions/auth.actions';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      //   const res = await forgetPassword({ email });

      //   toast({
      //     title: res.message,
      //     variant: res.status ? 'success' : 'destructive',
      //   });

      toast({
        title: "Email sent successfully!",
      });
    } catch {
      toast({
        title:
          "We're sorry for the inconvenience. Please report this issue to our support team",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full max-w-sm items-center gap-4"
    >
      <Label htmlFor="email">Email</Label>

      <Input
        type="email"
        id="email"
        placeholder="Email"
        required={true}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Button
        type="submit"
        className="mt-4"
        disabled={isLoading}
        aria-label="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ForgotPassword;