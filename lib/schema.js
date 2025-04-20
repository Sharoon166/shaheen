import z from "zod";

export const onboardingFormSchema = z.object({
    industry: z.string({
        required_error: "Industry is required",
    }),
    subIndustry: z.string({
        required_error: "Please select a specialization",
    }),
    bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
    experience: z.string().transform(value => parseInt(value, 10)).pipe(
        z.number().min(0, "Experience must be at least 0 years").max(50, "Experience cannot exceed 50 years")
    ),
    skills: z.string().transform(value => value ? value.split(",").map(skill => skill.trim()).filter(Boolean) : []),
})