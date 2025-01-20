import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import pfp from "../assets/testiminial/Avatar.png";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-base md:text-lg font-medium text-gray-900">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-base text-gray-600 pr-8">{content}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      content:
        "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      title: "What is your cancellation policy?",
      content:
        "Our cancellation policy allows you to cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
    },
    {
      title: "Can other info be added to an invoice?",
      content:
        "Yes, you can add custom information to your invoices, including PO numbers, company details, and additional notes.",
    },
    {
      title: "How does billing work?",
      content:
        "We offer monthly and annual billing options. Payments are processed securely via major credit cards and bank transfers.",
    },
    {
      title: "How do I change my account email?",
      content:
        "You can change your account email through your account settings page. A verification email will be sent to confirm the change.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12 md:mb-16">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.title}
              content={faq.content}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={pfp}
                  alt={`Team member ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-base text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="inline-flex px-5 py-3 bg-[#E4360B] text-white font-medium rounded-lg hover:bg-[#C32F0A] transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
