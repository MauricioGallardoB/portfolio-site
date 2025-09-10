export default function GridGallery() {
  const cells = Array.from({length: 6});
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cells.map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] rounded-xl border bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
        />
      ))}
    </div>
  );
}
