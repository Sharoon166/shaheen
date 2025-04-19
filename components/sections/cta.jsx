import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/10 to-muted/30">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-balance font-bold mb-6">
            Your career deserves more than templates and guesswork
          </h2>
          <p className="md:text-lg text-muted-foreground text-balance mb-10">
            Stand out from the crowd with personalized career strategies backed
            by artificial intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-6 gap-y-3 justify-center items-center">
            <Button size="lg" asChild className="group">
              <Link href="/onboarding">
                Get Started Free{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 hover:bg-primary/10 border-2"
            >
              <a
                href="https://www.youtube.com/@RoadsideCoder"
                target="_blank"
                rel="noopener noreferrer"
              >
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