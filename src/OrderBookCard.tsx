import { FC } from 'react';
import { motion } from 'framer-motion';

interface OrderBookCardProps {
  bids: { price: number; size: number }[];
  asks: { price: number; size: number }[];
}

const OrderBookCard: FC<OrderBookCardProps> = ({ bids, asks }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4"
  >
    <h4 className="text-lg font-semibold text-red-300 mb-2">
      Order Book
    </h4>
    <div className="grid grid-cols-2 text-sm">
      <div>
        <h5 className="text-red-300">Bids</h5>
        {bids.slice(0, 5).map((b, i) => (
          <div key={i} className="flex justify-between">
            <span>{b.price.toFixed(2)}</span>
            <span className="text-green-400">{b.size}</span>
          </div>
        ))}
      </div>
      <div>
        <h5 className="text-red-300">Asks</h5>
        {asks.slice(0, 5).map((a, i) => (
          <div key={i} className="flex justify-between">
            <span>{a.price.toFixed(2)}</span>
            <span className="text-red-400">{a.size}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default OrderBookCard; 