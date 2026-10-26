import {
  MonitorSmartphone,
  Lock,
  Layers,
  Plug,
  BrainCircuit,
  Fingerprint,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';

const TECH = [
  {
    icon: MonitorSmartphone,
    title: 'SaaS web responsivo',
    desc: 'Plataforma planejada para acesso pelo navegador, sem instalação local, com interface adaptada para computadores e tablets.',
  },
  {
    icon: Lock,
    title: 'Segurança e governança de dados',
    desc: 'Desenvolvimento orientado à proteção de dados sensíveis, aos princípios da LGPD e às boas práticas de controle de acesso e segurança da informação.',
  },
  {
    icon: Layers,
    title: 'Arquitetura modular',
    desc: 'Estrutura planejada para organizar as funcionalidades em módulos, permitindo personalização por instituição e evolução progressiva da plataforma.',
  },
  {
    icon: Plug,
    title: 'Integração via API (futuro)',
    desc: 'Integrações planejadas com sistemas hospitalares, operadoras e outras plataformas para permitir o intercâmbio estruturado de informações.',
  },
  {
    icon: BrainCircuit,
    title: 'IA preditiva (planejada)',
    desc: 'Evolução futura destinada à identificação de padrões, análise de riscos de glosas e apoio à tomada de decisão dos profissionais responsáveis pela auditoria.',
  },
  {
    icon: Fingerprint,
    title: 'Rastreabilidade e integridade dos registros',
    desc: 'Arquitetura planejada para identificar a origem das informações, preservar o histórico das verificações e registrar alterações realizadas durante os processos de auditoria.',
  },
];

export function Technology() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-navy-700 py-20 text-white lg:py-28"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="container-page">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Cabeçalho da seção */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300">
              Tecnologia
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              Tecnologia planejada para evoluir com segurança
            </h2>

            <p className="mt-5 text-base leading-relaxed text-navy-100">
              A AudiMedIA está em desenvolvimento, com uma arquitetura
              planejada para oferecer segurança, rastreabilidade e
              evolução modular. Conheça as tecnologias previstas
              para o projeto.
            </p>
          </div>

          {/* Cards de tecnologia */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-brand-500 text-white shadow-lg shadow-accent-400/20">
                  <item.icon
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-navy-100">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Aviso sobre estágio de desenvolvimento */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-navy-100">
              <strong className="text-white">
                Projeto em fase de desenvolvimento e validação.
              </strong>{' '}
              As funcionalidades apresentadas representam diretrizes
              e capacidades planejadas para a plataforma, sujeitas
              a evolução conforme os resultados dos testes-piloto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
