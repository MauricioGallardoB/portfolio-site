export default function ProjectCard(
  { title, summary, href, repo }:
  { title: string; summary: string; href: string; repo?: string }
) {
  return (
    <article className="group rounded-2xl border p-5 transition hover:shadow-lg">
      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 mb-4" />
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{summary}</p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <a className="underline underline-offset-4" href={href}>Ver caso →</a>
        {repo && <a className="underline underline-offset-4" href={repo} target="_blank">Código</a>}
      </div>
    </article>
  );
}
