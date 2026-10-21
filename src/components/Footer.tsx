import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/constants/nav';

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-700 pt-16 pb-8 text-navy-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white/5 p-5">
              <Logo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              Plataforma SaaS em desenvolvimento para auditoria inteligente de contas
              médicas, prevenção de glosas e eficiência hospitalar.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
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

          {/* Soluções */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent-300">
              A solução
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#solucoes" className="text-sm text-navy-200 transition-colors hover:text-white">
                  Auditoria de contas
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-sm text-navy-200 transition-colors hover:text-white">
                  Prevenção de glosas
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="text-sm text-navy-200 transition-colors hover:text-white">
                  Tecnologia
                </a>
              </li>
              <li>
                <a href="#mvp" className="text-sm text-navy-200 transition-colors hover:text-white">
                  Status do MVP
                </a>
              </li>
              <li>
                <a href="#parceiro" className="text-sm text-navy-200 transition-colors hover:text-white">
                  Seja parceiro
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
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
                Projeto em fase de desenvolvimento. Informações neste site não constituem
                oferta comercial de produto.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-600 pt-6 sm:flex-row">
          <p className="text-xs text-navy-300">
            © {new Date().getFullYear()} AudiMedIA — Auditoria de Contas Médicas. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-navy-300">
            Idealizado por Regina Perrotta.
          </p>
        </div>
      </div>
    </footer>
  );
}
