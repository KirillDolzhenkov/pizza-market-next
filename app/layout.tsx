import type { Metadata } from 'next';

import React from 'react';

import { Header } from '@/components/shared';
import { Nunito } from 'next/font/google';

import './globals.css';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header />
          {children}
          {/*div*/}
        </main>
      </body>
    </html>
  );
}
