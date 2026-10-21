import { MonitorSmartphone, Lock, Layers, Plug, BrainCircuit, Link2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const TECH = [
  {
    icon: MonitorSmartphone,
    title: 'SaaS web responsivo',
    desc: 'Plataforma acessível pelo navegador, sem instalação local, pensada para uso em desktop e tablet.',
  },
  {
    icon: Lock,
    title: 'Segurança e governança de dados',
    desc: 'Cuidados com o tratamento de informações sensíveis, em conformidade com a LGPD e as boas práticas de gestão de acesso.',
  },
  {
    icon: Layers,
    title: 'Arquitetura modular',
    desc: 'Estrutura que separa as capacidades da plataforma em módulos, permitindo evoluir de forma organizada.',
  },
  {
    icon: Plug,
    title: 'Integração via API (futuro)',
    desc: 'Conexão planejada com sistemas hospitalares e operadores para receber e devolver dados de forma estruturada.',
  },
  {
    icon: BrainCircuit,
    title: 'IA preditiva (planejada)',
    desc: 'Etapa futura de evolução: usar modelos para antecipar padrões de risco e apoiar a decisão do auditor.',
  },
  {
    icon: Link2,
    title: 'Blockchain (planejado)',
    desc: 'Estudo de uso de blockchain para registro imutável de etapas de auditoria, como camada futura de rastreabilidade.',
  },
];

export function Technology() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="tecnologia" className="relative overflow-hidden bg-navy-700 py-20 text-white lg:py-28">
      {/* Decorative */}
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
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300">
              Tecnologia
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              Uma base sólida hoje, com evolução planejada
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-100">
              Construímos a AudiMedIA com fundamentos que já nascem sólidos e deixamos
              claramente marcado o que está em estudo para o futuro.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-brand-500 text-white shadow-lg shadow-accent-400/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
