import { Quote, QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "I applied to 3 jobs and got 2 callbacks in a week. I've never felt more confident in an interview.",
    author: "Sarah R.",
    role: "Software Engineer @ Shopify",

    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah",
  },
  {
    quote:
      "The cover letter it wrote for me was better than anything I've ever done manually.",
    author: "Karan M.",
    role: "UI/UX Designer",

    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Karan",
  },
  {
    quote:
      "Finally, an AI tool that understands the tech industry. This is a game-changer for job seekers.",
    author: "Alex W.",
    role: "Full Stack Developer",

    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
  },
];
export default function Testimonials() {
  return (
    <section className="py-24 bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What People Say</h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Success stories from our community
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-card backdrop-blur-sm border border-accent max-w-lg mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full bg-accent p-1"
                />
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-base text-muted-foreground italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}