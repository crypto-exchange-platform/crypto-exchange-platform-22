import { FC } from 'react';
import {
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer: FC = () => (
  <footer className="py-12 bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-400">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-red-300">CryptRem</h3>
        <p>
          Empowering your crypto journey with blazing speed, on-chain security,
          and real-time insights.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-red-300 mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'Markets', 'Trade', 'Portfolio', 'News', 'FAQ'].map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-red-300 mb-4">Connect</h4>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTelegramPlane size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} CryptRem. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
 