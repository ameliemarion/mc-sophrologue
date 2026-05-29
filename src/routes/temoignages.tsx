import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import branche from "../assets/branche.png";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Témoignages · Morgane Coste Sophrologue" },
      { name: "description", content: "Les retours de personnes accompagnées par Morgane Coste, sophrologue à Cabriès-Calas." },
    ],
  }),
  component: Temoignages,
});

const items = [
  {
    name: "Agnès C",
    when: "Décembre 2025",
    text: "Personne très sérieuse et à l'écoute du patient. Je me sentais en permanence oppressée et Madame Coste m'a fait travailler ma respiration sur quelques séances. Aujourd'hui cette sensation a disparu. J'ai beaucoup aimé ces moments de bien-être dans son cabinet, très agréable et propice au lâcher-prise. Je recommande vivement cette professionnelle.",
  },
  {
    name: "Camille D",
    when: "Janvier 2026",
    text: "J'ai testé la sophrologie avec Madame Coste afin de préparer au mieux mon année 2026 et j'en suis ravie. Le cadre est calme, apaisant, propice au lâcher-prise. Madame Coste est douce, rassurante, très professionnelle. Cette séance m'a fait beaucoup de bien, notamment sur le sommeil. On sent une vraie présence, une écoute sincère et une grande maîtrise de sa pratique.",
  },
  {
    name: "Eva P.",
    when: "Février 2026",
    text: "J'ai découvert la sophrologie avec Morgane et je suis très satisfaite de ma première séance. Je renouvellerai avec certitude !",
  },
  {
    name: "Audrey R.",
    when: "Mars 2026",
    text: "Morgane est très douce et professionnelle. Je me sens beaucoup mieux, apaisée. Je la recommande vivement.",
  },
];

function Temoignages() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-5 lg:px-10 pt-20 pb-12 text-center">
        <p className="eyebrow mb-5">Témoignages</p>
        <h1 className="text-5xl md:text-7xl mb-6">Leurs mots, ma plus belle reconnaissance</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Quelques retours de personnes accompagnées au cabinet.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 pb-24 grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <figure key={it.name} className="bg-white rounded-3xl p-8 border border-border/60 relative">
            <blockquote className="text-foreground/85 leading-relaxed mb-5">{it.text}</blockquote>
            <figcaption className="flex items-center gap-3">
              <img src={branche} alt="" className="h-5 w-auto object-contain opacity-60" />
              <div>
                <p className="font-display text-2xl text-[color:var(--teal)]">{it.name}</p>
                <p className="text-xs uppercase tracking-widest text-[color:var(--coral)] mt-1">{it.when}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
