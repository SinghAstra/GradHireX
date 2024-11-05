import { Button } from "@/components/ui/button";
import APP_PATHS from "@/config/path.config";
import { FormContainer } from "@/layouts/form-container";
import Link from "next/link";

const EmailVerificationLinkNotFound = () => {
  return (
    <div className="my-20">
      <FormContainer
        heading={"Link Not Found"}
        description={"The verification link you used is invalid or not found."}
      >
        <Link href={APP_PATHS.SIGN_UP}>
          <Button className="w-full" aria-label="signUp-redirect">
            Go to SignUp
          </Button>
        </Link>
      </FormContainer>
    </div>
  );
};

export default EmailVerificationLinkNotFound;
