export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-zinc-950/70">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-serif text-xl tracking-tight">Mauricio Gallardo</a>
        <nav className="text-sm space-x-6">
          <a className="hover:opacity-70" href="/projects">Work</a>
          <a className="hover:opacity-70" href="/blog">Journal</a>
          <a className="hover:opacity-70" href="/resume">Resume</a>
        </nav>
      </div>
    </header>
  );
}
