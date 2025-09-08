export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl">Hola, soy Mauricio.</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Me enfoco en sistemas distribuidos, latencia p95/p99 y resiliencia.
        Aquí verás proyectos prácticos hechos para Roblox y servicios backend.
      </p>
      <ul className="list-disc pl-6">
        <li>Go, Node/TypeScript, Redis, WebSockets, Docker</li>
        <li>Next.js + Tailwind; Luau (Roblox)</li>
        <li>UDEM (9º semestre) — expected 2025</li>
      </ul>
    </section>
  );
}
