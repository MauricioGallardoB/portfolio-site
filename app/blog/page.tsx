export const metadata = { title: 'Blog' };

export default function Blog() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/blog/reduciendo-p95-con-colas-y-cache">Reduciendo p95 con colas y caché</a></li>
        <li><a href="/blog/disenando-un-rate-limiter-distribuido">Cómo diseñar un rate limiter distribuido</a></li>
      </ul>
    </section>
  );
}
