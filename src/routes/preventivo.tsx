import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, Send, ShieldCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/preventivo")({
  head: () => ({
    meta: [
      { title: "Richiedi preventivo trasporto gratuito | Chiariello Trasporti" },
      {
        name: "description",
        content:
          "Compila il modulo e ricevi un preventivo personalizzato per il tuo trasporto entro 24 ore. Servizio gratuito e senza impegno.",
      },
      { property: "og:title", content: "Preventivo gratuito — Chiariello Trasporti" },
      {
        property: "og:description",
        content:
          "Preventivo trasporto in 24 ore. Tariffe trasparenti, nessun impegno.",
      },
    ],
  }),
  component: PreventivoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Nome obbligatorio").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().min(6, "Telefono non valido").max(30),
  azienda: z.string().trim().max(150).optional(),
  tipoMerce: z.string().trim().min(2, "Indica il tipo di merce").max(150),
  peso: z.string().trim().min(1, "Indica il peso").max(50),
  dimensioni: z.string().trim().min(1, "Indica le dimensioni").max(150),
  partenza: z.string().trim().min(2, "Inserisci il luogo di partenza").max(150),
  destinazione: z.string().trim().min(2, "Inserisci la destinazione").max(150),
  urgenza: z.string().min(1, "Seleziona l'urgenza"),
  note: z.string().trim().max(1000).optional(),
});

function PreventivoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? "Controlla i campi");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  if (success) {
    return (
      <section className="py-24 md:py-32">
        <div className="container-pro mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow">
            <Check className="h-8 w-8" strokeWidth={3} />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-primary md:text-4xl">
            Richiesta ricevuta!
          </h1>
          <p className="mt-4 text-muted-foreground">
            Grazie. Un nostro responsabile ti contatterà entro <strong>24 ore lavorative</strong> con
            un preventivo dettagliato.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">Per richieste urgenti chiama subito:</p>
          <a
            href="tel:+390815550100"
            className="mt-2 inline-flex items-center gap-2 text-xl font-bold text-accent hover:underline"
          >
            <Phone className="h-5 w-5" /> 081 555 0100
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-hero py-16 text-white md:py-20">
        <div className="container-pro text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Preventivo gratuito · Risposta in 24h
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Richiedi un preventivo su misura
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Più dettagli ci dai, più precisa sarà la nostra offerta. Ci vogliono 2 minuti.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          {/* Vantaggi */}
          <aside className="space-y-5 lg:col-span-1">
            {[
              {
                icon: Clock,
                title: "Risposta in 24 ore",
                desc: "Ti ricontattiamo via email o telefono con un'offerta dettagliata.",
              },
              {
                icon: ShieldCheck,
                title: "Nessun impegno",
                desc: "Il preventivo è completamente gratuito e non vincolante.",
              },
              {
                icon: Check,
                title: "Tariffe trasparenti",
                desc: "Nessun costo nascosto: ti diciamo subito quanto e perché.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-primary">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}

            <div className="rounded-xl bg-primary p-5 text-white">
              <p className="text-sm text-white/70">Spedizione urgente?</p>
              <a
                href="tel:+390815550100"
                className="mt-2 flex items-center gap-2 text-lg font-bold text-accent"
              >
                <Phone className="h-5 w-5" /> 081 555 0100
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-8 rounded-2xl border border-border bg-card p-7 shadow-card md:p-10 lg:col-span-2"
          >
            <FormSection
              step="1"
              title="I tuoi dati"
              desc="Per ricontattarti con l'offerta personalizzata."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome e cognome *" name="nome" placeholder="Mario Rossi" />
                <Field label="Azienda" name="azienda" placeholder="Nome azienda" />
                <Field label="Email *" name="email" type="email" placeholder="mario@azienda.it" />
                <Field label="Telefono *" name="telefono" type="tel" placeholder="+39 333 1234567" />
              </div>
            </FormSection>

            <FormSection
              step="2"
              title="Dettagli della merce"
              desc="Più precisione = preventivo più accurato."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Tipo di merce *"
                  name="tipoMerce"
                  placeholder="Es. pallet alimentari, mobili…"
                />
                <Field label="Peso totale (kg) *" name="peso" placeholder="Es. 350 kg" />
                <div className="sm:col-span-2">
                  <Field
                    label="Dimensioni / numero pallet *"
                    name="dimensioni"
                    placeholder="Es. 2 pallet 80x120x180 cm"
                  />
                </div>
              </div>
            </FormSection>

            <FormSection step="3" title="Tratta e tempi" desc="Da dove a dove e quando.">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Partenza *"
                  name="partenza"
                  placeholder="Città / CAP di ritiro"
                />
                <Field
                  label="Destinazione *"
                  name="destinazione"
                  placeholder="Città / CAP di consegna"
                />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">Urgenza *</label>
                  <select
                    name="urgenza"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="" disabled>Seleziona…</option>
                    <option value="standard">Standard (3-5 giorni)</option>
                    <option value="rapida">Rapida (24-48 ore)</option>
                    <option value="urgente">Urgente (in giornata)</option>
                    <option value="programmata">Programmata (data specifica)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">Note aggiuntive</label>
                  <textarea
                    name="note"
                    rows={4}
                    maxLength={1000}
                    placeholder="Sponda idraulica, orario di consegna preferito, fragili…"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
            </FormSection>

            <Button type="submit" variant="cta" size="xl" className="w-full" disabled={loading}>
              <Send className="h-5 w-5" />
              {loading ? "Invio in corso…" : "Invia richiesta preventivo"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Inviando accetti la nostra informativa privacy. Non condividiamo i tuoi dati.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function FormSection({
  step,
  title,
  desc,
  children,
}: {
  step: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">
          {step}
        </span>
        <div>
          <h2 className="text-lg font-bold text-primary">{title}</h2>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={label.includes("*")}
        maxLength={255}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
