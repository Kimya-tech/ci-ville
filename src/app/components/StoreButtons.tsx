import androidIcon from '../../assets/android.png';
import appleIcon from '../../assets/apple.png';
import { useLanguage } from '../contexts/LanguageContext';

type StoreButtonsProps = {
  className?: string;
  imageClassName?: string;
};

export function StoreButtons({ className = '', imageClassName = '' }: StoreButtonsProps) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      <a
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t('tools.android')}
        className="group inline-flex justify-center rounded-[1.75rem] transition-transform hover:-translate-y-1"
      >
        <img
          src={androidIcon}
          alt={t('tools.android')}
          className={`w-full max-w-[276px] h-auto object-contain drop-shadow-[0_16px_30px_rgba(47,128,185,0.2)] group-hover:drop-shadow-[0_20px_34px_rgba(47,128,185,0.28)] transition-all ${imageClassName}`.trim()}
        />
      </a>

      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t('tools.apple')}
        className="group inline-flex justify-center rounded-[1.75rem] transition-transform hover:-translate-y-1"
      >
        <img
          src={appleIcon}
          alt={t('tools.apple')}
          className={`w-full max-w-[276px] h-auto object-contain drop-shadow-[0_16px_30px_rgba(47,128,185,0.2)] group-hover:drop-shadow-[0_20px_34px_rgba(47,128,185,0.28)] transition-all ${imageClassName}`.trim()}
        />
      </a>
    </div>
  );
}