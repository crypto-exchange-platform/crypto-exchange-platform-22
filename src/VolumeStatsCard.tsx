import { FC } from 'react';
import { motion } from 'framer-motion';

interface VolumeStatsCardProps {
  volume24h: string;
  change: string;
  trades: number;
}

const VolumeStatsCard: FC<VolumeStatsCardProps> = ({
  volume24h,
  change,
  trades,
}) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4 flex flex-col gap-2"
  >
    <h4 className="text-lg font-semibold text-red-300">24h Volume</h4>
    <p className="text-xl font-bold text-white">{volume24h}</p>
    <p
      className={`text-sm font-medium ${
        change.startsWith('-') ? 'text-red-400' : 'text-green-400'
      }`}
    >
      {change} today
    </p>
    <p className="text-sm text-gray-400">{trades} trades executed</p>
  </motion.div>
);

export default VolumeStatsCard; 