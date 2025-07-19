import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is CryptRem?',
    answer:
      'CryptRem is your all-in-one crypto companion—trade, track, and transform your digital assets with speed and security.',
  },
  {
    question: 'How do I fund my CryptRem account?',
    answer:
      'Go to the Dashboard → Deposit, choose your asset, and follow the on-screen instructions to transfer funds from your wallet.',
  },
  {
    question: 'Which cryptocurrencies are supported?',
    answer:
      'We support BTC, ETH, SOL, XRP, and over 50 more tokens. Visit our Markets page for the full list and real-time listings.',
  },
  {
    question: 'Is CryptRem non-custodial?',
    answer:
      'Yes—CryptRem never holds your private keys. All assets remain in your wallet; we only facilitate secure order matching on-chain.',
  },
  {
    question: 'What trading pairs can I use?',
    answer:
      'Choose from popular pairs like BTC/USD, ETH/USD, SOL/USDT, and many DeFi tokens. We’re constantly adding new pairs.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'Join our Telegram community or submit a ticket via the Help Center for 24/7 assistance from the CryptRem team.',
  },
];

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      {/* Section header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-extrabold text-red-300 drop-shadow-md">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-400">
          Your questions about CryptRem, answered.
        </p>
      </div>

      {/* FAQ items */}
      <div className="container mx-auto space-y-4 px-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            whileHover={{
              boxShadow: '0 0 20px rgba(248,113,113,0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-black border border-red-300 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-red-300">
                {faq.question}
              </span>
              <span className="text-red-300">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
 