import { createFileRoute } from "@tanstack/react-router";
import { Truck, Heart, TrendingUp, Users, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/lavora-con-noi")({
  head: () => ({
    meta: [
      { title: "Lavora con noi | Chiariello Trasport — Posizioni aperte" },
      {
        name: "description",
        content:
          "Vuoi entrare nel team di Chiariello Trasport? Cerchiamo autisti C+E e personale logistico. Candidati e fai crescere la tua carriera con noi.",
      },
      { property: "og:title", content: "Lavora con noi — Chiariello Trasport" },
      {
        property: "og:description",
        content:
          "Posizioni aperte per autisti e personale logistico. Inviaci la tua candidatura.",
      },
    ],
  }),
  component: LavoraConNoiPage,
});

const perks = [
  {
    icon: Heart,
    title: "Ambiente familiare",
    desc: "Siamo un'azienda a conduzione familiare: qui non sei un numero, sei parte della squadra.",
  },
  {
    icon: Truck,
    title: "Mezzi nuovi e curati",
    desc: "Lavorerai con camion moderni, sempre in ordine, dotati di sponda idraulica.",
  },
  {
    icon: TrendingUp,
    title: "Crescita professionale",
    desc: "Formazione continua e percorsi di crescita reali per chi dimostra impegno.",
  },
  {
    icon: Users,
    title: "Pagamenti puntuali",
    desc: "Stipendio e rimborsi sempre regolari. Trasparenza prima di tutto.",
  },
];

const positions = [
  {
    title: "Autista Patente C+E",
    type: "Tempo pieno · Indeterminato",
    desc: "Cerchiamo autisti con patente C+E e CQC merci per trasporti su tutto il territorio nazionale, con camion dotati di sponda idraulica.",
    requirements: [
      "Patente C+E e CQC merci in corso di validità",
      "Esperienza alla guida di mezzi pesanti",
      "Capacità di gestione documentale (DDT, CMR)",
      "Affidabilità, puntualità, cura del mezzo",
    ],
  },
  {
    title: "Aiuto Autista / Magazziniere",
    type: "Tempo pieno",
    desc: "Figura di supporto per operazioni di carico, scarico e movimentazione merce in magazzino e durante le consegne.",
    requirements: [
      "Esperienza con transpallet e movimentazione",
      "Disponibilità a trasferte giornaliere",
      "Predisposizione al lavoro di squadra",
      "Patente B (gradita C)",
    ],
  },
  {
    title: "Candidatura Spontanea",
    type: "Tutte le posizioni",
    desc: "Anche se non vedi una posizione adatta a te, inviaci comunque il tuo CV: valutiamo profili interessanti per future esigenze.",
    requirements: [
      "Inviaci CV aggiornato",
      "Indica il ruolo che ti interessa",
      "Disponibilità geografica e oraria",
      "Una breve presentazione",
    ],
  },
];

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().min(6, "Telefono non valido").max(30),
  posizione: z.string().trim().min(1, "Seleziona una posizione"),
  messaggio: z.string().trim().min(10, "Raccontaci qualcosa di te (minimo 10 caratteri)").max(1500),
});

function LavoraConNoiPage() {
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
      toast.success("Candidatura inviata! Ti contatteremo a breve.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 text-white md:py-28">
        <div className="container-pro text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Lavora con noi
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Sali a bordo della nostra squadra
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Cerchiamo persone serie che amano il proprio mestiere. Se ti riconosci
            in questi valori, parliamone.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 md:py-24">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Perché lavorare con noi
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Un'azienda dove le persone contano davvero
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Posizioni aperte
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Stiamo cercando queste figure
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {positions.map((pos) => (
              <article
                key={pos.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {pos.type}
                </div>
                <h3 className="mt-2 text-xl font-bold text-primary">{pos.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pos.desc}</p>
                <ul className="mt-5 space-y-2">
                  {pos.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-24">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Candidati ora
              </span>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                Inviaci la tua candidatura
              </h2>
              <p className="mt-4 text-muted-foreground">
                Compila il modulo: ti ricontatteremo per un colloquio conoscitivo.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-card md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome e cognome *" name="nome" placeholder="Mario Rossi" />
                <Field label="Email *" name="email" type="email" placeholder="mario@email.it" />
                <Field label="Telefono *" name="telefono" type="tel" placeholder="+39 333 1234567" />
                <div>
                  <label className="text-sm font-medium text-foreground">Posizione *</label>
                  <select
                    name="posizione"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="" disabled>Scegli una posizione</option>
                    <option>Autista Patente C+E</option>
                    <option>Aiuto Autista / Magazziniere</option>
                    <option>Candidatura Spontanea</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-foreground">
                  Presentati e raccontaci la tua esperienza *
                </label>
                <textarea
                  name="messaggio"
                  rows={5}
                  required
                  maxLength={1500}
                  placeholder="Anni di esperienza, patenti, ruoli precedenti, disponibilità…"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Inviando il modulo accetti il trattamento dei dati per la valutazione della
                candidatura. Per allegare il CV scrivici a{" "}
                <a href="mailto:lavoraconnoi@chiariellotrasport.it" className="text-accent hover:underline">
                  lavoraconnoi@chiariellotrasport.it
                </a>
                .
              </p>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="mt-6 w-full sm:w-auto"
                disabled={loading}
              >
                <Send className="h-4 w-4" />
                {loading ? "Invio in corso…" : "Invia candidatura"}
              </Button>
            </form>
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
