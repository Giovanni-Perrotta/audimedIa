import { Upload, ListChecks, AlertTriangle, UserCheck, FileBarChart, History } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  {
    icon: Upload,
    title: 'Importação de dados',
    desc: 'Recepção das contas e dos dados relacionados em formato estruturado para início da análise.',
  },
  {
    icon: ListChecks,
    title: 'Aplicação de regras',
    desc: 'Conjunto de regras configuradas percorre os itens verificando compatibilidade e coerência.',
  },
  {
    icon: AlertTriangle,
    title: 'Identificação de riscos',
    desc: 'Itens potencialmente inconsistentes são destacados para revisão atenciosa.',
  },
  {
    icon: UserCheck,
    title: 'Análise e validação humana',
    desc: 'Profissionais de auditoria revisam os apontamentos e confirmam as decisões.',
  },
  {
    icon: FileBarChart,
    title: 'Relatórios',
    desc: 'Geração de relatórios consolidados para gestão e acompanhamento das ocorrências.',
  },
  {
    icon: History,
    title: 'Histórico rastreável',
    desc: 'Cada decisão fica registrada, permitindo reconstruir o caminho da auditoria.',
  },
];

export function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Como funciona</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
              O fluxo projetado para a auditoria
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-400">
              Da importação dos dados ao histórico rastreável, cada etapa está pensada para
              dar segurança e eficiência ao time de auditoria.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-200 via-accent-200 to-brand-200 lg:block" />

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative flex gap-5 lg:flex-row ${
                    i % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''
                  }`}
                >
                  {/* Node dot */}
                  <div className="absolute left-1/2 top-3 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-accent-400 shadow lg:block" />

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy-700">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-navy-400">{step.desc}</p>
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
