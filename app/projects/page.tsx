const projects = [
  { slug: 'rate-limiter', title: 'Rate Limiter Distribuido (Go)', repo: 'https://github.com/MauricioGallardoB/rate-limiter' },
  { slug: 'chat-ws', title: 'Chat WebSocket (Node.js)', repo: 'https://github.com/MauricioGallardoB/chat-ws' },
  { slug: 'matchmaker', title: 'Matchmaker (Node.js)', repo: 'https://github.com/MauricioGallardoB/matchmaker' },
  { slug: 'luau-module', title: 'Módulo de Telemetría (Luau)', repo: 'https://github.com/MauricioGallardoB/luau-module' },
];

export const metadata = { title: 'Projects' };

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map(p => (
          <li key={p.slug} className="border rounded-xl p-4">
            <div className="flex items-center justify-between">
              <a className="font-medium" href={`/projects/${p.slug}`}>{p.title}</a>
              <a className="text-sm" href={p.repo} target="_blank">Código →</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
