import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Building2, MessageSquare, Target, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 hover:gap-2.5 mb-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 hover:from-primary/20 to-primary/10 hover:bg-primary/10 border border-primary/20 backdrop-blur-sm text-primary hover:shadow-lg transition-all duration-300 -rotate-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
            <span className="font-medium text-sm">Your AI Career Mentor</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text text-balance">
            Land Your Dream Job with AI-Powered Career Guidance
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="hidden sm:inline">
              Transform your job search with personalized resumes, AI interview
              prep, and real-time career insights. Your success, accelerated.
            </span>
            <span className="sm:hidden">
              Get personalized resumes and AI interview prep. Your career
              success starts here.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <Link href="/onboarding">
                Get Started Free <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a
                href="https://youtu.be/UbXpRv5ApKA?list=PLKhlp2qtUcSZBJxjXbHBkE_3h5E31dDiu"
                target="_blank"
                rel="noopener noreferrer"
              >
                See How It Works
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <Building2 className="w-8 h-8 text-primary max-md:hidden" />
                <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  50+
                </span>
              </div>
              <span className="text-sm text-muted-foreground mt-1">
                Industries Covered
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-8 h-8 text-primary max-md:hidden" />
                <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  1000+
                </span>
              </div>
              <span className="text-sm text-muted-foreground mt-1">
                Interview Questions
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <Target className="w-8 h-8 text-primary max-md:hidden" />
                <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  95%
                </span>
              </div>
              <span className="text-sm text-muted-foreground mt-1">
                Success Rate
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-8 h-8 text-primary max-md:hidden" />
                <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  24/7
                </span>
              </div>
              <span className="text-sm text-muted-foreground mt-1">
                AI Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}