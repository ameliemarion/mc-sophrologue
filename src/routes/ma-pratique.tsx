import { createFileRoute } from "@tanstack/react-router";
import { Layout, CALENDLY } from "../components/Layout";
import pratique from "../assets/pratique.jpg";

export const Route = createFileRoute("/ma-pratique")({
  head: () => ({
    meta: [
      { title: "Ma pratique · Sophrologie à Cabriès-Calas" },
      { name: "description", content: "Découvrez la sophrologie, ses bienfaits et le déroulement de votre accompagnement avec Morgane Coste." },
    ],
  }),
  component: Pratique,
});

const raisons = [
  { t: "Accueillir vos émotions", d: "Pour apaiser les tensions, retrouver des repères et apprendre à mieux gérer votre stress au quotidien." },
  { t: "Lâcher-prise", d: "Créer des espaces de respiration et apprendre à accepter ce que vous ne pouvez pas changer pour libérer le mental." },
  { t: "Renforcer la confiance en vous", d: "Prendre conscience de vos capacités et de vos ressources pour vous sentir capable d'oser et d'agir." },
  { t: "S'aligner avec ses valeurs", d: "Redonner du sens à vos choix et vivre en accord avec ce qui vous guide profondément." },
  { t: "Se préparer à un événement", d: "Apprivoiser l'appréhension avant un rendez-vous important, un examen ou un changement de vie." },
];

function Pratique() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-5 lg:px-10 pt-20 pb-12 text-center">
        <p className="eyebrow mb-5">Ma pratique</p>
        <h1 className="text-5xl md:text-7xl mb-6">La sophrologie, en douceur</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Une méthode psychocorporelle pour retrouver l'équilibre entre vos pensées, vos émotions et vos sensations.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img src={pratique} alt="" loading="lazy" width={1400} height={1000}
          className="rounded-3xl w-full object-cover aspect-[5/4] shadow-md" />
        <div>
          <h2 className="text-4xl mb-5">Qu'est-ce que la sophrologie ?</h2>
          <p className="text-foreground/80 mb-4">
            La sophrologie est une méthode psychocorporelle qui permet de retrouver un équilibre entre
            vos pensées, vos émotions et vos sensations. Elle s'adresse aussi bien aux particuliers
            (adultes, adolescents) qu'aux entreprises et associations.
          </p>
          <p className="text-foreground/80 italic">
            Que ce soit en individuel ou en collectif, en présentiel ou en ligne, elle offre des outils
            concrets pour traverser vos défis personnels et professionnels.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--secondary)] py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Pourquoi consulter</p>
            <h2 className="text-4xl md:text-5xl">Vos raisons, mon accompagnement</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {raisons.map((r) => (
              <div key={r.t} className="bg-white rounded-2xl p-6 border border-border/50">
                <h3 className="text-2xl mb-2">{r.t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 lg:px-10 py-20">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Le déroulement</p>
          <h2 className="text-4xl md:text-5xl">Votre accompagnement, pas à pas</h2>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border border-border/60 bg-white p-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-5xl text-[color:var(--coral)]">01</span>
              <h3 className="text-3xl">La première séance — 90 minutes</h3>
            </div>
            <p className="text-foreground/80 mb-3">
              Cette séance est fondamentale. Elle débute par une anamnèse complète : un échange approfondi
              sur votre vie (professionnelle, personnelle, sociale) pour comprendre votre parcours.
            </p>
            <ul className="text-foreground/80 space-y-1 pl-5 list-disc">
              <li><strong>Objectif :</strong> identifier ensemble vos besoins et fixer vos objectifs.</li>
              <li><strong>Découverte :</strong> une pratique courte pour vous donner un premier aperçu de la méthode.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-5xl text-[color:var(--coral)]">02</span>
              <h3 className="text-3xl">Les séances suivantes — 45 min à 1h</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {[
                ["L'accueil", "Un court échange sur votre état du moment et votre pratique depuis la dernière fois."],
                ["La pratique", "Un temps d'exercices personnalisés, adaptés à vos objectifs."],
                ["Le retour", "Un espace de partage sur vos ressentis de la séance."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[color:var(--cream)] rounded-xl p-5">
                  <h4 className="text-xl mb-2">{t}</h4>
                  <p className="text-sm text-foreground/75">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[color:var(--sky)]/25 p-8">
            <h3 className="text-3xl mb-3">Le plus pour votre autonomie</h3>
            <p className="text-foreground/85 italic">
              Chaque séance est enregistrée. Je vous invite à les réécouter et à pratiquer chez vous entre
              nos rendez-vous. C'est cette répétition qui vous permettra de devenir pleinement autonome
              et d'ancrer les changements durablement.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={CALENDLY} target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[color:var(--coral)] px-7 py-3.5 text-white shadow-md hover:bg-[color:var(--coral)]/90 transition">
            Réserver ma première séance
          </a>
        </div>
      </section>
    </Layout>
  );
}
