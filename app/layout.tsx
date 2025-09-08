import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mauricio Gallardo · Portfolio',
  description: 'Distributed systems, performance, and Roblox-focused projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <header className="mx-auto max-w-3xl px-6 py-6">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-xl font-semibold">MG</a>
            <div className="space-x-4 text-sm">
              <a href="/projects">Projects</a>
              <a href="/blog">Blog</a>
              <a href="/resume">Resume</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-3xl px-6 py-12 text-sm text-zinc-500">
          © {new Date().getFullYear()} Mauricio Gallardo
        </footer>
      </body>
    </html>
  );
}
