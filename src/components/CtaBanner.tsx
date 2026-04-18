import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner({
  title = "Pronto a spedire? Ricevi un preventivo in 24 ore.",
  subtitle = "Compila il modulo: ti rispondiamo con la soluzione più conveniente per la tua spedizione.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-20">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="container-pro relative z-10 flex flex-col items-center text-center text-white">
        <h2 className="max-w-3xl text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl">
            <Link to="/preventivo">
              Richiedi preventivo <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <Link to="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
