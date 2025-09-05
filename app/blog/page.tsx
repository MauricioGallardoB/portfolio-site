import Link from 'next/link';

const posts = [
  {
    slug: 'reduciendo-p95-con-colas-y-cache',
    title: 'Reduciendo p95 con colas y caché',
    excerpt:
      'Explora cómo las colas y cachés ayudan a reducir la latencia en los percentiles más altos, mejorando la experiencia del usuario.',
  },
  {
    slug: 'disenando-un-rate-limiter-distribuido',
    title: 'Cómo diseñar un rate limiter distribuido',
    excerpt:
      'Comparación de token bucket y leaky bucket, y cómo elegir la estrategia adecuada para sistemas de alta concurrencia.',
  },
];

export default function Blog() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog Técnico</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-zinc-600 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="underline">
              Leer más
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}