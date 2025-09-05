import Link from 'next/link';

// Lista de proyectos para la página de Projects. Se utiliza el nombre de usuario de GitHub
// del propietario para construir los enlaces al código. Si deseas cambiar tu usuario,
// modifica la constante GH a continuación.
const GH = 'MauricioGallardoB';

const projects = [
  {
    slug: 'rate-limiter',
    title: 'Rate Limiter Distribuido (Go+Redis)',
    blurb:
      'Implementa token/leaky bucket, incluye pruebas de carga y tablero de métricas.',
  },
  {
    slug: 'chat-ws',
    title: 'Chat WebSocket con Moderación',
    blurb: 'Streaming con filtros, rate limiting y p95 &lt; 120 ms.',
  },
  {
    slug: 'matchmaker',
    title: 'Matchmaker por Latencia',
    blurb: 'Emparejamiento por región/ping con canary simple.',
  },
  {
    slug: 'luau-module',
    title: 'Módulo Luau (Roblox)',
    blurb:
      'Telemetría ligera y utilidades para creadores en el ecosistema Roblox.',
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Proyectos</h1>
      <div className="space-y-6">
        {projects.map((p) => (
          <article key={p.slug} className="rounded-xl border p-5">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-zinc-600">{p.blurb}</p>
            <div className="mt-3 flex gap-3">
              <Link
                href={`https://github.com/${GH}/${p.slug}`}
                className="underline"
              >
                Código
              </Link>
              <Link href={`/projects/${p.slug}`} className="underline">
                Case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}