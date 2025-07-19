import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface DepthChartCardProps {
  bids: { price: number; size: number }[];
  asks: { price: number; size: number }[];
}

const DepthChartCard: FC<DepthChartCardProps> = ({ bids, asks }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4"
  >
    <h4 className="text-lg font-semibold text-red-300 mb-2">
      Market Depth
    </h4>
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={[...bids, ...asks]}>
        <XAxis dataKey="price" tick={{ fill: '#f87171' }} />
        <YAxis tick={{ fill: '#f87171' }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#000', border: 'none' }}
          itemStyle={{ color: '#f87171' }}
        />
        <Area
          type="step"
          dataKey="size"
          data={bids}
          stroke="rgba(248,113,113,0.7)"
          fill="rgba(248,113,113,0.2)"
        />
        <Area
          type="step"
          dataKey="size"
          data={asks}
          stroke="rgba(34,197,94,0.7)"
          fill="rgba(34,197,94,0.2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

export default DepthChartCard; 