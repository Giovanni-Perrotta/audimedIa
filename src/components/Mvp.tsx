import { FlaskConical, Check, Circle, Flag } from 'lucide-react';
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
    desc: 'Construção das capacidades essenciais de auditoria, com foco em importação, aplicação de regras e rastreabilidade.',
  },
  {
    status: 'planned',
    label: 'Próxima etapa',
    title: 'Validação com parceiros',
    desc: 'Testes-piloto com instituições parceiras para ajustar regras e fluxos à realidade de cada cliente.',
  },
  {
    status: 'planned',
    label: 'Futuro',
    title: 'Integração via API',
    desc: 'Conexão estruturada com sistemas hospitalares e operadores para receber e devolver dados.',
  },
  {
    status: 'planned',
    label: 'Futuro',
    title: 'IA preditiva e blockchain',
    desc: 'Camadas planejadas de evolução, com modelos preditivos e registro imutável de etapas de auditoria.',
  },
];

function StatusIcon({ status }: { status: RoadmapPhase['status'] }) {
  if (status === 'done') return <Check className="h-4 w-4" />;
  if (status === 'progress') return <Flag className="h-4 w-4" />;
  return <Circle className="h-3.5 w-3.5" />;
}

export function Mvp() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="mvp" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">
              <FlaskConical className="h-3.5 w-3.5" />
              MVP
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
              Em desenvolvimento, em busca de validação real
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-400">
              A AudiMedIA ainda está em construção. Neste momento, priorizamos o
              desenvolvimento do produto mínimo viável e a busca por instituições parceiras
              dispostas a participar dos testes-piloto.
            </p>
          </div>

          {/* Status banner */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-accent-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-500">
                <FlaskConical className="h-7 w-7" />
                <span className="absolute inset-0 animate-pulse-ring rounded-2xl border-2 border-accent-400" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-navy-700">
                  Status atual: em desenvolvimento
                </p>
                <p className="mt-1 text-sm leading-relaxed text-navy-400">
                  Não é um produto comercialmente disponível ainda. Estamos abrindo conversas
                  com instituições que queiram contribuir para a validação do MVP.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-14">
            <h3 className="text-center font-display text-xl font-semibold text-navy-700">
              Roadmap
            </h3>
            <p className="mt-2 text-center text-sm text-navy-400">
              Etapas planejadas — sem datas fixas, pois dependem do avanço da validação.
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
                  <div className="mt-3 text-xs font-bold text-brand-500">Etapa {i + 1}</div>
                  <h4 className="mt-1 font-display text-base font-semibold text-navy-700">
                    {phase.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
