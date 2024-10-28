import { ReactNode } from "react";

interface FormContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  description: ReactNode;
}

const FormContainer = ({
  heading,
  description,
  children,
}: FormContainerProps) => {
  return (
    <div className="self-center justify-self-center w-full px-6">
      <div className="mx-auto sm:max-w-[30rem] bg-background py-6 px-4 rounded-lg sm:px-10 sm:pb-6 sm:shadow border">
        <div className="sm:mx-auto w-full sm:max-w-md mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">{heading}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
