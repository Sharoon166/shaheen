"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    });

    if (!user) throw new Error("User not found");

    try {

        // 1. Check if industry exists
        // 2. If not, create a new industry with default values
        // 3. Update user

        const result = await db.$transaction(
            async (tx) => {
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    }
                });

                if (!industryInsight) {
                    industryInsight = await tx.industryInsight.create({
                        data: {
                            industry: data.industry,
                            salaryRanges: [],
                            growthRate: 0,
                            demandLevel: "MEDIUM",
                            topSkills: [],
                            marketOutlook: "NEUTRAL",
                            keyTrends: [],
                            recommendedSkills: [],
                            // nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                        }
                    });
                }

                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills
                    }
                })
                console.log({industryInsight, user, updatedUser})

                return { user: updatedUser, industryInsight };
            }, { timeout: 10_000 }
        );

        return { success: true, ...result };
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update user profile.");
    }
}

export async function getUserOnboardingStatus() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    });

    if (!user) throw new Error("User not found");

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        return { isOnboarded: !!user.industry };
    } catch (error) {

        console.error("Error fetching user onboarding status:", error.message);
        throw new Error("Failed to fetch onboarding status.");
    }
}