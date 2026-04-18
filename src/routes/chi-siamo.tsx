import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Award, Users } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import teamImg from "@/assets/team.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — La storia di Chiariello Trasport" },
      {
        name: "description",
        content:
          "Chiariello Trasport è l'azienda familiare fondata nel 2016 da Salvatore e Maddalena Chiariello. Trasporti con camion a sponda idraulica per consegne sicure.",
      },
      { property: "og:title", content: "Chi siamo — Chiariello Trasport" },
      {
        property: "og:description",
        content:
          "Un'azienda familiare nata nel 2016 dalla passione di Salvatore e Maddalena per il trasporto fatto bene.",
      },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: ChiSiamoPage,
});

const values = [
  {
    icon: Target,
    title: "Affidabilità",
    desc: "Una promessa fatta è una promessa mantenuta. Misuriamo le nostre performance e ne rispondiamo.",
  },
  {
    icon: Heart,
    title: "Cura della merce",
    desc: "Trattiamo ogni spedizione come fosse nostra. Mezzi in ordine, autisti formati, processi certificati.",
  },
  {
    icon: Award,
    title: "Esperienza",
    desc: "Dal 2016 sulle strade italiane. Conosciamo le rotte, le procedure e i clienti che serviamo.",
  },
  {
    icon: Users,
    title: "Persone",
    desc: "Dietro ogni consegna c'è un team. Investiamo nelle persone perché il servizio fa la differenza.",
  },
];

function ChiSiamoPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-white md:py-28">
        <div className="container-pro text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Chi siamo
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Una storia di famiglia, su quattro ruote
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Chiariello Trasport nasce nel 2016 dall'iniziativa di Salvatore e Maddalena Chiariello.
          </p>
        </div>
      </section>

      {/* Storia */}
      <section className="py-20 md:py-28">
        <div className="container-pro grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              La nostra storia
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Dal 2016 al servizio dei nostri clienti
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Chiariello Trasport nasce nel <strong className="text-foreground">2016</strong> dall'iniziativa
                di <strong className="text-foreground">Salvatore Chiariello e di sua moglie Maddalena</strong>,
                con un'idea precisa: offrire un trasporto di qualità, con mezzi attrezzati per consegnare
                ovunque servisse.
              </p>
              <p>
                Per questo abbiamo scelto di lavorare esclusivamente con <strong className="text-foreground">camion
                dotati di sponda idraulica</strong>: ci permette di scaricare in autonomia anche dove
                non c'è muletto, riducendo i tempi di attesa e i rischi per la merce.
              </p>
              <p>
                Oggi siamo un'azienda familiare in crescita, con clienti fidelizzati che ci scelgono
                per la cura e la puntualità con cui trattiamo ogni spedizione.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={teamImg}
              alt="Il team di Chiariello Trasporti davanti alla flotta"
              className="rounded-2xl shadow-card"
              loading="lazy"
              width={1280}
              height={800}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-accent px-6 py-4 text-accent-foreground shadow-glow md:block">
              <div className="font-display text-3xl font-bold">2016</div>
              <div className="text-xs uppercase tracking-wider">Anno di fondazione</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Mission
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Rendere la logistica un vantaggio competitivo, non un problema da gestire.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Lavoriamo perché le aziende che servono i propri clienti possano farlo in tempo,
              senza pensieri, con un partner che risponde sempre al telefono.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <v.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numeri + magazzino */}
      <section className="py-20 md:py-28">
        <div className="container-pro grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img
              src={warehouseImg}
              alt="Magazzino logistico Chiariello Trasporti"
              className="rounded-2xl shadow-card"
              loading="lazy"
              width={1280}
              height={800}
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              I numeri
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Una struttura solida, pensata per crescere con te
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { v: "2016", l: "Fondata da Salvatore e Maddalena" },
                { v: "100%", l: "Mezzi con sponda idraulica" },
                { v: "500+", l: "Clienti soddisfatti" },
                { v: "98%", l: "Consegne puntuali" },
              ].map((n) => (
                <div key={n.l} className="border-l-4 border-accent pl-4">
                  <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                    {n.v}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{n.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
