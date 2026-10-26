
import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { validateEmail, validatePhone, type FieldError } from '@/utils/validation';

type FormData = {
  name: string;
  institution: string;
  role: string;
  email: string;
  phone: string;
  institutionType: string;
  interest: string;
  message: string;
  consent: boolean;
};

const INITIAL: FormData = {
  name: '',
  institution: '',
  role: '',
  email: '',
  phone: '',
  institutionType: '',
  interest: '',
  message: '',
  consent: false,
};

const INSTITUTION_TYPES = [
  'Hospital',
  'Clínica',
  'Operadora de saúde',
  'Consultório / Rede',
  'Outra instituição de saúde',
];

const INTERESTS = [
  'Participar dos testes-piloto',
  'Apenas conhecer a solução',
  'Parceria técnica / desenvolvimento',
  'Investimento / Apoio',
];

export function PartnerForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

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
    if (!data.institution.trim()) errs.institution = 'Informe a instituição.';
    if (!data.role.trim()) errs.role = 'Informe seu cargo.';

    if (!data.email.trim()) {
      errs.email = 'Informe seu e-mail.';
    } else if (!validateEmail(data.email)) {
      errs.email = 'E-mail inválido.';
    }

    if (!data.phone.trim()) {
      errs.phone = 'Informe seu telefone.';
    } else if (!validatePhone(data.phone)) {
      errs.phone = 'Telefone inválido (use DDD + número).';
    }

    if (!data.institutionType) {
      errs.institutionType = 'Selecione o tipo de instituição.';
    }

    if (!data.interest) {
      errs.interest = 'Selecione seu interesse.';
    }

    if (!data.consent) {
      errs.consent = 'É necessário aceitar o consentimento LGPD.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === 'submitting' || !validate()) return;

    setStatus('submitting');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/regislegisassessoria@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: 'AudiMedIA - Novo interesse em parceria',
            _replyto: data.email.trim(),
            _template: 'table',
            name: data.name.trim(),
            institution: data.institution.trim(),
            role: data.role.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            institutionType: data.institutionType,
            interest: data.interest,
            message: data.message.trim() || 'Não informada',
            consent: 'Sim - autorizou contato sobre testes-piloto',
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Falha na solicitação de envio.');
      }

      const result: { success?: boolean | string } = await response.json();

      if (result.success !== true && result.success !== 'true') {
        throw new Error('O serviço não confirmou o recebimento.');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600" />
        <h3 className="mt-5 font-display text-xl font-semibold text-navy-700">
          Solicitação registrada!
        </h3>
        <p className="mt-2 text-sm text-navy-400">
          Obrigado pelo interesse na AudiMedIA. Nossa equipe entrará em contato
          pelo e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            Não foi possível confirmar o envio. Tente novamente ou escreva
            para regislegisassessoria@gmail.com.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nome completo"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Seu nome"
          required
        />

        <Field
          label="Instituição"
          name="institution"
          value={data.institution}
          onChange={handleChange}
          error={errors.institution}
          placeholder="Nome da instituição"
          required
        />

        <Field
          label="Cargo"
          name="role"
          value={data.role}
          onChange={handleChange}
          error={errors.role}
          placeholder="Seu cargo"
          required
        />

        <Field
          label="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="seu@email.com"
          required
        />

        <Field
          label="Telefone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="(11) 99999-9999"
          required
        />

        <SelectField
          label="Tipo de instituição"
          name="institutionType"
          value={data.institutionType}
          onChange={handleChange}
          error={errors.institutionType}
          options={INSTITUTION_TYPES}
          placeholder="Selecione"
          required
        />
      </div>

      <SelectField
        label="Seu interesse"
        name="interest"
        value={data.interest}
        onChange={handleChange}
        error={errors.interest}
        options={INTERESTS}
        placeholder="Selecione"
        required
      />

      <TextArea
        label="Mensagem (opcional)"
        name="message"
        value={data.message}
        onChange={handleChange}
        placeholder="Conte-nos brevemente sobre seu interesse ou expectativa."
      />

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-navy-100 bg-navy-50 p-4 transition-colors hover:bg-navy-100">
        <input
          type="checkbox"
          name="consent"
          checked={data.consent}
          onChange={handleChange}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy-300 text-brand-500 focus:ring-brand-400"
        />

       <span className="text-sm leading-relaxed text-navy-500">
  Li a{' '}
  <a
    href="#privacidade"
    onClick={(e) => e.stopPropagation()}
    className="font-medium text-brand-500 underline"
  >
    Política de Privacidade
  </a>{' '}
  e autorizo o tratamento dos meus dados pessoais
  para que a AudiMedIA entre em contato comigo
  sobre o interesse manifestado neste formulário.
</span>
      </label>

      {errors.consent && (
        <p className="text-xs font-medium text-red-500">
          {errors.consent}
        </p>
      )}

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
            Enviar interesse
          </>
        )}
      </button>
    </form>
  );
}

/* ---- Field components ---- */

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  required,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-navy-700"
      >
        {label}{' '}
        {required && <span className="text-accent-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-300 focus:ring-red-200'
            : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
        }`}
      />

      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-navy-700"
      >
        {label}{' '}
        {required && <span className="text-accent-500">*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-300 focus:ring-red-200'
            : 'border-navy-200 focus:border-brand-400 focus:ring-brand-100'
        } ${!value ? 'text-navy-300' : ''}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="text-navy-700"
          >
            {opt}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-navy-700"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-700 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
