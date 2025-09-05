import './globals.css';

export const metadata = {
  title: 'Mauricio Gallardo — Software Engineer',
  description:
    'Portafolio técnico: sistemas distribuidos, rendimiento, seguridad y Luau.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}