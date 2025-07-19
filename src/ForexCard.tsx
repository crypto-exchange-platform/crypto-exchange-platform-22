import { FC } from 'react';
import { motion } from 'framer-motion';

export interface ForexCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
  source: string;
}

const ForexCard: FC<ForexCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  link,
  source,
}) => (
  <motion.article
    whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(248,113,113,0.5)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="flex flex-col bg-black border border-red-300 rounded-xl overflow-hidden"
    style={{ width: '18rem' }}
  >
    <div className="h-40 w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
        <time dateTime={new Date(date).toISOString()}>{date}</time>
        <span className="text-red-300">{source}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300 flex-1 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-center py-2 bg-red-300 text-black rounded-lg font-medium hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </motion.article>
);

export default ForexCard; 