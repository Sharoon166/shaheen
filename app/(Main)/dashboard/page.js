import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";

export default async function Dashboard() {
    const { isOnboarded } = await getUserOnboardingStatus();
    
    if (!isOnboarded) return redirect("/onboarding");

    return <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Here you can find your personalized insights.</p>
    </div>
}