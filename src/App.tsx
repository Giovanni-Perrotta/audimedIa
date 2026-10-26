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

  if (hash === '#privacidade' || hash === '#/privacidade') {
    return 'privacy';
  }

  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    // Evita que o navegador restaure uma posição antiga
    // ao alternar entre a página inicial e a política.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleNavigation = () => {
      const hash = window.location.hash;
      const nextRoute = getRoute();

      // Atualiza a página exibida.
      setRoute(nextRoute);

      // Política de Privacidade: sempre abrir no topo.
      if (nextRoute === 'privacy') {
        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
          });
        });

        return;
      }

      // Página inicial: navegar até a seção solicitada.
      if (!hash || hash === '#inicio') {
        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });

        return;
      }

      // Aguarda o React renderizar a página inicial
      // antes de procurar o elemento de destino.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const targetId = decodeURIComponent(hash.substring(1));

          const element = document.getElementById(targetId);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        });
      });
    };

    // Executa também ao abrir o site diretamente
    // por um link contendo #contato ou #privacidade.
    handleNavigation();

    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);

      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // PÁGINA DA POLÍTICA DE PRIVACIDADE
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

  // PÁGINA PRINCIPAL
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
