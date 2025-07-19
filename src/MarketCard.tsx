import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface MarketCardProps {
  title: string;
  price: string;
  change: string;
  icon: React.ReactNode;
  imageUrl: string;
  data: { time: string; price: number }[];
}

const MarketCard: FC<MarketCardProps> = ({
  title,
  price,
  change,
  icon,
  imageUrl,
  data,
}) => (
  <motion.div
    whileHover={{
      rotateY: 8,
      rotateX: 8,
      scale: 1.05,
      boxShadow: '0 0 20px rgba(248, 113, 113, 0.5)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-72 bg-black border border-red-300 rounded-xl overflow-hidden"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="relative h-36">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute top-2 left-2 text-red-300">{icon}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <Tooltip
            contentStyle={{ backgroundColor: '#000', border: 'none' }}
            labelStyle={{ color: '#f87171' }}
            itemStyle={{ color: '#f87171' }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f87171"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold text-red-300">{title}</h3>
      <p className="text-sm text-gray-300">
        CryptoRem provides real-time {title} insights and analytics.
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-semibold text-white">{price}</span>
        <span
          className={`text-sm font-medium ${
            change.startsWith('-') ? 'text-red-400' : 'text-green-400'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  </motion.div>
);

export default MarketCard; 