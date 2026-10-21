import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/constants/nav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex items-center justify-between py-3.5">
        <a href="#inicio" aria-label="AudiMedIA — Início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#parceiro" className="btn-primary hidden lg:inline-flex !px-5 !py-2.5">
          Seja Parceiro
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[32rem]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-brand-50 hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#parceiro"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Seja Parceiro
          </a>
        </nav>
      </div>
    </header>
  );
}
