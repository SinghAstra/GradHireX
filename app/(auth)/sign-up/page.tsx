import SignUp from "@/components/auth/sign-up";
import { siteConfig } from "@/config/site";
import { FormContainer } from "@/layouts/form-container";

const SignUpPage = () => {
  return (
    <div className="my-20">
      <FormContainer
        heading={`Welcome to ${siteConfig.name}`}
        description={"Please enter your details to sign up."}
      >
        <SignUp />
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
