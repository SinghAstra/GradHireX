// import { verifyEmail } from '@/actions/auth.actions';
import { EmailVerificationLinkExpired } from "@/components/auth/verify-email/EmailVerificationLinkExpired";
import React from "react";

const Page = async ({ params: { token } }: { params: { token: string } }) => {
  //   return <EmailVerifiedSuccess/>
  //   return <EmailVerificationLinkNotFound/>
  return <EmailVerificationLinkExpired />;
};

export default Page;
