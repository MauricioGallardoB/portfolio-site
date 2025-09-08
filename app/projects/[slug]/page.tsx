import { notFound } from 'next/navigation';

const data: Record<string, { title: string; summary: string; stack: string[]; repo: string; }>= {
  'rate-limiter': {
    title: 'Rate Limiter Distribuido (Go)',
    summary: 'Token bucket en Redis para límites por usuario/endpoint; métricas p95.',
    stack: ['Go','Redis','Docker','k6'],
    repo: 'https://github.com/MauricioGallardoB/rate-limiter'
  },
  'chat-ws': {
    title: 'Chat WebSocket (Node.js)',
    summary: 'Broadcast y rooms; pruebas de carga con k6; reconexión exponencial.',
    stack: ['Node','WebSocket','Docker','k6'],
    repo: 'https://github.com/MauricioGallardoB/chat-ws'
  },
  'matchmaker': {
    title: 'Matchmaker (Node.js)',
    summary: 'Emparejamiento por ELO y latencia; colas y fairness.',
    stack: ['Node','Queues','k6'],
    repo: 'https://github.com/MauricioGallardoB/matchmaker'
  },
  'luau-module': {
    title: 'Módulo de Telemetría (Luau)',
    summary: 'Wrapper simple para métricas/eventos en Roblox (Luau).',
    stack: ['Luau'],
    repo: 'https://github.com/MauricioGallardoB/luau-module'
  }
};

export async function generateStaticParams() {
  return Object.keys(data).map(slug => ({ slug }));
}

export const dynamicParams = false;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = data[params.slug];
  if (!p) return notFound();

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <p className="text-zinc-700 dark:text-zinc-300">{p.summary}</p>
      <p className="text-sm">Stack: {p.stack.join(', ')}</p>
      <a className="text-sm underline" href={p.repo} target="_blank">Repositorio</a>
    </article>
  );
}
