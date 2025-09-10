import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import GridGallery from '@/components/GridGallery';

export default function Home() {
  return (
    <>
      {/* Hero editorial */}
      <section className="border-b">
        <div className="container-arch py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Studio</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl leading-tight">
            Diseño de sistemas con enfoque arquitectónico:
            <br /> claridad estructural, resiliencia y rendimiento.
          </h1>
          <p className="mt-5 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Trabajo en límites de latencia p95/p99, colas, caché y protocolos en tiempo real.
          </p>
          <div className="mt-8 flex gap-4">
            <a className="rounded-full border px-5 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900" href="/projects">Ver trabajo</a>
            <a className="rounded-full bg-black px-5 py-2 text-sm text-white dark:bg-white dark:text-black" href="/resume">CV</a>
          </div>
        </div>
      </section>

      {/* Trabajo Destacado */}
      <Section kicker="Work" title="Casos destacados">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Rate Limiter Distribuido (Go)"
            summary="Token bucket en Redis, pruebas k6 y métricas por endpoint."
            href="/projects/rate-limiter"
            repo="https://github.com/MauricioGallardoB/rate-limiter"
          />
          <ProjectCard
            title="Chat WebSocket (Node.js)"
            summary="Broadcast y rooms; reconexión y tests de carga."
            href="/projects/chat-ws"
            repo="https://github.com/MauricioGallardoB/chat-ws"
          />
          <ProjectCard
            title="Matchmaker (Node.js)"
            summary="Emparejamiento por ELO/latencia; fairness y colas."
            href="/projects/matchmaker"
            repo="https://github.com/MauricioGallardoB/matchmaker"
          />
          <ProjectCard
            title="Módulo de Telemetría (Luau)"
            summary="Wrapper de métricas/eventos para Roblox."
            href="/projects/luau-module"
            repo="https://github.com/MauricioGallardoB/luau-module"
          />
        </div>
      </Section>

      {/* Estudio */}
      <Section kicker="Studio" title="Principios de diseño">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <li className="rounded-2xl border p-5">
            <h3 className="font-medium">Estructura primero</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Interfaces claras, contratos explícitos y dominios limpios.</p>
          </li>
          <li className="rounded-2xl border p-5">
            <h3 className="font-medium">Resiliencia</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Backpressure, timeouts, circuit breakers y degradación controlada.</p>
          </li>
          <li className="rounded-2xl border p-5">
            <h3 className="font-medium">Rendimiento visible</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Dashboards por endpoint: p95/p99, errores y saturación.</p>
          </li>
          <li className="rounded-2xl border p-5">
            <h3 className="font-medium">Iteración</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Diseñar–medir–afinAR, como un estudio de arquitectura.</p>
          </li>
        </ul>
      </Section>

      {/* Galería (renders/diagramas) */}
      <Section kicker="Gallery" title="Exploraciones visuales">
        <GridGallery />
      </Section>

      {/* Journal */}
      <Section kicker="Journal" title="Notas recientes">
        <ul className="space-y-3 text-sm">
          <li><a className="underline underline-offset-4" href="/blog/reduciendo-p95-con-colas-y-cache">Reduciendo p95 con colas y caché</a></li>
          <li><a className="underline underline-offset-4" href="/blog/disenando-un-rate-limiter-distribuido">Cómo diseñar un rate limiter distribuido</a></li>
        </ul>
      </Section>

      {/* CTA */}
      <Section kicker="Contact" title="Construyamos algo sólido">
        <a className="inline-block rounded-full border px-5 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900" href="mailto:mauricio.gallardob@udem.edu">
          Escríbeme
        </a>
      </Section>
    </>
  );
}
