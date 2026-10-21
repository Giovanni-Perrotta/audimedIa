import { Handshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const BENEFITS = [
  'Acesso antecipado às capacidades em desenvolvimento',
  'Influência direta no desenho de regras e fluxos',
  'Intercâmbio próximo com a equipe idealizadora',
  'Acompanhamento da evolução da plataforma',
];

export function PartnerCta() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-navy-700 p-8 text-white shadow-xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <Handshake className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                  Participe dos testes-piloto
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy-100">
                  Buscamos hospitais, clínicas, operadoras e outras instituições de saúde
                  interessadas em contribuir com a construção da AudiMedIA. Sua participação
                  ajuda a moldar uma solução que realmente atenda à realidade brasileira.
                </p>
                <ul className="mt-7 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-navy-50">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm sm:p-8">
                <p className="text-sm font-medium text-navy-50">
                  Queremos conversar com você.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-100">
                  Preencha o formulário abaixo e nossa equipe entrará em contato para
                  apresentar a proposta de participação nos testes-piloto.
                </p>
                <a href="#parceiro" className="btn-accent mt-6 w-full">
                  Quero ser parceiro
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
