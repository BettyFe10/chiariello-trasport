import { Link } from "@tanstack/react-router";
import { Truck, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/lavora-con-noi", label: "Lavora con noi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-pro flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glow transition-transform group-hover:scale-105">
            <Truck className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-primary md:text-lg">
              Chiariello
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
              Trasport
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+390815550100"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            081 555 0100
          </a>
          <Button asChild variant="cta" size="default">
            <Link to="/preventivo">Richiedi preventivo</Link>
          </Button>
        </div>

        <button
          aria-label="Apri menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden animate-fade-in">
          <div className="container-pro flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-accent bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" className="mt-3" onClick={() => setOpen(false)}>
              <Link to="/preventivo">Richiedi preventivo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
