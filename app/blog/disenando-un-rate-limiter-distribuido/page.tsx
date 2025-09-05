export const metadata = {
  title: 'Cómo diseñar un rate limiter distribuido',
  description:
    'Guía para construir limitadores de tasa escalables con algoritmos como token bucket y leaky bucket en entornos distribuidos.',
};

export default function PostRateLimiter() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Cómo diseñar un rate limiter distribuido
      </h1>
      <p className="text-zinc-700 mb-4">
        Un rate limiter controla la cantidad de peticiones que un cliente puede
        hacer en un intervalo. En sistemas distribuidos, este control debe
        escalar horizontalmente y ser consistente entre múltiples instancias. A
        continuación revisamos los algoritmos clásicos y cómo aplicarlos de
        forma distribuida.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Token bucket vs leaky bucket</h2>
      <p className="text-zinc-700 mb-4">
        El algoritmo <strong>token bucket</strong> llena un cubo con tokens a una
        tasa fija; cada petición consume un token. Si el cubo se vacía, las
        peticiones se rechazan o se bloquean hasta que haya tokens nuevos. Este
        enfoque permite ráfagas cortas mientras respeta la capacidad promedio.
      </p>
      <p className="text-zinc-700 mb-4">
        El <strong>leaky bucket</strong>, en cambio, deja salir solicitudes a una
        velocidad constante como si el cubo tuviera un agujero; cuando el cubo
        se llena, las peticiones excedentes se descartan. Es ideal para flujos
        uniformes y predecibles.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Implementación distribuida</h2>
      <p className="text-zinc-700 mb-4">
        Para que un rate limiter sea coherente entre varias instancias de
        servicio, se necesita un almacén compartido. Redis es una opción
        popular: se pueden almacenar contadores o tokens en claves con
        expiración y actualizarlas de forma atómica usando comandos como
        <code>INCR</code> o scripts Lua. DynamoDB o bases de datos de clave-valor
        similares también sirven si soportan incrementos atómicos.
      </p>
      <p className="text-zinc-700 mb-4">
        Otra estrategia es usar ventanas deslizantes (sliding window), donde
        registramos las marcas de tiempo de las últimas N peticiones y
        calculamos si se excede el límite. Aunque más preciso, requiere
        almacenar más datos y puede ser costoso si el throughput es alto.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Buenas prácticas</h2>
      <ul className="list-disc pl-5 text-zinc-700 mb-4 space-y-1">
        <li>
          Define límites por usuario, IP o token de autenticación para evitar
          aplicar un límite global injusto.
        </li>
        <li>
          Usa operaciones atómicas en tu almacén compartido para evitar
          condiciones de carrera; scripts Lua en Redis son ideales para esto.
        </li>
        <li>
          Considera un <em>circuit breaker</em> para degradar servicios externos si
          se supera el rate limit y dar mensajes claros al cliente.
        </li>
        <li>
          Instrumenta tu rate limiter: expone métricas (p95/p99 de latencia,
          tasa de hits y rechazos) y logs para auditar patrones de abuso.
        </li>
      </ul>
      <p className="text-zinc-700">
        Diseñar un rate limiter distribuido requiere elegir el algoritmo
        adecuado, utilizar un almacén de estado consistente y medir su impacto
        en la latencia y throughput. Implementarlo bien protege tus servicios
        y garantiza una experiencia justa para todos los usuarios.
      </p>
    </main>
  );
}