export const metadata = {
  title: 'Reduciendo p95 con colas y caché',
  description: 'Técnicas prácticas para bajar la latencia en percentiles altos.',
};

export default function PostP95() {
  return (
    <main className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Reduciendo p95 con colas y caché</h1>
      <p>Usa cachés cerca del productor, precomputación y colas para desacoplar trabajo costoso del request crítico.</p>
      <ul>
        <li><b>Caché write-through</b>: reduce TTFB en endpoints calientes.</li>
        <li><b>Colas</b>: evacúa trabajo de I/O a workers; protege al DB.</li>
        <li><b>Métricas</b>: observa p95/p99 por endpoint, no solo promedio.</li>
      </ul>
    </main>
  );
}
