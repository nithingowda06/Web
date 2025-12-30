import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const menuItems = ['Home', 'Shop Now'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ShoppingBag className="w-8 h-8 text-white" strokeWidth={1.5} />
          <span className="text-xl font-bold text-white tracking-tight">SHOP</span>
        </motion.div>

        <ul className="flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                  item === 'Shop Now'
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-400 hover:border-b-2 hover:border-gray-400 pb-1'
                }`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
