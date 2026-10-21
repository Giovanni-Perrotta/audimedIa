import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Solutions } from '@/components/Solutions';
import { HowItWorks } from '@/components/HowItWorks';
import { Technology } from '@/components/Technology';
import { Customization } from '@/components/Customization';
import { Mvp } from '@/components/Mvp';
import { PartnerCta } from '@/components/PartnerCta';
import { Partner } from '@/components/Partner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Privacy } from '@/components/Privacy';

type Route = 'home' | 'privacy';

function getRoute(): Route {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#privacidade' || hash === '#/privacidade') return 'privacy';
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      if (route === 'home') {
        const hash = window.location.hash;
        if (hash && hash !== '#inicio') {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [route]);

  if (route === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Privacy />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <HowItWorks />
        <Technology />
        <Customization />
        <Mvp />
        <PartnerCta />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
