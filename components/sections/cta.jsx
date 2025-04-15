import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-card z-0" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Your career deserves more than templates and guesswork
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let AI give you the edge. Let's get you hired.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/onboarding">
                Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 hover:bg-primary/10 border-2"
            >
              <a href="https://www.youtube.com/@RoadsideCoder" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Talk to the Mentor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
