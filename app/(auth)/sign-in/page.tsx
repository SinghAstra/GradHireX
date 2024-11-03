import { SignIn } from "@/components/auth/sign-in";
import { FormContainer } from "@/layouts/form-container";

const LoginPage = () => {
  return (
    <div className="my-20">
      <FormContainer
        heading={"Welcome back"}
        description={"Please enter your details to sign in."}
      >
        <SignIn />
      </FormContainer>
    </div>
  );
};

export default LoginPage;
