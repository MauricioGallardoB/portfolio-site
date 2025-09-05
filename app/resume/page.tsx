export default function Resume() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-4 text-zinc-700">
        <strong>Contacto:</strong>{' '}
        <a className="underline" href="mailto:mauricio.gallardob@udem.edu">
          mauricio.gallardob@udem.edu
        </a>
      </p>
      <ul className="mt-6 list-disc pl-5 text-zinc-700 space-y-2">
        <li>
          Enfoque: sistemas distribuidos, rendimiento (p95/p99), resiliencia, Luau.
        </li>
        <li>
          Stack: Go, Node/TypeScript, Redis, WebSockets, Docker; Next.js +
          Tailwind; Luau.
        </li>
        <li>
          Educación: UDEM (9º semestre) — <em>expected</em> 2025.
        </li>
      </ul>
    </main>
  );
}