import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function StatsBanner({ className = 'mt-12' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className={`${className} bg-gradient-to-br from-[#3FA0D6] to-[#2F80B9] rounded-2xl p-8`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-4xl lg:text-5xl text-white mb-2">10K+</p>
          <p className="text-white/90">{t('features.stat1')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-4xl lg:text-5xl text-white mb-2">50+</p>
          <p className="text-white/90">{t('features.stat2')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-4xl lg:text-5xl text-white mb-2">95%</p>
          <p className="text-white/90">{t('features.stat3')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-4xl lg:text-5xl text-white mb-2">24h</p>
          <p className="text-white/90">{t('features.stat4')}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}