import { notFound } from 'next/navigation';

// Definición de metadatos para cada proyecto. Incluye el estudio de caso en
// formato STAR y una tabla de métricas antes/después. Puedes ajustar los
// valores según tus pruebas reales.
type CaseStudy = {
  situacion: string;
  tarea: string;
  accion: string;
  resultado: string;
  metrics: {
    before: { p95: number; p99: number; error: number; rps: number };
    after: { p95: number; p99: number; error: number; rps: number };
  };
};

type ProjectMeta = {
  title: string;
  description: string;
  caseStudy: CaseStudy;
};

const projectMeta: Record<string, ProjectMeta> = {
  'rate-limiter': {
    title: 'Rate Limiter Distribuido (Go+Redis)',
    description:
      'Implementa un rate limiter con token bucket/leaky bucket apoyado en Redis, pruebas de carga y dashboard de métricas.',
    caseStudy: {
      situacion:
        'El microservicio A sufría saturaciones cuando las peticiones superaban 1000 RPS, causando errores y latencias de hasta 1,2 s (p99).',
      tarea:
        'Diseñar un rate limiter distribuido que mantuviera la latencia p95 por debajo de 150 ms y permitiera escalar hasta 5 000 RPS con error < 0,1%.',
      accion:
        'Implementé un *token bucket* en Redis con expiración y recarga por intervalo. Añadí métricas con Prometheus, pruebas de carga con k6 y automatización de generación de reportes. Ajusté la expiración y el tamaño del bucket hasta cumplir los SLOs.',
      resultado:
        'La latencia p95 se redujo de 480 ms a 140 ms y la p99 de 1,2 s a 320 ms. El throughput sostenible pasó de 1 000 a 5 000 RPS con tasa de error reducida de 2% a 0,2%.',
      metrics: {
        before: { p95: 480, p99: 1200, error: 2.0, rps: 1000 },
        after: { p95: 140, p99: 320, error: 0.2, rps: 5000 },
      },
    },
  },
  'chat-ws': {
    title: 'Chat WebSocket con Moderación',
    description:
      'Chat en tiempo real con WebSockets, filtrado de lenguaje ofensivo y rate limiting para evitar spam.',
    caseStudy: {
      situacion:
        'Una comunidad en línea necesitaba un chat en tiempo real, pero preocupaba la moderación del lenguaje y la latencia bajo carga.',
      tarea:
        'Construir un servidor WebSocket con filtros de lenguaje y limitador de tasa que mantuviera p95 < 120 ms a 5 000 RPS.',
      accion:
        'Desarrollé el servidor en Node.js con la librería ws, añadí un filtro de palabras basado en expresiones regulares y un limitador de mensajes por usuario. Instrumenté métricas y ejecuté pruebas con k6.',
      resultado:
        'El p95 se mantuvo en 100 ms y el p99 en 250 ms a 5 000 RPS. La moderación bloqueó >99% de mensajes ofensivos sin afectar el rendimiento. El error rate se mantuvo en 0,1%.',
      metrics: {
        before: { p95: 300, p99: 700, error: 1.5, rps: 1000 },
        after: { p95: 100, p99: 250, error: 0.1, rps: 5000 },
      },
    },
  },
  matchmaker: {
    title: 'Matchmaker por Latencia',
    description:
      'Servicio que empareja usuarios según región y ping, con estrategia de canary release para probar nuevas versiones.',
    caseStudy: {
      situacion:
        'Los jugadores se quejaban de partidas con alta latencia y desequilibrio regional.',
      tarea:
        'Crear un algoritmo de emparejamiento que agrupe por región/ping y permita probar versiones nuevas mediante canary.',
      accion:
        'Implementé un API en Node.js que calcula el ping de cada usuario y los agrupa. Añadí canary release con porcentaje controlado. Probé con k6 variando el tráfico en ambas versiones.',
      resultado:
        'El p95 disminuyó de 400 ms a 130 ms y se logró un balance regional 90% correcto. Las pruebas de canary permitieron promover la nueva versión sin impacto perceptible.',
      metrics: {
        before: { p95: 400, p99: 800, error: 1.0, rps: 800 },
        after: { p95: 130, p99: 280, error: 0.1, rps: 5000 },
      },
    },
  },
  'luau-module': {
    title: 'Módulo Luau (Roblox)',
    description:
      'Biblioteca en Luau para telemetría y utilidades de desarrollo en Roblox, con funciones para registrar eventos y medir latencia.',
    caseStudy: {
      situacion:
        'Los desarrolladores en Roblox no contaban con un módulo ligero para instrumentar sus juegos con telemetría y debían crear uno desde cero en cada proyecto.',
      tarea:
        'Diseñar una biblioteca reutilizable en Luau que permita registrar eventos y medir latencia con impacto mínimo en FPS.',
      accion:
        'Desarrollé `TelemetryModule.lua` que encola eventos y los envía de forma diferida, con API simple. Añadí pruebas con TestEZ y ejemplo de uso.',
      resultado:
        'El módulo redujo el tiempo de instrumentación un 70%. En pruebas de 3 juegos, el impacto en FPS fue <1 y la latencia de registro fue <50 ms.',
      metrics: {
        before: { p95: 200, p99: 400, error: 1.0, rps: 0 },
        after: { p95: 40, p99: 80, error: 0.0, rps: 0 },
      },
    },
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const meta = projectMeta[params.slug];
  if (!meta) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{meta.title}</h1>
      <p className="text-zinc-700 mb-8">{meta.description}</p>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Estudio de caso (STAR)</h2>
        <div>
          <h3 className="font-semibold">Situación</h3>
          <p className="text-zinc-600">{meta.caseStudy.situacion}</p>
        </div>
        <div>
          <h3 className="font-semibold">Tarea</h3>
          <p className="text-zinc-600">{meta.caseStudy.tarea}</p>
        </div>
        <div>
          <h3 className="font-semibold">Acción</h3>
          <p className="text-zinc-600">{meta.caseStudy.accion}</p>
        </div>
        <div>
          <h3 className="font-semibold">Resultado</h3>
          <p className="text-zinc-600">{meta.caseStudy.resultado}</p>
        </div>
        <div>
          <h3 className="font-semibold">Métricas Antes vs. Después</h3>
          <table className="min-w-full text-sm border-collapse border border-zinc-200">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-200 px-2 py-1 text-left">Métrica</th>
                <th className="border border-zinc-200 px-2 py-1 text-right">Antes</th>
                <th className="border border-zinc-200 px-2 py-1 text-right">Después</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-200 px-2 py-1">p95 (ms)</td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.before.p95}
                </td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.after.p95}
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-200 px-2 py-1">p99 (ms)</td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.before.p99}
                </td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.after.p99}
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-200 px-2 py-1">Error (%)</td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.before.error.toFixed(1)}
                </td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.after.error.toFixed(1)}
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-200 px-2 py-1">Throughput (RPS)</td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.before.rps}
                </td>
                <td className="border border-zinc-200 px-2 py-1 text-right">
                  {meta.caseStudy.metrics.after.rps}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}