import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Loader2, Send, CheckCircle2, CalendarClock, Mail, MessageSquare } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { validateEmail, type FieldError } from '@/utils/validation';

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL: ContactData = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [data, setData] = useState<ContactData>(INITIAL);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate(): boolean {
    const errs: FieldError = {};
    if (!data.name.trim()) errs.name = 'Informe seu nome.';
    if (!data.email.trim()) {
      errs.email = 'Informe seu e-mail.';
    } else if (!validateEmail(data.email)) {
      errs.email = 'E-mail inválido.';
    }
    if (!data.subject.trim()) errs.subject = 'Informe o assunto.';
    if (!data.message.trim()) errs.message = 'Escreva sua mensagem.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('error'), 800);
  }

  return (
    <section id="contato" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: CTA */}
            <div>
              <span className="section-eyebrow">
                <CalendarClock className="h-3.5 w-3.5" />
                Contato
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-navy-700 sm:text-4xl">
                Vamos agendar uma conversa
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-400">
                Queremos entender como a AudiMedIA pode ajudar a sua instituição a organizar
                a auditoria de contas médicas. Use o formulário para iniciar o diálogo —
                entraremos em contato.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-700">Canal de contato</p>
                    <p className="mt-0.5 text-sm text-navy-400">
                      Utilize o formulário ao lado para iniciar a conversa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-700">Agendamento</p>
                    <p className="mt-0.5 text-sm text-navy-400">
                      Após o contato, agendamos uma conversa para apresentar a proposta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-green-600" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-700">
                    Mensagem registrada!
                  </h3>
                  <p className="mt-2 text-sm text-navy-400">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === 'error' && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                      Ainda não configuramos o envio automático deste formulário. Em breve a
                      integração estará ativa — até lá, utilize o canal do formulário de
                      parceiro.
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-navy-700">
                        Nome <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-xs font-medium text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-navy-700">
                        E-mail <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs font-medium text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-subject" className="mb-1.5 block text-sm font-medium text-navy-700">
                      Assunto <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="c-subject"
                      name="subject"
                      type="text"
                      value={data.subject}
                      onChange={handleChange}
                      placeholder="Sobre o que gostaria de falar?"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
                      }`}
                    />
                    {errors.subject && <p className="mt-1 text-xs font-medium text-red-500">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-navy-700">
                      Mensagem <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem..."
                      rows={5}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs font-medium text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
