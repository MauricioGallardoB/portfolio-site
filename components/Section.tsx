export default function Section(
  { kicker, title, children }:
  { kicker?: string; title: string; children: React.ReactNode }
) {
  return (
    <section className="border-b py-16 last:border-b-0">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          {kicker && <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{kicker}</p>}
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
