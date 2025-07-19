import { FC } from 'react';
import { motion } from 'framer-motion';
import ForexCard, { ForexCardProps } from './ForexCard';

const newsItems: ForexCardProps[] = [
  {
    title: 'USD/JPY Hits Six-Month High',
    description:
      'As global markets wobble, the dollar strengthened against the yen, reaching levels not seen since January.',
    date: 'Jul 18, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1634097538301-5d5f8b09eb84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
    source: 'Forex Insider',
  },
  {
    title: 'EUR/GBP Slides on BoE Outlook',
    description:
      'Sterling outperformed the euro after the Bank of England signaled potential rate hikes next quarter.',
    date: 'Jul 17, 2025',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682310132767-317539ced933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
    source: 'Market Watch',
  },
  {
    title: 'Emerging Markets Rally',
    description:
      'Currencies in emerging economies gained as commodity prices picked up and investors sought higher yields.',
    date: 'Jul 16, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1667808929628-38fc8a48fa14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'FX Daily',
  },
  {
    title: 'AUD/USD Trades Near Resistance',
    description:
      'The Aussie dollar is testing a key technical resistance ahead of the RBA policy announcement.',
    date: 'Jul 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1642782477584-8bceec1bca01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'Currency Today',
  },
  {
    title: 'Crypto Volatility Impacts FX',
    description:
      'Spikes in bitcoin volatility are spilling over into forex markets, prompting traders to hedge USD positions.',
    date: 'Jul 14, 2025',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675876765081-541c611e1eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'CryptoFX',
  },
  {
    title: 'CAD Strengthens on Oil Surge',
    description:
      'The loonie rallied as crude oil prices hit multi-year highs, boosting Canada’s export revenues.',
    date: 'Jul 13, 2025',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681487466849-7c296fe91833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'Energy & FX',
  },
  {
    title: 'GBP/USD Rallies on Inflation Data',
    description:
      'The pound surged past its June peak after UK inflation figures exceeded expectations.',
    date: 'Jul 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1524666522-3afebecf783a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'Global Markets',
  },
  {
    title: 'JPY Weakens as BOJ Maintains Loose Policy',
    description:
      'The yen slipped following the Bank of Japan’s decision to keep monetary policy accommodative.',
    date: 'Jul 11, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1627435318800-a0bee6cb4399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGJpdGNvaW4lMjByZWR8ZW58MHx8MHx8fDA%3D',
    link: '#',
    source: 'Asia Finance',
  },
];

const ForexNewsSection: FC = () => (
  <section
    id="news"
    className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
  >
    <div className="text-center mb-8 px-4">
      <h2 className="text-4xl font-extrabold text-red-300 drop-shadow-md">
        Forex News & Insights
      </h2>
      <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-400">
        Stay ahead of currency moves with expert analysis and up-to-the-minute updates.
      </p>
    </div>
    <motion.div
      className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8 px-4 justify-items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {newsItems.map(item => (
        <ForexCard key={item.title} {...item} />
      ))}
    </motion.div>
  </section>
);

export default ForexNewsSection;
 