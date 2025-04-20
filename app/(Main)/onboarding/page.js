import { getUserOnboardingStatus } from "@/actions/user"
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";
import { industries } from "@/constants";

export default async function OnboardingPage() {

    const { isOnboarded } = await getUserOnboardingStatus();

    if(isOnboarded) return redirect("/dashboard");

    return <>
        <OnboardingForm industries={industries} />
    </>
}