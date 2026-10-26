import {
  FlaskConical,
  Check,
  Circle,
  Flag,
  ArrowRight,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';

type RoadmapPhase = {
  status: 'done' | 'progress' | 'planned';
  label: string;
  title: string;
  desc: string;
};

const PHASES: RoadmapPhase[] = [
  {
    status: 'progress',
    label: 'Em andamento',
    title: 'Desenvolvimento do MVP',
    desc: 'Desenvolvimento das capacidades essenciais de auditoria de contas médicas, incluindo importação de informações, aplicação de regras, identificação da origem dos dados e rastreabilidade das verificações.',
  },
  {
    status: 'planned',
    label: 'Próxima etapa',
    title: 'Validação com parceiros',
    desc: 'Realização de testes-piloto com hospitais, clínicas e outras instituições de saúde para avaliar funcionalidades, ajustar regras e aperfeiçoar os fluxos de auditoria.',
  },
  {
    status: 'planned',
    label: 'Futuro',
    title: 'Integração via API',
    desc: 'Desenvolvimento de integrações com sistemas hospitalares, operadoras e outras plataformas para permitir a troca estruturada de informações.',
  },
  {
    status: 'planned',
    label: 'Evolução futura',
    title: 'IA preditiva e novas tecnologias',
    desc: 'Estudo de modelos preditivos para identificação de riscos de glosas e avaliação de tecnologias complementares, como blockchain, para ampliar a integridade e a rastreabilidade dos registros.',
  },
];

function StatusIcon({
  status,
}: {
  status: RoadmapPhase['status'];
}) {
  if (status === 'done') {
    return <Check className="h-4 w-4" aria-hidden="true" />;
  }

  if (status === 'progress') {
    return <Flag className="h-4 w-4" aria-hidden="true" />;
  }

  return <Circle className="h-3.5 w-3.5" aria-hidden="true" />;
}

export function Mvp() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="mvp"
      className="bg-navy-50 py-20 lg:py-28"
    >
      <div className="container-page">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Apresentação do MVP */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">
              <FlaskConical
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
              MVP
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
              Em desenvolvimento, em busca de validação real
            </h2>

            <p className="mt-5 text-base leading-relaxed text-navy-400">
              A AudiMedIA está desenvolvendo seu Produto Mínimo
              Viável (MVP), com foco na auditoria inteligente de
              contas médicas, prevenção de glosas e rastreabilidade
              das informações.
            </p>

            <p className="mt-4 text-base leading-relaxed text-navy-400">
              Nesta fase, buscamos instituições parceiras
              interessadas em contribuir para a validação
              das funcionalidades e o aperfeiçoamento
              dos processos de auditoria.
            </p>
          </div>

          {/* Status atual */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-accent-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-500">
                <FlaskConical
                  className="h-7 w-7"
                  aria-hidden="true"
                />

                <span className="absolute inset-0 animate-pulse-ring rounded-2xl border-2 border-accent-400" />
              </div>

              <div>
                <p className="font-display text-base font-semibold text-navy-700">
                  Status atual: MVP em desenvolvimento
                </p>

                <p className="mt-1 text-sm leading-relaxed text-navy-400">
                  A plataforma ainda não está comercialmente
                  disponível. As funcionalidades estão em
                  desenvolvimento e serão submetidas a
                  validação conforme o avanço do projeto.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-14">
            <h3 className="text-center font-display text-xl font-semibold text-navy-700">
              Roadmap de desenvolvimento
            </h3>

            <p className="mt-2 text-center text-sm text-navy-400">
              Etapas previstas para evolução da AudiMedIA.
              O cronograma poderá ser ajustado conforme
              o desenvolvimento e os resultados dos testes.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PHASES.map((phase, i) => (
                <div
                  key={phase.title}
                  className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${
                        phase.status === 'progress'
                          ? 'bg-accent-400'
                          : phase.status === 'done'
                          ? 'bg-green-500'
                          : 'bg-navy-300'
                      }`}
                    >
                      <StatusIcon status={phase.status} />
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      {phase.label}
                    </span>
                  </div>

                  <div className="mt-3 text-xs font-bold text-brand-500">
                    Etapa {i + 1}
                  </div>

                  <h4 className="mt-1 font-display text-base font-semibold text-navy-700">
                    {phase.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-navy-400">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Convite aos parceiros */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-accent-200 bg-white px-6 py-8 text-center shadow-sm sm:px-10">
            <h3 className="font-display text-xl font-bold text-navy-700 sm:text-2xl">
              Sua instituição pode participar da construção da AudiMedIA
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-navy-400 sm:text-base">
              Estamos buscando hospitais, clínicas, operadoras
              e outras instituições de saúde interessadas
              em participar dos testes-piloto e contribuir
              para o desenvolvimento de uma solução
              alinhada às necessidades reais do setor.
            </p>

            <a
              href="#parceiro"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              Quero participar dos testes-piloto

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
