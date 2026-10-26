import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Mail,
} from 'lucide-react';

const PRIVACY_SECTIONS = [
  {
    title: '1. Apresentação',
    body: 'Esta Política de Privacidade apresenta informações sobre o tratamento de dados pessoais realizado por meio do site institucional da AudiMedIA, projeto de tecnologia em saúde atualmente em fase de desenvolvimento e validação. O tratamento de dados deve observar a Lei nº 13.709/2018, Lei Geral de Proteção de Dados Pessoais (LGPD).',
  },
  {
    title: '2. Dados pessoais coletados',
    body: 'Por meio dos formulários de contato e de participação nos testes-piloto, poderão ser coletados dados como nome, endereço de e-mail, telefone, instituição, cargo e informações fornecidas voluntariamente nas mensagens. Solicitamos que os visitantes não encaminhem dados pessoais sensíveis, prontuários, exames, informações de pacientes ou documentos médicos por esses formulários.',
  },
  {
    title: '3. Finalidades do tratamento',
    body: 'As informações fornecidas poderão ser utilizadas para responder solicitações, estabelecer contato com instituições interessadas no projeto, avaliar possibilidades de participação em testes-piloto e encaminhar comunicações relacionadas ao interesse manifestado pelo titular. O tratamento observará as bases legais aplicáveis a cada finalidade, conforme a LGPD.',
  },
  {
    title: '4. Formulários e serviços externos',
    body: 'Os formulários do site utilizam o serviço FormSubmit para encaminhamento das informações preenchidas ao endereço eletrônico de contato da AudiMedIA. Dessa forma, os dados enviados poderão ser processados pela infraestrutura desse prestador de serviço. Recomendamos que o visitante não inclua informações confidenciais ou dados pessoais sensíveis nas mensagens.',
  },
  {
    title: '5. Compartilhamento de informações',
    body: 'A AudiMedIA não utiliza os dados recebidos pelos formulários para comercialização de informações pessoais. O tratamento poderá envolver prestadores de serviços necessários ao funcionamento do site, à hospedagem e ao encaminhamento de mensagens, observadas as responsabilidades e condições aplicáveis a cada serviço.',
  },
  {
    title: '6. Direitos dos titulares',
    body: 'Nos termos da LGPD, os titulares poderão exercer os direitos legalmente previstos, incluindo confirmação da existência de tratamento, acesso, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação quando cabíveis, informações sobre compartilhamento e revogação do consentimento quando esta for a base legal utilizada.',
  },
  {
    title: '7. Segurança das informações',
    body: 'A proteção das informações pessoais constitui uma diretriz do projeto AudiMedIA. O desenvolvimento da plataforma considera princípios de segurança da informação, controle de acesso e rastreabilidade. As medidas de segurança específicas do futuro software serão definidas, implementadas e avaliadas conforme o avanço do desenvolvimento, não se confundindo com as funcionalidades atualmente disponíveis neste site institucional.',
  },
  {
    title: '8. Armazenamento e conservação',
    body: 'As informações encaminhadas pelos formulários poderão permanecer nas mensagens eletrônicas recebidas e nos ambientes dos prestadores envolvidos no processamento e encaminhamento. Sua conservação deverá observar a necessidade relacionada às finalidades do tratamento, eventuais obrigações legais e os direitos dos titulares.',
  },
  {
    title: '9. Crianças e adolescentes',
    body: 'Este site institucional é direcionado a profissionais, empresas e instituições interessadas no desenvolvimento da AudiMedIA. Não é destinado especificamente a crianças ou adolescentes e não solicita intencionalmente seus dados pessoais.',
  },
  {
    title: '10. Atualizações desta política',
    body: 'Esta Política de Privacidade poderá ser atualizada para refletir alterações no funcionamento do site, nos serviços utilizados, nas atividades de tratamento de dados e nas exigências legais aplicáveis.',
  },
  {
    title: '11. Canal de contato',
    body: 'Solicitações relacionadas à privacidade e ao exercício dos direitos previstos na LGPD poderão ser encaminhadas ao endereço eletrônico regislegisassessoria@gmail.com.',
  },
];

export function Privacy() {
  return (
    <section
      id="privacidade"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl">

          {/* Identificação */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <ShieldCheck
                className="h-6 w-6"
                aria-hidden="true"
              />
            </div>

            <span className="section-eyebrow">
              Privacidade e proteção de dados
            </span>
          </div>

          {/* Título */}
          <h1 className="mt-6 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
            Política de Privacidade
          </h1>

          <p className="mt-5 text-base leading-relaxed text-navy-400">
            A AudiMedIA valoriza a transparência no tratamento
            das informações fornecidas pelos visitantes de
            seu site institucional.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-navy-400">
            Esta política refere-se ao site institucional e
            aos seus formulários de contato e participação
            nos testes-piloto. Não constitui a política
            definitiva de tratamento de dados do software
            AudiMedIA, atualmente em desenvolvimento.
          </p>

          {/* Seções da política */}
          <div className="mt-10 space-y-7">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-semibold text-navy-700">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Princípios */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Lock,
                label: 'Proteção de dados',
              },
              {
                icon: Eye,
                label: 'Transparência',
              },
              {
                icon: UserCheck,
                label: 'Direitos do titular',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-navy-50 p-4"
              >
                <item.icon
                  className="h-5 w-5 text-brand-500"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium text-navy-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Aviso institucional */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-navy-700 p-6 text-white">
            <FileText
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-300"
              aria-hidden="true"
            />

            <p className="text-sm leading-relaxed text-navy-50">
              A AudiMedIA encontra-se em fase de desenvolvimento
              e validação. Esta política descreve o tratamento
              de informações relacionado ao site institucional,
              não representando certificação de segurança,
              homologação ou validação das funcionalidades
              previstas para o futuro software.
            </p>
          </div>

          {/* Contato */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-navy-400">
            <Mail
              className="h-4 w-4"
              aria-hidden="true"
            />

            <span>
              Dúvidas sobre privacidade:
            </span>

            <a
              href="mailto:regislegisassessoria@gmail.com"
              className="font-medium text-brand-500 hover:underline"
            >
              regislegisassessoria@gmail.com
            </a>
          </div>

          {/* Data de atualização */}
          <p className="mt-8 border-t border-navy-100 pt-5 text-xs text-navy-400">
            Última atualização: 26 de outubro de 2026.
          </p>

        </div>
      </div>
    </section>
  );
}
