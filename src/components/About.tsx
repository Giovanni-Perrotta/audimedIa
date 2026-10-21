import { Sparkles, Target, AlertTriangle, Compass } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: text */}
            <div>
              <span className="section-eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Sobre a AudiMedIA
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
                Uma healthtech pensada para a integridade do faturamento hospitalar
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-400">
                A AudiMedIA é uma startup brasileira idealizada por{' '}
                <span className="font-semibold text-navy-700">Regina Perrotta</span>,
                dedicada a desenvolver uma plataforma SaaS que torna a auditoria de contas
                médicas mais inteligente, rastreável e eficiente.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-400">
                O projeto nasce de uma observação concreta: inconsistências no faturamento
                geram glosas, retrabalho e perdas relevantes para hospitais e operadoras.
                Nossa missão é construir uma solução que ajude a prevenir esses problemas
                antes que se consolidem.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-400">
                Estamos em fase de desenvolvimento e validação do MVP, em diálogo com
                instituições parceiras para construir o produto certo para a realidade
                brasileira.
              </p>
            </div>

            {/* Right: cards */}
            <div className="grid gap-5">
              {[
                {
                  icon: Target,
                  title: 'Nosso propósito',
                  desc: 'Devolver previsibilidade e clareza ao processo de auditoria, com dados organizados e decisões documentadas.',
                },
                {
                  icon: AlertTriangle,
                  title: 'O problema',
                  desc: 'Divergências entre cobrança e procedimento geram glosas, atrasos no pagamento e desgaste entre hospitais e operadoras.',
                },
                {
                  icon: Compass,
                  title: 'Nossa direção',
                  desc: 'Construir uma plataforma modular, com regras configuráveis, que se adapte a diferentes fluxos institucionais.',
                },
              ].map((item) => (
                <div key={item.title} className="card card-hover flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-700">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
