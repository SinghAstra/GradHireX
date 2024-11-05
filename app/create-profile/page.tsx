import MultiStepForm from "@/components/create-profile/create-profile-multi-step-form";
import { USER_ROLE } from "@/config/app.config";
import { authOptions } from "@/lib/constant/auth.options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== USER_ROLE) redirect("/");
  if (session.user.onBoard === true) redirect("/jobs");
  return (
    <div className="flex flex-col justify-center place-items-center py-4">
      <MultiStepForm />
    </div>
  );
}
