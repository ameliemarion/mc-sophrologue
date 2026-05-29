import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--coral)] px-5 py-2.5 text-sm text-white"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[color:var(--coral)] px-5 py-2 text-sm text-white"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2 text-sm">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Morgane Coste · Sophrologue à Cabriès-Calas" },
      { name: "description", content: "Sophrologue à Cabriès-Calas (Aix-en-Provence). Accompagnement individuel, ateliers collectifs et sophro'balades pour retrouver calme, confiance et équilibre." },
      { name: "author", content: "Morgane Coste" },
      { property: "og:title", content: "Morgane Coste · Sophrologue à Cabriès-Calas" },
      { property: "og:description", content: "Sophrologue à Cabriès-Calas (Aix-en-Provence). Accompagnement individuel, ateliers collectifs et sophro'balades pour retrouver calme, confiance et équilibre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Morgane Coste · Sophrologue à Cabriès-Calas" },
      { name: "twitter:description", content: "Sophrologue à Cabriès-Calas (Aix-en-Provence). Accompagnement individuel, ateliers collectifs et sophro'balades pour retrouver calme, confiance et équilibre." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/884eb794-f994-491c-a8ab-6ebb9a579125/id-preview-6edc77dd--a4eb8961-e597-49f4-bdfc-333d3f195bcf.lovable.app-1780040315099.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/884eb794-f994-491c-a8ab-6ebb9a579125/id-preview-6edc77dd--a4eb8961-e597-49f4-bdfc-333d3f195bcf.lovable.app-1780040315099.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
