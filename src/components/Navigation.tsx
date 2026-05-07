import { Instagram, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const instagramUrl =
    'https://www.instagram.com/accounts/login/?next=%2Fmurli_footprints%2F&source=omni_redirect';

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

        <div className="flex items-center gap-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="relative inline-flex items-center justify-center w-10 h-10"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full blur-md opacity-80"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(236,72,153,0.7) 0%, rgba(168,85,247,0.7) 50%, rgba(34,211,238,0.7) 100%)',
                }}
                animate={{
                  opacity: [0.55, 0.9, 0.55],
                  scale: [0.95, 1.08, 0.95],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 55%)',
                }}
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative rounded-full p-2"
                animate={{
                  filter: [
                    'drop-shadow(0 0 0 rgba(0,0,0,0))',
                    'drop-shadow(0 0 18px rgba(236,72,153,0.55)) drop-shadow(0 0 28px rgba(168,85,247,0.45))',
                    'drop-shadow(0 0 0 rgba(0,0,0,0))',
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.span>
            </a>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#shop-now"
              className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-white text-white border-b-2 border-white pb-1"
            >
              Shop Now
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
