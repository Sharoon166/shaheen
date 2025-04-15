import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Rob } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-sm text-primary mb-8 hover:shadow-lg transition-all duration-300 -rotate-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
            <span className="font-medium text-sm">Your AI Career Mentor</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-180 from-neutral-300 to-zinc-600 bg-clip-text text-transparent text-balance">
            Land Your Dream Job with AI-Powered Career Guidance
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your job search with personalized resumes, AI interview
            prep, and real-time career insights. Your success, accelerated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/onboarding">
                Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://youtu.be/UbXpRv5ApKA?list=PLKhlp2qtUcSZBJxjXbHBkE_3h5E31dDiu" target="_blank" rel="noopener noreferrer">
                See How It Works
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl">98%</span>
              <span className="text-sm">Interview Success</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl">24hr</span>
              <span className="text-sm">Average Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl">50k+</span>
              <span className="text-sm">Users Hired</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
