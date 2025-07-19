import { FC } from 'react';
import { motion } from 'framer-motion';
import MarketCard from './MarketCard';
import {
  SiBitcoin,
  SiEthereum,
  SiSolana,
  SiRipple,
} from 'react-icons/si';

const sampleData = [
  { time: '0', price: 100 },
  { time: '1', price: 102 },
  { time: '2', price: 98 },
  { time: '3', price: 105 },
  { time: '4', price: 103 },
  { time: '5', price: 107 },
];

const markets = [
  {
    title: 'Bitcoin (BTC)',
    price: '$102,200',
    change: '+2.3%',
    icon: <SiBitcoin size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1634097537825-b446635b2f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    data: sampleData,
  },
  {
    title: 'Ethereum (ETH)',
    price: '$3,250',
    change: '+1.8%',
    icon: <SiEthereum size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1634097537825-b446635b2f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    data: sampleData,
  },
  {
    title: 'Solana (SOL)',
    price: '$140',
    change: '+0.5%',
    icon: <SiSolana size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1634097537825-b446635b2f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    data: sampleData,
  },
  {
    title: 'Ripple (XRP)',
    price: '$0.95',
    change: '-0.2%',
    icon: <SiRipple size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1634097537825-b446635b2f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbiUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    data: sampleData,
  },
];

const MarketSection: FC = () => (
  <section
    id="markets"
    className="py-20 bg-black text-white"
  >
    <div className="text-center mb-8 px-4">
      <h2 className="text-4xl font-extrabold text-red-300">
        CryptoRem Market Insights
      </h2>
      <p className="mt-2 max-w-2xl mx-auto text-gray-400">
        Leverage CryptoRem’s powerful analytics for top crypto assets—view price trends, live data, and expert commentary.
      </p>
    </div>
    <motion.div
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 justify-items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {markets.map(mkt => (
        <MarketCard key={mkt.title} {...mkt} />
      ))}
    </motion.div>
  </section>
);

export default MarketSection; 