import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Shop from './components/Shop';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10">
        <div className="fixed top-4 left-4 z-50">
          <img 
            src="/IMG_1628.png" 
            alt="Logo" 
            className="h-12 w-auto"
            style={{ maxHeight: '48px' }}
          />
        </div>
        <Navigation />
        <Shop />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
}

export default App;
