import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/branche.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/ma-pratique", label: "Ma pratique" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/contact", label: "Contact" },
];

const CALENDLY = "https://calendly.com/coste-morgane/90min";

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/85 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl md:text-3xl text-[color:var(--teal)]">Morgane Coste</span>
              <span className="font-serif text-[0.65rem] md:text-xs tracking-[0.35em] uppercase text-[color:var(--teal)]/70 mt-1">Sophrologue</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm tracking-wide transition-colors hover:text-[color:var(--coral)] ${
                    active ? "text-[color:var(--coral)]" : "text-[color:var(--teal)]"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center rounded-full bg-[color:var(--coral)] px-5 py-2.5 text-sm text-white shadow-sm hover:bg-[color:var(--coral)]/90 transition"
            >
              Prendre rendez-vous
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[color:var(--teal)]"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[color:var(--cream)] border-t border-border/60">
            <nav className="px-5 py-5 flex flex-col gap-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-[color:var(--teal)] text-base"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center rounded-full bg-[color:var(--coral)] px-5 py-3 text-sm text-white"
              >
                Prendre rendez-vous
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 bg-[color:var(--teal)] text-[color:var(--cream)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl text-[color:var(--cream)] mb-3">Morgane Coste</h3>
            <p className="font-serif text-sm tracking-[0.3em] uppercase opacity-80">Sophrologue</p>
            <p className="mt-5 text-sm leading-relaxed opacity-90">
              Retrouvez calme, confiance et équilibre grâce à un accompagnement sur mesure.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <h4 className="text-2xl text-[color:var(--cream)] mb-2">Contact</h4>
            <p className="flex items-start gap-3"><MapPin size={16} className="mt-1 text-[color:var(--sky)]"/> 13 Avenue Van Gogh, 13480 Cabriès</p>
            <p className="flex items-center gap-3"><Phone size={16} className="text-[color:var(--sky)]"/> <a href="tel:+33670692469" className="hover:text-[color:var(--coral)]">+33 6 70 69 24 69</a></p>
            <p className="flex items-center gap-3"><Mail size={16} className="text-[color:var(--sky)]"/> <a href="mailto:coste.morgane@gmail.com" className="hover:text-[color:var(--coral)]">coste.morgane@gmail.com</a></p>
          </div>
          <div className="text-sm">
            <h4 className="text-2xl text-[color:var(--cream)] mb-2">Horaires</h4>
            <p>Lundi, mardi, jeudi, vendredi<br/>8h00 – 18h00</p>
            <p className="mt-2">Samedi<br/>9h00 – 12h00</p>
          </div>
        </div>
        <div className="border-t border-[color:var(--cream)]/15">
          <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 text-xs opacity-70 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Morgane Coste — Sophrologue</span>
            <span>Cabriès-Calas · Aix-en-Provence</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { CALENDLY };
