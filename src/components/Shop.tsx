import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useRef } from 'react';

export default function Shop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <div ref={containerRef} className="min-h-screen pb-20 px-4 sm:px-6">
      {/* Logo Section */}
      <div className="flex justify-center items-center pt-16 mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className="mx-auto h-24 sm:h-32 md:h-36 max-h-36 w-auto"
            animate={{
              y: [0, -6, 0],
              filter: [
                'drop-shadow(0 0 0 rgba(255,255,255,0))',
                'drop-shadow(0 10px 24px rgba(255,255,255,0.18))',
                'drop-shadow(0 0 0 rgba(255,255,255,0))',
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight whitespace-nowrap">
            Premium Collection
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          />
          <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg tracking-wide">
            Discover curated products for modern living
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                amazonLink={product.amazonLink}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
