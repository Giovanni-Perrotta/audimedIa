import { Activity, ScanSearch } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 shadow-md shadow-brand-500/30">
        <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
        <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent-400 ring-2 ring-white">
          <ScanSearch className="h-1.5 w-1.5 text-white" strokeWidth={3} />
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-navy-700">
          Audi<span className="text-brand-500">Med</span>
          <span className="text-accent-400">IA</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-navy-300">
          Auditoria de Contas Médicas
        </span>
      </div>
    </div>
  );
}
