import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How is NexVora Publish different from Substack and Patreon?',
    answer:
      'Substack and Patreon charge ongoing platform fees between 10% and 12% on every single subscriber transaction for the entire lifetime of your publication. NexVora Publish charges 0% transaction commissions. You keep 100% of your earnings through direct Stripe integration, paying only a flat predictable monthly subscription for the hosting and newsletter infrastructure.',
  },
  {
    question: 'Can I migrate my existing audience from Substack, WordPress, or Medium?',
    answer:
      'Yes! NexVora Publish includes a 1-click universal importer. You can upload your Substack archive zip file, WordPress XML export, or CSV subscriber list. All past articles, images, subscriber statuses, and paid payment tokens migrate smoothly without interrupting your reader billing cycles.',
  },
  {
    question: 'Can I use my own custom domain and custom email sending address?',
    answer:
      'Absolutely. Every paid plan allows you to map your own custom domain (e.g., yourname.com) with automatic free SSL renewal. You can also configure your custom email sending domain (e.g., dispatch@yourname.com) using standard SPF, DKIM, and DMARC DNS records for optimal deliverability.',
  },
  {
    question: 'Do you offer mobile applications and reader apps?',
    answer:
      'Yes! Created by Prince AR Abdur Rahman and NexVora Lab\'s Ofc, NexVora Publish includes high-performance mobile-friendly progressive web capabilities alongside dedicated modern Android companion applications built for reading, offline synchronization, and creator management.',
  },
  {
    question: 'Can I customize my website design and theme?',
    answer:
      'Yes. You can choose from dozens of pre-designed publication themes or edit colors, fonts, and layouts directly in the visual settings. For advanced teams, you can upload fully customized Handlebars templates or connect headless frontends via our REST and GraphQL Content APIs.',
  },
  {
    question: 'How does email deliverability work?',
    answer:
      'NexVora Publish routes newsletter dispatch through dedicated enterprise mail delivery clusters with automated bounce suppression, spam complaint mitigation, and automated feedback loop registration, maintaining average inbox delivery rates exceeding 99.4%.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Frequently Answered Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4 font-['Outfit',sans-serif]">
            Everything you need to know.
          </h2>
          <p className="text-base text-neutral-400">
            Have questions about switching to NexVora Publish? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900/60 rounded-xl border border-neutral-800/80 overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-semibold text-white font-['Outfit',sans-serif]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
