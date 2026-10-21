import { Hospital, Stethoscope, HeartHandshake, Building2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const INSTITUTIONS = [
  { icon: Hospital, title: 'Hospitais', desc: 'Fluxos complexos de contas e materiais, com múltiplos convênios.' },
  { icon: Building2, title: 'Clínicas', desc: 'Processos menores em volume, mas igualmente sensíveis a glosas.' },
  { icon: HeartHandshake, title: 'Operadoras', desc: 'Necessidade de conferência consistente e rastreável das contas recebidas.' },
  { icon: Stethoscope, title: 'Outras instituições', desc: 'Demais organizações de saúde com fluxo de faturamento auditável.' },
];

export function Customization() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="section-eyebrow">Personalização</span>
              <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
                Módulos e regras que se adaptam à sua instituição
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-400">
                Cada instituição lida com realidades, tabelas e fluxos próprios. Por isso,
                a AudiMedIA está sendo desenhada para permitir a configuração de regras e
                a ativação de módulos conforme o perfil de cada cliente.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-400">
                A personalização será aprimorada ao longo do desenvolvimento do produto,
                em diálogo com as instituições parceiras que participarem dos testes-piloto.
              </p>
              <div className="mt-8 rounded-2xl border-l-4 border-accent-400 bg-accent-50 p-5">
                <p className="text-sm font-medium text-navy-700">
                  Quer ajustar a AudiMedIA à realidade do seu fluxo? Participe dos testes-piloto
                  e ajude a moldar o produto.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {INSTITUTIONS.map((item) => (
                <div key={item.title} className="card card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
