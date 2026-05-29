import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, CALENDLY } from "../components/Layout";
import hero from "../assets/original/hero.png";
import cabinet from "../assets/profil.jpg";
import branche from "../assets/branche.png";
import { Heart, Leaf, Wind, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morgane Coste · Sophrologue à Cabriès-Calas" },
      { name: "description", content: "Sophrologue à Cabriès-Calas. Accompagnement individuel, ateliers collectifs et sophro'balades pour retrouver calme, confiance et équilibre." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--cream)]/95 via-[color:var(--cream)]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-28 lg:py-40">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 text-base md:text-lg lg:text-xl tracking-[0.3em]">Sophrologue · Cabriès-Calas</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6">Respirez, <br/><span className="whitespace-nowrap">Écoutez votre corps,</span> <br/><span className="whitespace-nowrap">Revenez à l'essentiel.</span></h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10">
              Retrouvez calme, confiance et équilibre grâce à un accompagnement sur mesure,
              tout en douceur, au plus proche de votre réalité.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={CALENDLY} target="_blank" rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[color:var(--coral)] px-7 py-3.5 text-white shadow-md hover:bg-[color:var(--coral)]/90 transition">
                Prendre rendez-vous
              </a>
              <Link to="/ma-pratique"
                className="inline-flex items-center rounded-full border border-[color:var(--teal)]/40 bg-white/60 px-7 py-3.5 text-[color:var(--teal)] hover:bg-white transition">
                Découvrir ma pratique
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-5 lg:px-10 py-24 text-center">
        <div className="leaf-divider mb-8"><img src={branche} alt="" className="h-6 w-auto object-contain" /></div>
        <h2 className="text-4xl md:text-6xl mb-6">Un art de vivre, doux et progressif</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
          La sophrologie est une méthode psychocorporelle qui permet de retrouver un équilibre entre vos
          pensées, vos émotions et vos sensations. Je vous accompagne avec bienveillance vers une meilleure
          connaissance de vous-même, pour vous rendre pleinement autonome dans votre pratique au quotidien.
        </p>
      </section>

      {/* POURQUOI */}
      <section className="bg-[color:var(--secondary)] py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pourquoi consulter</p>
            <h2 className="text-4xl md:text-5xl">Des clés concrètes pour le quotidien</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wind, t: "Accueillir vos émotions", d: "Apaiser les tensions, retrouver des repères et mieux gérer le stress." },
              { icon: Leaf, t: "Lâcher-prise", d: "Créer des espaces de respiration et libérer le mental." },
              { icon: Sparkles, t: "Confiance en soi", d: "Prendre conscience de vos ressources pour oser et agir." },
              { icon: Heart, t: "S'aligner avec ses valeurs", d: "Redonner du sens à vos choix et vivre en accord avec soi." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white/80 backdrop-blur rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[color:var(--sky)]/30 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[color:var(--teal)]" />
                </div>
                <h3 className="text-2xl mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APROPOS TEASER */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={cabinet} alt="Le cabinet de Morgane Coste" loading="lazy" width={1200} height={1400}
            className="rounded-3xl shadow-lg w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-[color:var(--coral)] text-white rounded-2xl px-6 py-5 shadow-xl max-w-[220px]">
            <p className="font-display text-2xl leading-tight">Bienvenue dans votre parenthèse</p>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">À propos</p>
          <h2 className="text-4xl md:text-6xl mb-6">Une présence à l'écoute</h2>
          <p className="text-foreground/80 mb-5 leading-relaxed">
            Après des années à diriger des établissements médico-sociaux, j'ai vécu de près la réalité
            des rythmes intenses et des tensions du quotidien. Cette expérience m'a donné une conviction :
            nous avons tous besoin de clés concrètes pour retrouver notre calme intérieur.
          </p>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Formée à l'École de Sophrologie d'Aix-Marseille, je vous transmets des outils adaptés à
            vos besoins, dans une écoute active et un retour à l'essentiel.
          </p>
          <Link to="/a-propos" className="inline-flex items-center rounded-full bg-[color:var(--teal)] px-7 py-3 text-white hover:bg-[color:var(--teal)]/90 transition">
            Lire mon parcours
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 lg:px-10 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-[color:var(--sky)]/40 to-[color:var(--cream)] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-6xl mb-5">Offrez-vous une parenthèse</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mb-8">
            La première séance dure 90 minutes : un temps d'échange approfondi pour identifier ensemble
            vos besoins et fixer vos objectifs.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[color:var(--coral)] px-8 py-4 text-white shadow-md hover:bg-[color:var(--coral)]/90 transition">
            Réserver ma première séance
          </a>
        </div>
      </section>
    </Layout>
  );
}
