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

interface PriceChartCardProps {
  data: { time: string; price: number }[];
}

const PriceChartCard: FC<PriceChartCardProps> = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4"
  >
    <h4 className="text-lg font-semibold text-red-300 mb-2">
      BTC/USD Price
    </h4>
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <XAxis dataKey="time" tick={{ fill: '#f87171' }} />
        <YAxis tick={{ fill: '#f87171' }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#000', border: 'none' }}
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
  </motion.div>
);

export default PriceChartCard; 