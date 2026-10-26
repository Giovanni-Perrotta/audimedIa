const FOOTER_NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'MVP', href: '#mvp' },
  { label: 'Seja parceiro', href: '#parceiro' },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-700 pt-14 pb-8 text-navy-100">
      <div className="container-page">

        {/* RODAPÉ PRINCIPAL — 3 COLUNAS */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">

          {/* COLUNA 1 — IDENTIDADE VISUAL */}
          <div>
            <a
              href="#inicio"
              aria-label="AudiMedIA — Voltar ao início"
              className="inline-flex items-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}logoRodapeTransparente.png`}
                alt="AudiMedIA — Auditoria Inteligente de Contas Médicas"
                className="block h-[70px] w-[270px] max-w-full object-contain object-left"
                loading="lazy"
              />
            </a>

            <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-navy-200">
              Healthtech em desenvolvimento dedicada à auditoria
              inteligente de contas médicas, prevenção de glosas,
              rastreabilidade de informações e eficiência hospitalar.
            </p>
          </div>

          {/* COLUNA 2 — NAVEGAÇÃO */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              Navegação
            </p>

            <ul className="mt-4 space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3 — INFORMAÇÕES */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              Informações
            </p>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#privacidade"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIREITOS AUTORAIS */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-600 pt-6 sm:flex-row">

          <p className="text-center text-xs text-navy-300 sm:text-left">
            © {new Date().getFullYear()} AudiMedIA — Auditoria de Contas Médicas.
            Todos os direitos reservados.
          </p>

          <p className="text-center text-xs text-navy-300 sm:text-right">
            Idealizado por Regina Perrotta.
          </p>

        </div>

      </div>
    </footer>
  );
}
