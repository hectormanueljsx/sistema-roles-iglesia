import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { HeroProvider } from '@/providers/HeroProvider';
import { Toaster } from 'sonner';

import '../styles/globals.css';

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sistema de Roles | Iglesia Cristiana Evangélica Príncipe de Paz',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-MX'>
      <body className={`${outfitSans.variable} antialiased font-display`}>
        <Toaster />
        <HeroProvider>
          <main className='min-h-screen bg-white'>{children}</main>
        </HeroProvider>
      </body>
    </html>
  );
}
