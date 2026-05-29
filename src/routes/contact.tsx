import { createFileRoute } from "@tanstack/react-router";
import { Layout, CALENDLY } from "../components/Layout";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Morgane Coste Sophrologue à Cabriès" },
      { name: "description", content: "Contactez Morgane Coste, sophrologue à Cabriès-Calas. 13 Avenue Van Gogh, 13480 Cabriès." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-5 lg:px-10 pt-20 pb-12 text-center">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="text-5xl md:text-7xl mb-6">Échangeons ensemble</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Une question, un besoin particulier ? Je suis à votre écoute.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 border border-border/60 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[color:var(--sky)]/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-[color:var(--teal)]" size={20} />
            </div>
            <div>
              <p className="font-display text-2xl text-[color:var(--teal)]">Le cabinet</p>
              <p className="text-foreground/80">13 Avenue Van Gogh<br/>13480 Cabriès, France</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[color:var(--sky)]/30 flex items-center justify-center flex-shrink-0">
              <Phone className="text-[color:var(--teal)]" size={20} />
            </div>
            <div>
              <p className="font-display text-2xl text-[color:var(--teal)]">Téléphone</p>
              <a href="tel:+33670692469" className="text-foreground/80 hover:text-[color:var(--coral)]">+33 6 70 69 24 69</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[color:var(--sky)]/30 flex items-center justify-center flex-shrink-0">
              <Mail className="text-[color:var(--teal)]" size={20} />
            </div>
            <div>
              <p className="font-display text-2xl text-[color:var(--teal)]">Email</p>
              <a href="mailto:coste.morgane@gmail.com" className="text-foreground/80 hover:text-[color:var(--coral)]">coste.morgane@gmail.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[color:var(--sky)]/30 flex items-center justify-center flex-shrink-0">
              <Clock className="text-[color:var(--teal)]" size={20} />
            </div>
            <div>
              <p className="font-display text-2xl text-[color:var(--teal)]">Horaires</p>
              <p className="text-foreground/80">Lundi, mardi, jeudi, vendredi : 8h – 18h<br/>Samedi : 9h – 12h <span className="text-foreground/60">(au cabinet d'Aix-les-Milles)</span></p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[color:var(--teal)] to-[color:var(--teal)]/85 text-[color:var(--cream)] p-10 flex flex-col justify-center">
          <Calendar size={36} className="text-[color:var(--sky)] mb-5" />
          <h2 className="text-4xl !text-[color:var(--cream)] mb-4">Réservez en ligne</h2>
          <p className="opacity-90 mb-7 leading-relaxed">
            Choisissez le créneau qui vous convient directement via mon agenda en ligne.
            La première séance dure 90 minutes.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer"
            className="inline-flex justify-center items-center rounded-full bg-[color:var(--coral)] px-7 py-3.5 text-white shadow-md hover:bg-[color:var(--coral)]/90 transition">
            Voir les disponibilités
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-md border border-border/60">
          <iframe
            title="Localisation du cabinet"
            src="https://www.google.com/maps?q=13+Avenue+Van+Gogh,+13480+Cabri%C3%A8s&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
