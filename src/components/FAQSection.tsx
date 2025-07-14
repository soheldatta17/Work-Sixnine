import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

interface FAQSectionProps {
  plus: string;
  minus: string;
}

const FAQSection = ({ plus, minus }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const faqItems: FAQItem[] = [
    {
      question: "Are your products safe for sensitive skin?",
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What's your return policy?",
    },
    {
      question: "Do you ship internationally?",
    },
    {
      question: "How do I choose the right product?",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="rounded-lg border overflow-hidden"
          style={{
            border: "1px solid #2D3B36",
          }}
        >
          <motion.button
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
            whileTap={{ scale: 0.995 }}
            className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <h3
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#2D3B36",
              }}
            >
              {faq.question}
            </h3>

            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={openIndex === index ? minus : plus}
                alt={openIndex === index ? "Minus" : "Plus"}
                className="w-6 h-6"
              />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {openIndex === index && faq.answer && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut",
                  opacity: { duration: 0.3 }
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      color: "#525349",
                    }}
                  >
                    {faq.answer.split("<br/>").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < faq.answer!.split("<br/>").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQSection;