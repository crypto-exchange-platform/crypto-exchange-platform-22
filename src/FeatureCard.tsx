import { FC } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-80 bg-black border border-red-300 rounded-xl p-4 text-center"
  >
    <div className="text-red-300 mb-3">{icon}</div>
    <h4 className="text-lg font-semibold text-red-300 mb-1">{title}</h4>
    <p className="text-sm text-gray-300">{description}</p>
  </motion.div>
);

export default FeatureCard; 