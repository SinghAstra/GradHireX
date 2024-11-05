import { Button } from "@/components/ui/button";
import APP_PATHS from "@/config/path.config";
import { FormContainer } from "@/layouts/form-container";
import Link from "next/link";

const EmailVerifiedSuccess = () => {
  return (
    <div className="my-20">
      <FormContainer
        heading={"Email Verified!"}
        description={
          "Your email has been successfully verified. You can now access your account."
        }
      >
        <Link href={APP_PATHS.SIGN_IN}>
          <Button className="w-full" aria-label="login">
            Go to Login
          </Button>
        </Link>
      </FormContainer>
    </div>
  );
};

export default EmailVerifiedSuccess;
