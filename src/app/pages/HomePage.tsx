import { CollaborativeTools } from '../components/CollaborativeTools';
import { GetStarted } from '../components/GetStarted';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { StatsBanner } from '../components/StatsBanner';

export function HomePage() {
  return (
    <main>
      <Hero />
      <CollaborativeTools />
      <HowItWorks />
      <GetStarted />
      <section className="py-12 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <StatsBanner className="mt-0" />
        </div>
      </section>
    </main>
  );
}