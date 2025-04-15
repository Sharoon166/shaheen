const steps = [
  {
    title: "Professional Onboarding",
    description: "Share your industry and expertise for personalized guidance",
    themeColor: "#FF6B6B",
  },
  {
    title: "Craft Your Documents",
    description: "Create ATS-optimized resumes and compelling cover letters",
    themeColor: "#4ECDC4",
  },
  {
    title: "Prepare for Interviews",
    description: "Practice with AI-powered mock interviews tailored to your role",
    themeColor: "#FFE66D",
  },
  {
    title: "Track Your Progress",
    description: "Monitor improvements with detailed performance analytics",
    themeColor: "#6C5CE7",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/10 to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">How It Works</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Your success journey in four simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl border-2 border-primary/20 backdrop-blur-sm w-full max-lg:max-w-lg mx-auto"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{ backgroundColor: `${step.themeColor}20`, color: step.themeColor }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <div
                  className="h-1 w-20 rounded-full mt-auto"
                  style={{ backgroundColor: step.themeColor }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}