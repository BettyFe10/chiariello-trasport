import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti | Chiariello Trasporti — Parla con noi" },
      {
        name: "description",
        content:
          "Contatta Chiariello Trasporti: telefono, email e form per richieste rapide. Sede a Napoli, copertura nazionale ed europea.",
      },
      { property: "og:title", content: "Contatti — Chiariello Trasporti" },
      {
        property: "og:description",
        content: "Telefono, email e modulo contatti. Risposta entro 24 ore.",
      },
    ],
  }),
  component: ContattiPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().min(6, "Telefono non valido").max(30),
  messaggio: z.string().trim().min(10, "Scrivi almeno 10 caratteri").max(1000),
});

function ContattiPage() {
  const [loading, setLoading] = useState(false);

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
      toast.success("Messaggio inviato! Ti rispondiamo entro 24 ore.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 text-white md:py-24">
        <div className="container-pro text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Parliamo della tua spedizione
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Siamo a tua disposizione dal lunedì al sabato. Scrivici, chiamaci o passa in sede.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-pro grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary">Recapiti diretti</h2>
            <p className="mt-3 text-muted-foreground">
              Per le richieste urgenti, il telefono è la via più rapida.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefono
                  </div>
                  <a href="tel:+390815550100" className="text-lg font-semibold text-primary hover:text-accent">
                    081 555 0100
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:info@chiariellotrasport.it"
                    className="text-lg font-semibold text-primary hover:text-accent"
                  >
                    info@chiariellotrasport.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Sede operativa
                  </div>
                  <div className="text-base text-foreground">
                    Via dei Trasporti 12<br />80143 Napoli (NA)
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Orari
                  </div>
                  <div className="text-base text-foreground">
                    Lun–Ven 8:00–18:00 · Sab 8:00–13:00<br />
                    <span className="text-sm text-muted-foreground">
                      Servizio urgenze attivo 24/7
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 shadow-card md:p-9"
            >
              <h2 className="text-2xl font-bold text-primary">Scrivici</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Compila il modulo, ti rispondiamo entro 24 ore lavorative.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Nome e cognome *" name="nome" placeholder="Mario Rossi" />
                <Field label="Email *" name="email" type="email" placeholder="mario@azienda.it" />
                <Field label="Telefono *" name="telefono" type="tel" placeholder="+39 333 1234567" />
                <Field label="Azienda" name="azienda" placeholder="Nome azienda (opzionale)" />
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-foreground">Messaggio *</label>
                <textarea
                  name="messaggio"
                  rows={5}
                  required
                  maxLength={1000}
                  placeholder="Raccontaci di cosa hai bisogno…"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>
                <Send className="h-4 w-4" />
                {loading ? "Invio in corso…" : "Invia messaggio"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-pro">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Mappa sede Chiariello Trasporti"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.20%2C40.83%2C14.30%2C40.88&layer=mapnik&marker=40.855%2C14.250"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
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
