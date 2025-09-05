import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Hola, soy{' '}
          <span className="underline decoration-4 decoration-blue-500">
            Mauricio Gallardo
          </span>
        </h1>
        <p className="text-lg text-zinc-600">
          Construyo software <strong>rápido, confiable y verificable</strong>. Me
          enfoco en latencia p95/p99, resiliencia, y en habilitar experiencias
          en tiempo real (Luau/Roblox, websockets, colas, cachés).
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-xl border px-4 py-2 hover:bg-zinc-50"
          >
            Ver proyectos
          </Link>
          <Link
            href="/resume"
            className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Resume
          </Link>
        </div>
      </header>
      <section className="mt-12 space-y-2">
        <h2 className="text-2xl font-semibold">Lo que me importa</h2>
        <ul className="list-disc pl-5 text-zinc-700">
          <li>Resultados medibles: p95 &lt; 150 ms, error &lt; 0.1%, ≥ 5k RPS.</li>
          <li>
            Propiedad end-to-end: diseño → código → métricas → mejoras.
          </li>
          <li>Experiencia Roblox/Luau + sistemas distribuidos.</li>
        </ul>
      </section>
    </main>
  );
}