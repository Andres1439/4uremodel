"use client";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How can I request a quote for a carpentry project?",
      answer:
        "You can request a quote by filling out the contact form on our website or by calling our customer service. Provide details about your project, and we will get back to you with a customized estimate.",
    },
    {
      question: "What materials do you use for masonry work?",
      answer:
        "We use high-quality materials such as concrete blocks, bricks, natural stone, and mortar. We ensure all materials meet industry standards for durability and safety.",
    },
    {
      question: "Do you provide assembly services for furniture?",
      answer:
        "Yes, we offer professional assembly services for furniture, including IKEA furniture and custom-built pieces. Our team ensures everything is assembled securely and efficiently.",
    },
    {
      question: "Can you handle both residential and commercial construction projects?",
      answer:
        "Absolutely! We specialize in both residential and commercial construction, including renovations, new builds, and structural repairs. Contact us to discuss your project requirements.",
    },
    {
      question: "How long does a typical carpentry project take to complete?",
      answer:
        "The duration depends on the complexity and size of the project. Small projects like shelving may take a few days, while larger projects like custom cabinetry can take several weeks. We provide a timeline during the planning phase.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 mb-20">
      <header>
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      </header>
      <main className="space-y-4">
        {faqItems.map((item, index) => (
          <Collapsible.Root key={index} open={openIndex === index} onOpenChange={() => toggleItem(index)} className="bg-white rounded-lg shadow-md">
            <Collapsible.Trigger className="w-full flex justify-between items-center p-6 text-left">
              <span className="text-lg font-medium">{item.question}</span>
              <ChevronDown className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </Collapsible.Trigger>
            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <article className="px-6 pb-6 text-gray-600">{item.answer}</article>
            </Collapsible.Content>
          </Collapsible.Root>
        ))}
      </main>
    </section>
  );
};

export default FAQ;
