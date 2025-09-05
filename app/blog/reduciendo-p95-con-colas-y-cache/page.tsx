export const metadata = {
  title: 'Reduciendo p95 con colas y caché',
  description:
    'Guía práctica para reducir la latencia en los percentiles altos usando colas y sistemas de caché.',
};

export default function PostP95() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Reduciendo p95 con colas y caché</h1>
      <p className="text-zinc-700 mb-4">
        Cuando diseñamos APIs o servicios en tiempo real, la experiencia del usuario no se
        rige por el promedio de latencia sino por los percentiles más altos (p95,
        p99). Estos valores reflejan lo que sienten los usuarios en los peores
        momentos. Una media de 100 ms puede ocultar que el 5 % de las peticiones
        tardan más de 500 ms, generando frustración.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Por qué p95 importa?</h2>
      <p className="text-zinc-700 mb-4">
        Focalizarse en el p95 permite identificar y resolver cuellos de botella y
        comportamientos no deterministas como picos de GC, contención de
        recursos o peticiones a servicios externos. Al optimizar estos casos
        extremos, elevamos la calidad percibida y cumplimos SLOs exigentes.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Colas para desacoplar y suavizar picos</h2>
      <p className="text-zinc-700 mb-4">
        Las colas de mensajes (RabbitMQ, Kafka, SQS) permiten mover trabajo
        pesado a segundo plano. Al recibir una petición, respondemos rápido
        mientras encolamos la tarea para ser procesada por workers. Esto reduce
        la latencia percibida y protege a nuestro servicio de ráfagas de
        solicitudes.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Cachés para evitar trabajo redundante</h2>
      <p className="text-zinc-700 mb-4">
        Almacenando las respuestas o resultados de operaciones costosas en
        memoria (Redis, Memcached, CDN) evitamos recalcular siempre lo mismo.
        Una caché bien dimensionada disminuye la carga sobre la base de datos y
        mantiene la latencia consistente incluso bajo carga intensa.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Buenas prácticas</h2>
      <ul className="list-disc pl-5 text-zinc-700 mb-4 space-y-1">
        <li>Define SLOs claros (p95, p99, tasa de error) y mídelo continuamente.</li>
        <li>
          Ajusta el tamaño de la cola y la concurrencia de los workers según tu
          throughput objetivo.
        </li>
        <li>
          Configura políticas de expiración y eviction en tu caché para evitar
          datos desactualizados.
        </li>
        <li>
          Combina colas y cachés: procesa mensajes de cola y actualiza cachés
          para tener siempre datos frescos.
        </li>
      </ul>
      <p className="text-zinc-700">
        Reducir los percentiles altos no es magia; es un trabajo sistemático
        que implica observabilidad, colas para desacoplar cargas y cachés para
        minimizar el trabajo redundante. Estas técnicas son esenciales para
        sistemas en tiempo real como los que encontrarás en Roblox o cualquier
        plataforma de alto tráfico.
      </p>
    </main>
  );
}