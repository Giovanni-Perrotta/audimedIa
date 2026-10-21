import {
  FileSearch,
  AlertCircle,
  ShieldCheck,
  BarChart3,
  Route,
  Boxes,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const SOLUTIONS = [
  {
    icon: FileSearch,
    title: 'Auditoria de contas médicas',
    desc: 'Conferência estruturada de contas com organização das informações por item, facilitando a revisão manual e automática.',
  },
  {
    icon: AlertCircle,
    title: 'Identificação de inconsistências',
    desc: 'Cruzamento de dados entre procedimentos, materiais e cobranças para apontar divergências relevantes.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevenção de glosas',
    desc: 'Aplicação de regras antes do faturamento para antecipar problemas que costumam levar a glosas.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios gerenciais',
    desc: 'Visões consolidadas para acompanhamento de ocorrências, tendências e indicadores de auditoria.',
  },
  {
    icon: Route,
    title: 'Rastreabilidade',
    desc: 'Histórico de cada item auditado, com registro das decisões e do caminho percorrido até a validação.',
  },
  {
    icon: Boxes,
    title: 'Gestão de materiais (futuro)',
    desc: 'Módulo planejado para ampliar a governança ao consumo e à conciliação de materiais.',
  },
];

export function Solutions() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="solucoes" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Soluções</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
              Um conjunto de capacidades em desenvolvimento
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-400">
              Módulos pensados para dar clareza ao processo de auditoria, do recebimento dos
              dados até o relatório final.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((item) => (
              <div key={item.title} className="card card-hover group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 text-white shadow-md shadow-brand-500/20 transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-700">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
