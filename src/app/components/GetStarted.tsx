import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { StoreButtons } from './StoreButtons';

export function GetStarted() {
  const { t } = useLanguage();

  return (
    <section id="commencez-l-aventure" className="py-12 bg-[#F4F6F8] dark:bg-[#262626]">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t('start.badge')} variant="red" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('start.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('start.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <StoreButtons className="max-w-3xl mx-auto grid gap-4 md:grid-cols-2 items-center" />
        </motion.div>
      </div>
    </section>
  );
}