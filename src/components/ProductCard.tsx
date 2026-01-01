import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  amazonLink: string;
}

export default function ProductCard({ image, title, amazonLink }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    window.open(amazonLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        height: '400px',  // Fixed height for consistency
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          height: '100%',  // Take full height of parent
        }}
        whileHover={{ scale: 1.02, z: 50 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-full flex flex-col"  // Make container a flex column
      >
        <motion.div
          animate={{
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 30px rgba(255, 255, 255, 0.1)'
              : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
          }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 flex-1 flex flex-col"  // Add flex-1 and flex-col
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image container with flex-1 to take available space */}
          <div className="flex-1 flex items-center justify-center p-6">
            <motion.img
              src={image}
              alt={title}
              className="object-contain"
              style={{
                transform: 'translateZ(40px)',
                maxHeight: '220px',
                maxWidth: '220px',
                width: 'auto',
                height: 'auto'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Title section at the bottom */}
          <div className="p-6 pt-0 text-center">
            <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
              {title}
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '60%' : 0 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-3"
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
