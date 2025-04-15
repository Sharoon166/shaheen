import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI resume optimization work?",
    answer:
      "Our AI analyzes job descriptions and your resume in real-time, suggesting tailored improvements to match employer requirements. It optimizes keywords, formatting, and content while maintaining your authentic voice and experience.",
  },
  {
    question: "Can I practice real interview scenarios?",
    answer:
      "Yes! Our AI Interview Coach simulates industry-specific interviews, providing real-time feedback on your responses, body language, and communication style. You can practice common questions and receive personalized improvement suggestions.",
  },
  {
    question: "How up-to-date are your career insights?",
    answer:
      "Our platform continuously analyzes thousands of job postings, salary data, and industry trends in real-time. The insights and recommendations are updated hourly to ensure you have the most current market information.",
  },
  {
    question: "Will my resume still sound like me?",
    answer:
      "Absolutely! Our AI enhances your content while preserving your unique voice and experience. It suggests improvements without changing the core essence of your professional narrative.",
  },
  {
    question: "How personalized is the career guidance?",
    answer:
      "Very personalized! We analyze your skills, experience, and career goals to provide tailored recommendations for job opportunities, skill development, and career paths that align with your objectives.",
  },
  {
    question: "Can I track my application progress?",
    answer:
      "Yes, you can track all your job applications, interview preparations, and skill development progress in one dashboard. Get insights into your application success rate and areas for improvement.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about your AI career mentor
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="ring-0"
              >
                <AccordionTrigger className="px-2 hover:bg-card cursor-pointer text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </section>
  );
}
