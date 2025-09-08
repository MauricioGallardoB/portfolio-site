export const metadata = {
  title: 'Cómo diseñar un rate limiter distribuido',
  description: 'Token bucket en Redis y alternativas.',
};

export default function PostRL() {
  return (
    <main className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Cómo diseñar un rate limiter distribuido</h1>
      <p>El enfoque práctico: <b>token bucket</b> en Redis con <code>INCR</code> y TTL o Lua scripts idempotentes.</p>
      <ol>
        <li>Clave por {`{user}:{route}`} y ventana móvil.</li>
        <li>Degradación controlada: 429 + retry-after.</li>
        <li>Observabilidad: tasa de rechazos y latencia p95.</li>
      </ol>
    </main>
  );
}
