import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Mauricio Gallardo · Portfolio',
  description: 'Arquitectura de software, sistemas distribuidos y rendimiento.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-paper text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
