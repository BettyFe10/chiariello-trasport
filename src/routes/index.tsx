import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Truck,
  PackageCheck,
  ArrowUpDown,
  Route as RouteIcon,
  ShieldCheck,
  Clock,
  MapPin,
  HeartHandshake,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import heroTruck from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trasporto merci, logistica e magazzino in Italia | Chiariello Trasport" },
      {
        name: "description",
        content:
          "Trasporto merci su gomma, spedizioni nazionali, logistica e magazzino. Camion con sponda idraulica, consegne sicure e preventivo gratuito in 24 ore.",
      },
      { property: "og:title", content: "Chiariello Trasport — Trasporto merci, logistica e magazzino" },
      {
        property: "og:description",
        content:
          "Trasporto merci su gomma, spedizioni nazionali e soluzioni di logistica e magazzino per aziende e privati.",
      },
      { property: "og:image", content: heroTruck },
      { name: "twitter:image", content: heroTruck },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Truck,
    title: "Trasporto Merci su Gomma",
    desc: "Spedizioni nazionali con mezzi propri. Tempi certi, tracciabilità e cura della merce in ogni fase del viaggio.",
  },
  {
    icon: PackageCheck,
    title: "Spedizioni Nazionali",
    desc: "Consegne porta a porta su tutto il territorio italiano. Soluzioni a carico completo (FTL) e carichi parziali, per ogni tipologia di merce.",
  },
  {
    icon: ArrowUpDown,
    title: "Logistica Integrata",
    desc: "Gestione completa della filiera: ritiro, trasporto, consegna, carico/scarico assistiti e supporto magazzino su richiesta.",
  },
  {
    icon: RouteIcon,
    title: "Trasporti Dedicati",
    desc: "Mezzo riservato alla tua spedizione. Percorso diretto, tempi concordati e nessun trasbordo.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Merci assicurate",
    desc: "Copertura assicurativa completa su ogni spedizione, fino al pieno valore della merce.",
  },
  {
    icon: Clock,
    title: "Puntualità del 98,7%",
    desc: "Rispettiamo i tempi: la nostra promessa è misurata e certificata ogni mese.",
  },
  {
    icon: MapPin,
    title: "Tracking in tempo reale",
    desc: "Sai sempre dove si trova la tua merce con notifiche dedicate e portale clienti.",
  },
  {
    icon: HeartHandshake,
    title: "Account dedicato",
    desc: "Un referente unico che conosce la tua azienda e ti segue in ogni spedizione.",
  },
];

const stats = [
  { value: "2016", label: "Anno di fondazione" },
  { value: "100%", label: "Camion con sponda" },
  { value: "500+", label: "Clienti soddisfatti" },
  { value: "98%", label: "Consegne puntuali" },
];

const testimonials = [
  {
    name: "Marco Esposito",
    role: "Logistic Manager · Caseificio Sannita",
    text:
      "Lavoriamo con Chiariello Trasport da anni: puntualità, cura della merce e comunicazione sempre chiara. Un partner logistico solido.",
  },
  {
    name: "Laura Bianchi",
    role: "Direttore Operations · MetalSud S.p.A.",
    text:
      "Affidabili e puntuali, anche su spedizioni complesse. Comunicazione diretta e prezzi onesti: rari da trovare nel settore.",
  },
  {
    name: "Giuseppe Romano",
    role: "Titolare · Romano Arredamenti",
    text:
      "Da quando ci affidiamo a loro non abbiamo più problemi di consegna, anche nei centri storici e nelle zone più difficili.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0">
          <img
            src={heroTruck}
            alt="Camion Chiariello Trasporti in autostrada al tramonto"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>

        <div className="container-pro relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:py-36">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Trasporto merci, logistica e magazzino
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Trasporto merci e spedizioni<br />
              <span className="text-accent">in tutta Italia.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
              Soluzioni di trasporto, logistica e magazzino su misura per aziende e privati.
              Mezzi propri, tempi certi e un referente diretto per ogni spedizione.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="xl">
                <Link to="/preventivo">
                  Richiedi un preventivo <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/servizi">Scopri i servizi</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> Merci assicurate
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" /> Risposta in 24h
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> Italia + UE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Servizi di trasporto e logistica
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Spedizioni nazionali per aziende e privati
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Dalla singola consegna alla gestione completa della tua catena logistica.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/servizi">Vedi tutti i servizi <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-pro grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Perché sceglierci
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Il tuo partner per il<br />trasporto merci in Italia
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Lavoriamo con mezzi propri e un team dedicato, costruendo relazioni di fiducia
              con ogni cliente. Processi snelli, comunicazione diretta e un servizio
              pensato per chi non può permettersi imprevisti.
            </p>
            <Button asChild variant="cta" size="lg" className="mt-8">
              <Link to="/preventivo">Richiedi preventivo gratuito</Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <b.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-pro grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-accent md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/70 md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Dicono di noi
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Aziende che si affidano alle nostre spedizioni
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
