import { Link } from "@tanstack/react-router";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-pro grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent">
              <Truck className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold">Chiariello</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                Trasport
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Trasporti con camion a sponda idraulica in Italia. Un'azienda familiare
            fondata nel 2016 da Salvatore e Maddalena Chiariello.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Servizi
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/servizi" className="hover:text-accent">Trasporti con sponda idraulica</Link></li>
            <li><Link to="/servizi" className="hover:text-accent">Consegne porta a porta</Link></li>
            <li><Link to="/servizi" className="hover:text-accent">Trasporti dedicati</Link></li>
            <li><Link to="/servizi" className="hover:text-accent">Carico e scarico assistito</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Azienda
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/chi-siamo" className="hover:text-accent">Chi siamo</Link></li>
            <li><Link to="/lavora-con-noi" className="hover:text-accent">Lavora con noi</Link></li>
            <li><Link to="/contatti" className="hover:text-accent">Contatti</Link></li>
            <li><Link to="/preventivo" className="hover:text-accent">Preventivo gratuito</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contatti
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Via dei Trasporti 12<br />80143 Napoli (NA)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+390815550100" className="hover:text-accent">081 555 0100</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@chiariellotrasport.it" className="hover:text-accent">
                info@chiariellotrasport.it
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Chiariello Trasport — Dal 2016</p>
          <p>Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
