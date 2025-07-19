import { FC } from "react";
import { motion } from "framer-motion";
import PriceChartCard from "./PriceChartCard";
import DepthChartCard from "./DepthChartCard";
import VolumeStatsCard from "./VolumeStatsCard";
import FeatureCard from "./FeatureCard";
import OrderBookCard from "./OrderBookCard";
import TradeFormCard from "./TradeFormCard";
import { SiLightning } from "react-icons/si";
const priceData = [
  { time: "00:00", price: 100 },
  { time: "04:00", price: 102 },
  { time: "08:00", price: 98 },
  { time: "12:00", price: 105 },
  { time: "16:00", price: 103 },
  { time: "20:00", price: 107 },
];

const bids = [
  { price: 107, size: 1.2 },
  { price: 106, size: 0.8 },
  { price: 105, size: 2.0 },
  { price: 104, size: 1.5 },
  { price: 103, size: 0.9 },
];

const asks = [
  { price: 108, size: 1.0 },
  { price: 109, size: 1.3 },
  { price: 110, size: 0.7 },
  { price: 111, size: 1.1 },
  { price: 112, size: 0.5 },
];

const tradeFeatures = [
  {
    icon: <SiLightning size={32} />,
    title: "Instant Execution",
    description:
      "Execute trades in milliseconds with our ultra-low latency engine.",
  }
];

const TradeSection: FC = () => (
  <section id="trade" className="py-20 bg-black text-white">
    <div className="text-center mb-8 px-4">
      <h2 className="text-4xl font-extrabold text-red-300">
        Trade with CryptoRem
      </h2>
      <p className="mt-2 max-w-2xl mx-auto text-gray-400">
        A suite of powerful trading tools at your fingertips—real-time charts,
        depth analysis, and secure order execution.
      </p>
    </div>
    <motion.div
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <PriceChartCard data={priceData} />
      <DepthChartCard bids={bids} asks={asks} />
      <OrderBookCard bids={bids} asks={asks} />
      <TradeFormCard />
      <VolumeStatsCard volume24h="$1.2M" change="+3.4%" trades={5423} />
      {tradeFeatures.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </motion.div>
  </section>
);

export default TradeSection;
