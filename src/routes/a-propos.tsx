import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import cabinet from "../assets/profil.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos · Morgane Coste Sophrologue" },
      { name: "description", content: "Découvrez le parcours de Morgane Coste, sophrologue formée à l'École de Sophrologie d'Aix-Marseille." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-5 lg:px-10 pt-20 pb-12 text-center">
        <p className="eyebrow mb-5">À propos</p>
        <h1 className="text-5xl md:text-7xl mb-6">Mon parcours, mon approche</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Une démarche guidée par l'écoute, la bienveillance et le retour à l'essentiel.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <img src={cabinet} alt="Cabinet de sophrologie" loading="lazy" width={1200} height={1400}
            className="rounded-3xl w-full object-cover aspect-[4/5] shadow-lg sticky top-28" />
        </div>
        <div className="lg:col-span-3 space-y-10">
          <article>
            <h2 className="text-3xl md:text-4xl mb-4">Mon parcours et ma formation</h2>
            <p className="text-foreground/80 mb-4">
              Après des années à diriger des établissements médico-sociaux, j'ai vécu de près la réalité
              des rythmes intenses et des tensions du quotidien. Cette expérience m'a donné une conviction :
              nous avons tous besoin de clés concrètes pour retrouver notre <strong className="text-[color:var(--teal)]">calme intérieur</strong>.
            </p>
            <p className="text-foreground/80">
              Pour transformer cette conviction en un accompagnement professionnel, j'ai choisi de me former
              à l'<strong className="text-[color:var(--teal)]">École de Sophrologie d'Aix-Marseille</strong>.
              Ce cursus me permet aujourd'hui de vous transmettre des outils adaptés à vos besoins.
            </p>
          </article>
          <article>
            <h2 className="text-3xl md:text-4xl mb-4">Mon approche</h2>
            <p className="text-foreground/80 mb-4">
              Aujourd'hui, je mets cette expérience au service de votre bien-être. Mon approche est centrée
              sur l'<strong className="text-[color:var(--teal)]">écoute active</strong> et le
              <strong className="text-[color:var(--teal)]"> retour à l'essentiel</strong>.
            </p>
            <p className="text-foreground/80">
              Mon objectif est de vous accompagner avec bienveillance vers une meilleure connaissance de
              vous-même, afin de vous rendre pleinement <strong className="text-[color:var(--teal)]">autonome</strong>{" "}
              dans votre pratique au quotidien.
            </p>
          </article>
          <blockquote className="border-l-4 border-[color:var(--coral)] pl-6 italic text-foreground/85 text-lg">
            « Je considère la sophrologie comme un art de vivre. Ce n'est pas une méthode spectaculaire,
            mais un ensemble de modifications douces et progressives qui s'impriment dans le corps et
            l'esprit, par la régularité et la répétition de la pratique. »
          </blockquote>
        </div>
      </section>
    </Layout>
  );
}
