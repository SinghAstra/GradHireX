// import { verifyEmail } from '@/actions/auth.actions';
import { EmailVerificationLinkExpired } from "@/components/auth/verify-email/EmailVerificationLinkExpired";
import EmailVerificationLinkNotFound from "@/components/auth/verify-email/EmailVerificationLinkNotFound";
import EmailVerifiedSuccess from "@/components/auth/verify-email/EmailVerifiedSuccess";
import React from "react";

const Page = async ({ params: { token } }: { params: { token: string } }) => {
  return <EmailVerifiedSuccess />;
  // return <EmailVerificationLinkNotFound />;
  // return <EmailVerificationLinkExpired />;
};

export default Page;
