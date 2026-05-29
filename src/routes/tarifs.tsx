import { createFileRoute } from "@tanstack/react-router";
import { Layout, CALENDLY } from "../components/Layout";
import balade from "../assets/balade.jpg";
import imgIndiv from "../assets/original/service-individuelle.png";
import imgCollectif from "../assets/original/service-collectif.png";
import imgBalade from "../assets/original/service-balade.png";
import imgPilates from "../assets/original/service-pilates.png";
import imgEntreprise from "../assets/original/service-entreprise.png";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs et prestations · Morgane Coste Sophrologue" },
      { name: "description", content: "Séances individuelles, ateliers collectifs, sophro'balades et accompagnements entreprises." },
    ],
  }),
  component: Tarifs,
});

const offres = [
  {
    titre: "Séance individuelle",
    prix: "60€",
    desc: "Un accompagnement sur mesure, au plus proche de votre réalité.",
    details: "Chaque séance est une parenthèse pour vous, conçue pour répondre à vos objectifs personnels (stress, sommeil, douleurs, acouphènes, équilibre alimentaire…). Ensemble, nous avançons à votre rythme pour transformer vos besoins en ressources durables.",
    image: imgIndiv,
    highlight: true,
  },
  {
    titre: "Atelier collectif",
    prix: "20€ / pers",
    desc: "Une bulle de décompression dans une ambiance conviviale.",
    details: "L'essentiel : un temps pour soi, l'écoute de son corps et le plaisir de pratiquer ensemble. Groupes à taille humaine (4 à 8 personnes) pour garantir la qualité des échanges.",
    image: imgCollectif,
  },
  {
    titre: "Sophro'balade",
    prix: "15€ / pers",
    desc: "Vivre son corps au rythme de la nature.",
    details: "Une heure de reconnexion sensorielle dans les environs de Cabriès-Calas, là où le calme de la nature facilite le retour à soi.",
    image: imgBalade,
  },
  {
    titre: "Partenariat Sophro'Pilates",
    prix: "Sur devis",
    desc: "Ateliers « Corps & Esprit » sur mesure.",
    details: "Associez votre expertise du Pilates à mes séances de Sophrologie pour offrir une expérience bien-être complète. Format flexible (cycle ou événement découverte).",
    image: imgPilates,
  },
  {
    titre: "Entreprises & Institutions",
    prix: "Tarifs dégressifs",
    desc: "Ateliers collectifs et interventions sur-mesure.",
    details: "Prévenir le stress, favoriser la régulation émotionnelle et renforcer la qualité de vie au travail. Formats adaptables (ponctuel ou programme) selon vos objectifs.",
    image: imgEntreprise,
  },
];

function Tarifs() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-5 lg:px-10 pt-20 pb-12 text-center">
        <p className="eyebrow mb-5">Tarifs & prestations</p>
        <h1 className="text-5xl md:text-7xl mb-6">Un accompagnement pour chacun</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Séances individuelles, ateliers en groupe, balades en nature ou interventions en entreprise.
          Un accompagnement adapté à chacun.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 pb-16 grid md:grid-cols-2 gap-6">
        {offres.map((o) => (
          <div key={o.titre}
            className={`rounded-3xl p-8 border ${o.highlight
              ? "bg-[color:var(--teal)] text-[color:var(--cream)] border-[color:var(--teal)]"
              : "bg-white border-border/60"}`}>
            <div className="flex items-start gap-5 mb-3">
              <img src={o.image} alt="" loading="lazy" width={120} height={120}
                className={`w-20 h-20 md:w-24 md:h-24 object-contain shrink-0 rounded-2xl ${o.highlight ? "bg-[color:var(--cream)]/15 p-2" : "bg-[color:var(--sky)]/20 p-2"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h2 className={`text-3xl md:text-4xl ${o.highlight ? "!text-[color:var(--cream)]" : ""}`}>{o.titre}</h2>
                  <span className={`font-display text-3xl ${o.highlight ? "text-[color:var(--sky)]" : "text-[color:var(--coral)]"}`}>{o.prix}</span>
                </div>
                <p className={`text-base mt-2 ${o.highlight ? "opacity-95" : "text-foreground/80"}`}>{o.desc}</p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${o.highlight ? "opacity-85" : "text-foreground/70"}`}>{o.details}</p>
          </div>
        ))}
      </section>

      <section className="relative my-12">
        <div className="absolute inset-0">
          <img src={balade} alt="" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[color:var(--teal)]/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10 py-24 text-center text-[color:var(--cream)]">
          <h2 className="text-4xl md:text-6xl !text-[color:var(--cream)] mb-5">Prête à commencer ?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Réservez votre première séance directement en ligne, ou contactez-moi pour échanger sur vos besoins.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[color:var(--coral)] px-8 py-4 text-white shadow-md hover:bg-[color:var(--coral)]/90 transition">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </Layout>
  );
}
