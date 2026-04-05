import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// ── Paleta institucional ─────────────────────────────────────────
const GOLD = '#C9A84C';
const NAVY = '#0A0F1E';

// ── Schema de validação ──────────────────────────────────────────
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
    .max(100, { message: 'O nome não pode exceder 100 caracteres.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Introduza um endereço de e-mail válido.' })
    .max(255, { message: 'O e-mail não pode exceder 255 caracteres.' }),
  phone: z
    .string()
    .trim()
    .min(9, { message: 'Introduza um número de telefone válido.' })
    .max(20, { message: 'O número de telefone não pode exceder 20 caracteres.' })
    .optional()
    .or(z.literal('')),
  areaJuridica: z.enum([
    'empresarial',
    'propriedade-intelectual',
    'societario',
    'contencioso',
    'internacional',
    'assessoria',
    'outro',
  ], {
    required_error: 'Seleccione uma área jurídica.',
  }),
  message: z
    .string()
    .trim()
    .min(20, { message: 'A mensagem deve ter pelo menos 20 caracteres.' })
    .max(2000, { message: 'A mensagem não pode exceder 2000 caracteres.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      areaJuridica: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.name,
          email: data.email,
          telefone: data.phone || '—',
          area_juridica: data.areaJuridica,
          mensagem: data.message,
          _subject: `Consulta jurídica — ${data.areaJuridica} — ${data.name}`,
        }),
      });

      if (!response.ok) throw new Error('Falha no envio');

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch {
      form.setError('root', {
        message: 'Não foi possível enviar a mensagem. Por favor, tente novamente ou contacte-nos directamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Estado de sucesso ────────────────────────────────────────
  if (isSuccess) {
    return (
      <motion.div
        className="border border-[#e8e8e6] dark:border-[#1e1e1c] p-8 text-center space-y-4"
        style={{ background: 'rgba(201,168,76,0.04)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-14 mx-auto" style={{ color: GOLD }} />
        </motion.div>
        <h3
          className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem' }}
        >
          Mensagem Enviada
        </h3>
        <p
          className="font-light text-[#777] leading-relaxed text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8' }}
        >
          A sua mensagem foi recebida com sucesso. Um advogado da nossa equipa responderá dentro de 24 a 48 horas úteis.
        </p>
      </motion.div>
    );
  }

  // ── Formulário ───────────────────────────────────────────────
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        {/* Nome Completo */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[10px] tracking-[0.15em] uppercase font-light"
                style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
              >
                Nome Completo *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="O seu nome completo"
                  className="font-light border-border bg-background text-foreground focus:border-[#C9A84C] focus:ring-0 rounded-none h-11 dark:focus:border-[#C9A84C]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[10px] tracking-[0.15em] uppercase font-light"
                style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
              >
                Endereço de E-mail *
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="o.seu.email@exemplo.com"
                  className="font-light border-border bg-background text-foreground focus:border-[#C9A84C] focus:ring-0 rounded-none h-11 dark:focus:border-[#C9A84C]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Telefone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[10px] tracking-[0.15em] uppercase font-light"
                style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
              >
                Telefone / WhatsApp
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+244 9XX XXX XXX"
                  className="font-light border-border bg-background text-foreground focus:border-[#C9A84C] focus:ring-0 rounded-none h-11 dark:focus:border-[#C9A84C]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Área Jurídica */}
        <FormField
          control={form.control}
          name="areaJuridica"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[10px] tracking-[0.15em] uppercase font-light"
                style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
              >
                Área Jurídica *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="font-light border-border bg-background text-foreground focus:ring-0 rounded-none h-11 dark:focus:border-[#C9A84C]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <SelectValue placeholder="Seleccione a área jurídica" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-background border-border z-50 rounded-none">
                  {[
                    { value: 'empresarial',            label: 'Direito Empresarial' },
                    { value: 'propriedade-intelectual', label: 'Propriedade Intelectual' },
                    { value: 'societario',             label: 'Direito Societário' },
                    { value: 'contencioso',            label: 'Contencioso e Arbitragem' },
                    { value: 'internacional',          label: 'Direito Internacional' },
                    { value: 'assessoria',             label: 'Assessoria Estratégica' },
                    { value: 'outro',                  label: 'Outra Matéria Jurídica' },
                  ].map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="font-light text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Mensagem */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[10px] tracking-[0.15em] uppercase font-light"
                style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
              >
                Descrição da Situação Jurídica *
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva de forma sucinta a sua situação jurídica ou a matéria sobre a qual pretende aconselhamento..."
                  className="min-h-36 font-light resize-none border-border bg-background text-foreground focus:border-[#C9A84C] focus:ring-0 rounded-none dark:focus:border-[#C9A84C]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Erro global */}
        {form.formState.errors.root && (
          <div
            className="text-sm font-light p-3 border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#b91c1c' }}
          >
            {form.formState.errors.root.message}
          </div>
        )}

        {/* Nota de confidencialidade */}
        <p
          className="text-[10px] tracking-[0.08em] leading-relaxed"
          style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}
        >
          As informações prestadas são tratadas com total confidencialidade, ao abrigo do sigilo profissional e da legislação angolana de protecção de dados pessoais.
        </p>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 text-sm font-mono tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ background: GOLD, color: NAVY, fontFamily: "'DM Mono', monospace" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              A enviar...
            </>
          ) : (
            'Solicitar Consulta Jurídica'
          )}
        </button>
      </form>
    </Form>
  );
}