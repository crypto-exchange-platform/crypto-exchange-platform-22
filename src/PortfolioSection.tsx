import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { SiBitcoin, SiEthereum, SiSolana, SiRipple } from 'react-icons/si';

const distributionData = [
  { name: 'Bitcoin', value: 55, icon: <SiBitcoin size={24} /> },
  { name: 'Ethereum', value: 25, icon: <SiEthereum size={24} /> },
  { name: 'Solana', value: 10, icon: <SiSolana size={24} /> },
  { name: 'Ripple', value: 10, icon: <SiRipple size={24} /> },
];

const performanceData = [
  { time: 'Jan', value: 12000 },
  { time: 'Feb', value: 14000 },
  { time: 'Mar', value: 13000 },
  { time: 'Apr', value: 15000 },
  { time: 'May', value: 14500 },
  { time: 'Jun', value: 16000 },
];

const COLORS = ['#f87171', '#ef4444', '#dc2626', '#b91c1c'];

const PortfolioSection: FC = () => (
  <section
    id="portfolio"
    className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
  >
    <motion.div
      className="absolute top-8 left-1/4 w-72 h-72 bg-red-300/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-12 right-1/3 w-56 h-56 bg-red-300/10 rounded-full blur-2xl"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 7, repeat: Infinity, delay: 2 }}
    />

    <div className="relative z-10 text-center mb-12 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-300 drop-shadow-lg">
        Your CryptoRem Portfolio
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Monitor your asset allocation and performance over time with CryptoRem’s sleek dashboard.
      </p>
    </div>

    <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      <motion.div
        className="bg-black border border-red-300 rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-red-300 mb-4">
          Asset Allocation
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={distributionData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              label
            >
              {distributionData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ color: '#f87171' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        className="bg-black border border-red-300 rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-red-300 mb-4">
          Portfolio Value (6M)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={performanceData} margin={{ left: -20 }}>
            <XAxis
              dataKey="time"
              tick={{ fill: '#f87171' }}
              axisLine={{ stroke: '#f87171' }}
            />
            <YAxis
              tick={{ fill: '#f87171' }}
              axisLine={{ stroke: '#f87171' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#000', border: 'none' }}
              itemStyle={{ color: '#f87171' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f87171"
              strokeWidth={3}
              dot={{ r: 4, fill: '#ef4444' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4 justify-items-center">
      {distributionData.map(({ name, value, icon }, idx) => (
        <motion.div
          key={name}
          whileHover={{
            rotateY: 6,
            rotateX: 6,
            scale: 1.05,
            boxShadow: '0 0 20px rgba(248,113,113,0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-56 bg-black border border-red-300 rounded-xl p-6 flex flex-col items-center gap-3 shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-red-300 mb-2">{icon}</div>
          <div className="text-lg font-bold text-white">{name}</div>
          <div className="text-sm text-gray-400">
            {value}% of portfolio
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
