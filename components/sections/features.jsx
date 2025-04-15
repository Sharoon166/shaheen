import { FileCheck, BrainCircuit, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Resume Builder",
    description: "Build professional, ATS-friendly resumes effortlessly.",
    themeColor: "#22C55E",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Interview Coach",
    description: "Enhance interview skills with AI-powered feedback.",
    themeColor: "#3B82F6",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Career Planning",
    description: "Get personalized career path guidance for your profile.",
    themeColor: "#EF4444",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Analytics",
    description: "Access real-time salary data and market insights.",
    themeColor: "#F97316",
  }
];
export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/5 to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center ">Our Solutions</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Everything you need to advance your career
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group transition-all duration-300 ease-in-out p-6 rounded-3xl bg-card shadow-xl border border-primary/30 backdrop-blur-sm max-w-lg mx-auto"
            >
              <div className="flex lg:flex-col items-center gap-4 w-full">
                <div style={{ backgroundColor: feature.themeColor }} className="p-3 rounded-full shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <span className="text-sm text-primary/60 block">FEATURE</span>
                  <h3 className="text-xl font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}