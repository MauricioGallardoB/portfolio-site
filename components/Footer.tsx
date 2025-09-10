export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mauricio Gallardo</p>
          <p>
            <a className="underline underline-offset-2" href="mailto:mauricio.gallardob@udem.edu">
              mauricio.gallardob@udem.edu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
