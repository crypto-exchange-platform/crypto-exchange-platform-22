import { FC } from 'react';
import { motion } from 'framer-motion';

const TradeFormCard: FC = () => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4"
  >
    <h4 className="text-lg font-semibold text-red-300 mb-2">
      Execute Trade
    </h4>
    <form className="flex flex-col gap-3 text-sm">
      <input
        type="text"
        placeholder="Amount (BTC)"
        className="p-2 bg-gray-900 rounded border border-red-300 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Price (USD)"
        className="p-2 bg-gray-900 rounded border border-red-300 focus:outline-none"
      />
      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 py-2 bg-red-300 text-black rounded font-medium hover:opacity-90 transition"
        >
          Buy
        </button>
        <button
          type="button"
          className="flex-1 py-2 bg-green-500 text-black rounded font-medium hover:opacity-90 transition"
        >
          Sell
        </button>
      </div>
    </form>
  </motion.div>
);

export default TradeFormCard; 