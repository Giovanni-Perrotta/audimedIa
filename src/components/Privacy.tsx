import { ShieldCheck, Lock, Eye, FileText, UserCheck, Mail } from 'lucide-react';

const PRIVACY_SECTIONS = [
  {
    title: '1. Considerações iniciais',
    body: 'Esta página descreve os princípios de tratamento de dados pessoais da AudiMedIA. O texto é uma versão-base e será revisado e aprimorado antes da publicação definitiva, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).',
  },
  {
    title: '2. Dados coletados',
    body: 'Por meio dos formulários de contato e de parceiros, podemos coletar: nome, e-mail, telefone, instituição, cargo e demais informações fornecidas voluntariamente na mensagem. Não solicitamos dados sensíveis de saúde pelos formulários deste site institucional.',
  },
  {
    title: '3. Finalidade do tratamento',
    body: 'Os dados são utilizados para responder a contatos, avaliar interesse em parcerias nos testes-piloto e comunicar avanços relacionados ao projeto. O tratamento ocorre com base no consentimento do titular e na legítima expectativa de resposta ao contato realizado.',
  },
  {
    title: '4. Compartilhamento',
    body: 'Não compartilhamos dados pessoais com terceiros para fins comerciais. Dados poderão ser tratados por provedores de infraestrutura estritamente necessários ao funcionamento do site e de eventuais serviços de formulário, sempre com compromissos de confidencialidade.',
  },
  {
    title: '5. Direitos do titular',
    body: 'Você pode solicitar, a qualquer tempo, acesso, correção, anonimização, bloqueio ou eliminação dos seus dados pessoais, bem como revogar o consentimento concedido. As solicitações podem ser feitas pelo canal de contato disponível no site.',
  },
  {
    title: '6. Medidas de segurança',
    body: 'Adotamos práticas de cuidado no manuseio dos dados. Controles técnicos específicos serão descritos de forma detalhada nesta página à medida que forem implementados e validados. Não divulgamos certificações ou garantias técnicas não comprovadas.',
  },
  {
    title: '7. Menores de idade',
    body: 'Este site institucional não é direcionado a menores de idade e não coleta intencionalmente dados de crianças ou adolescentes.',
  },
  {
    title: '8. Atualizações',
    body: 'Esta política poderá ser atualizada periodicamente. Recomendamos a consulta a esta página para a versão mais recente.',
  },
];

export function Privacy() {
  return (
    <section id="privacidade" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="section-eyebrow">Política de Privacidade</span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
            Versão-base para revisão. Este texto não é a versão definitiva e será atualizado
            antes da publicação. Não reflete controles técnicos não comprovados.
          </p>

          <div className="mt-8 space-y-6">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-semibold text-navy-700">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Lock, label: 'Consentimento' },
              { icon: Eye, label: 'Transparência' },
              { icon: UserCheck, label: 'Direitos do titular' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-navy-50 p-4"
              >
                <item.icon className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-medium text-navy-700">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-navy-700 p-6 text-white">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
            <p className="text-sm leading-relaxed text-navy-50">
              Em caso de dúvidas sobre esta política, utilize o formulário de contato. Esta
              página será revisada e atualizada periodicamente.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-navy-400">
            <Mail className="h-4 w-4" />
            <span>Canal de contato disponível na seção Contato.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
