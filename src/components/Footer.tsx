import { NAV_LINKS } from '@/constants/nav';

const FOOTER_LINKS = NAV_LINKS.filter(
  (link) =>
    !(
      link.href === '#parceiro' ||
      link.href === '#parceiros' ||
      /parceir/i.test(link.label)
    ),
);

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-700 pt-14 pb-8 text-navy-100">
      <div className="container-page">

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">

          {/* IDENTIDADE VISUAL AUDIMEDIA */}
          <div className="lg:col-span-1">

            <a
              href="#inicio"
              aria-label="AudiMedIA — Voltar ao início"
              className="inline-flex items-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}logoRodape.png`}
                alt="AudiMedIA — Auditoria Inteligente de Contas Médicas"
                className="h-auto w-full max-w-[270px] object-contain"
                loading="lazy"
              />
            </a>

            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-navy-200">
              Healthtech em desenvolvimento dedicada à auditoria
              inteligente de contas médicas, prevenção de glosas,
              rastreabilidade de informações e eficiência hospitalar.
            </p>

          </div>

          {/* NAVEGAÇÃO */}
          <div>

            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              Navegação
            </p>

            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
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

          {/* A SOLUÇÃO */}
          <div>

            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              A solução
            </p>

            <ul className="mt-4 space-y-2.5">

              <li>
                <a
                  href="#solucoes"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Auditoria de contas
                </a>
              </li>

              <li>
                <a
                  href="#solucoes"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Prevenção de glosas
                </a>
              </li>

              <li>
                <a
                  href="#tecnologia"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Tecnologia
                </a>
              </li>

              <li>
                <a
                  href="#mvp"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Status do MVP
                </a>
              </li>

              <li>
                <a
                  href="#parceiro"
                  className="text-sm text-navy-200 transition-colors hover:text-white"
                >
                  Seja parceiro
                </a>
              </li>

            </ul>

          </div>

          {/* INFORMAÇÕES LEGAIS */}
          <div>

            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              Legal
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
                  Fale conosco
                </a>
              </li>

            </ul>

            <div className="mt-6 rounded-xl border-l-4 border-accent-400 bg-white/5 p-4">

              <p className="text-xs leading-relaxed text-navy-200">
                Projeto em fase de desenvolvimento e validação.
                As informações apresentadas neste site possuem
                caráter institucional e não constituem oferta
                comercial de produto.
              </p>

            </div>

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
