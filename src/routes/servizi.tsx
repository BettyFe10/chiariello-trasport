import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  PackageCheck,
  ArrowUpDown,
  Route as RouteIcon,
  Check,
  ArrowRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi di trasporto con sponda idraulica | Chiariello Trasport" },
      {
        name: "description",
        content:
          "Trasporti con camion a sponda idraulica: consegne porta a porta, carico e scarico assistito, trasporti dedicati. Soluzioni per aziende e privati.",
      },
      { property: "og:title", content: "Servizi — Chiariello Trasport" },
      {
        property: "og:description",
        content:
          "Camion con sponda idraulica per consegne sicure ovunque. Servizio dedicato per aziende e privati.",
      },
    ],
  }),
  component: ServiziPage,
});

const services = [
  {
    icon: Truck,
    title: "Trasporti con Sponda Idraulica",
    desc: "Tutti i nostri camion sono equipaggiati con sponda idraulica, per scaricare in autonomia anche dove non c'è muletto né rampa di carico.",
    benefits: [
      "Sponda idraulica su ogni mezzo",
      "Portata fino a 1.500 kg per ciclo",
      "Ideale per consegne in centri urbani",
      "Riduce tempi di attesa al carico/scarico",
    ],
  },
  {
    icon: PackageCheck,
    title: "Consegne Porta a Porta",
    desc: "Ritiriamo dal mittente e consegniamo al destinatario, ovunque, con il massimo della cura. Perfetto per pallet, casse e merci ingombranti.",
    benefits: [
      "Ritiro al carico programmato",
      "Consegna concordata con il destinatario",
      "Prova di consegna firmata",
      "Comunicazione diretta con l'autista",
    ],
  },
  {
    icon: ArrowUpDown,
    title: "Carico e Scarico Assistito",
    desc: "Grazie alla sponda non servono attrezzature in loco: scarichiamo merce su strada, marciapiede o cortile in piena sicurezza.",
    benefits: [
      "Nessun muletto o rampa richiesti",
      "Operazioni in totale sicurezza",
      "Autisti formati per movimentazione",
      "Transpallet a bordo per ultimo metro",
    ],
  },
  {
    icon: RouteIcon,
    title: "Trasporti Dedicati",
    desc: "Mezzo riservato esclusivamente alla tua spedizione: percorso diretto, tempi concordati e nessun trasbordo intermedio.",
    benefits: [
      "Camion riservato a una sola spedizione",
      "Tempi di consegna garantiti",
      "Tracciamento puntuale del viaggio",
      "Zero rischi di danneggiamento da trasbordo",
    ],
  },
  {
    icon: Building2,
    title: "Consegne in Cantiere e Centri Storici",
    desc: "La sponda idraulica è la soluzione ideale per consegnare in cantieri edili, ZTL, vicoli e zone difficili da raggiungere.",
    benefits: [
      "Mezzi adatti a strade strette",
      "Permessi ZTL su richiesta",
      "Esperienza in consegne edili",
      "Scarico a piè di cantiere",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Trasporti per Aziende e Privati",
    desc: "Lavoriamo sia con aziende che con privati: traslochi parziali, consegna mobili e arredi, materiali da costruzione, attrezzature.",
    benefits: [
      "Servizio dedicato anche per privati",
      "Preventivi chiari e senza sorprese",
      "Merce assicurata durante il viaggio",
      "Disponibilità nei weekend su richiesta",
    ],
  },
];

function ServiziPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-white md:py-28">
        <div className="container-pro text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            I nostri servizi
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Trasporti con sponda idraulica per ogni esigenza
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Mezzi attrezzati per scaricare ovunque, in sicurezza. Una squadra che conosce
            il mestiere e ascolta le tue necessità.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-pro grid gap-7 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white shadow-glow">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{s.title}</h2>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-7 self-start text-accent hover:text-accent">
                <Link to="/preventivo">
                  Richiedi preventivo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Domande frequenti
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {[
              {
                q: "Cos'è esattamente la sponda idraulica e a cosa serve?",
                a: "È una piattaforma mobile montata sul retro del camion che si abbassa fino a terra. Permette di caricare e scaricare merce pesante o pallet senza muletto, anche in luoghi dove non ci sono attrezzature.",
              },
              {
                q: "In quanto tempo posso ricevere un preventivo?",
                a: "Rispondiamo a tutte le richieste entro 24 ore lavorative. Per spedizioni urgenti, contattaci telefonicamente: forniamo una stima immediata.",
              },
              {
                q: "Le mie merci sono assicurate durante il trasporto?",
                a: "Sì. Tutte le spedizioni sono coperte da polizza assicurativa. Su richiesta attiviamo coperture integrative fino al pieno valore della merce.",
              },
              {
                q: "Lavorate anche con privati o solo con aziende?",
                a: "Lavoriamo con entrambi. Molti privati ci chiamano per consegna mobili, materiali da costruzione, traslochi parziali o ritiro di merce ingombrante.",
              },
              {
                q: "Riuscite a consegnare nei centri storici e nelle ZTL?",
                a: "Sì, la sponda idraulica è perfetta per i centri storici. Su richiesta gestiamo i permessi ZTL e organizziamo consegne in fasce orarie consentite.",
              },
              {
                q: "Quali zone coprite con il vostro servizio?",
                a: "Operiamo su tutto il territorio italiano. Per le tratte ricorrenti offriamo condizioni dedicate ai clienti continuativi.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-card p-5 shadow-soft open:shadow-card"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-primary">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Hai un'esigenza specifica? Parliamone."
        subtitle="Costruiamo insieme la soluzione di trasporto più adatta alla tua spedizione."
      />
    </>
  );
}
