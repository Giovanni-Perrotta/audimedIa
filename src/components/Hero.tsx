import { ArrowRight, Handshake, ShieldCheck, FileSearch, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#14243d 1px, transparent 1px), linear-gradient(90deg, #14243d 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-eyebrow animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Healthtech em desenvolvimento
          </div>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-700 sm:text-5xl lg:text-6xl">
            Inteligência para transformar a{' '}
            <span className="relative whitespace-nowrap text-brand-500">
              auditoria
              <svg
                className="absolute -bottom-2 left-0 h-2.5 w-full text-accent-400"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            de contas médicas
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-400">
            Prevenção de glosas antes do faturamento, integridade dos dados e eficiência
            hospitalar. A AudiMedIA está sendo construída para dar rastreabilidade e clareza
            a cada item auditado.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#solucoes" className="btn-primary w-full sm:w-auto">
              Conheça a solução
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#parceiro" className="btn-outline w-full sm:w-auto">
              <Handshake className="h-4 w-4 text-accent-500" />
              Seja parceiro nos testes
            </a>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: FileSearch,
              title: 'Identificação de inconsistências',
              desc: 'Cruzamento de dados para apontar divergências antes do envio.',
            },
            {
              icon: ShieldCheck,
              title: 'Prevenção de glosas',
              desc: 'Regras aplicadas antecipadamente para reduzir perdas.',
            },
            {
              icon: TrendingUp,
              title: 'Eficiência hospitalar',
              desc: 'Histórico rastreável e relatórios para decisão gerencial.',
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="card card-hover animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.12}s`, opacity: 0 }}
            >
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
    </section>
  );
}
