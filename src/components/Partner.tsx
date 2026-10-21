import { Handshake } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PartnerForm } from '@/components/PartnerForm';

export function Partner() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="parceiro" className="bg-gradient-to-b from-white to-navy-50 py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left intro */}
            <div className="lg:col-span-2">
              <span className="section-eyebrow">
                <Handshake className="h-3.5 w-3.5" />
                Seja Nosso Parceiro
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
                Vamos construir a AudiMedIA juntos
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-400">
                Instituições parceiras terão acesso antecipado à plataforma em desenvolvimento
                e participação direta na definição de regras e fluxos. Se você atua em auditoria
                hospitalar, gestão de faturamento ou operações, esta é a sua oportunidade.
              </p>
              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <p className="text-sm font-medium text-brand-600">
                  Como funciona a participação
                </p>
                <ol className="mt-3 space-y-2 text-sm text-navy-500">
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-500">1.</span>
                    Você preenche o formulário ao lado.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-500">2.</span>
                    Nossa equipe entra em contato para uma conversa.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-500">3.</span>
                    Definimos juntos o escopo do teste-piloto.
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-7 sm:p-9">
                <h3 className="font-display text-xl font-semibold text-navy-700">
                  Formulário de interesse
                </h3>
                <p className="mt-1 text-sm text-navy-400">
                  Campos com <span className="text-accent-500">*</span> são obrigatórios.
                </p>
                <div className="mt-6">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
