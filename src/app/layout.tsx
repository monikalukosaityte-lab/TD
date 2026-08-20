import './globals.css';

import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { StyleGlideProvider } from '@/components/providers/styleglide-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stdtestkit.co.uk'),
  title: {
    default: 'Test Discreet | Fast STD & STI Test Kits',
    template: '%s | Test Discreet',
  },
  description:
    'Private, rapid STD and STI test kits from Test Discreet. Discreet delivery, clear results, and trusted support for confident health decisions.',
  keywords: [
    'STD test kit',
    'STI test kit',
    'discreet STI testing',
    'rapid STD testing UK',
    'private home test kit',
    'sexual health test',
  ],
  authors: [{ name: 'Test Discreet' }],
  creator: 'Test Discreet',
  publisher: 'Test Discreet',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/favicon/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stdtestkit.co.uk',
    siteName: 'Test Discreet',
    title: 'Test Discreet | Fast STD & STI Test Kits',
    description:
      'Private, rapid STD and STI test kits from Test Discreet. Discreet delivery, clear results, and trusted support for confident health decisions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Discreet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Discreet | Fast STD & STI Test Kits',
    description:
      'Private, rapid STD and STI test kits from Test Discreet. Discreet delivery, clear results, and trusted support for confident health decisions.',
    images: ['/og-image.jpg'],
    creator: '@testdiscreet',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col antialiased ${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <StyleGlideProvider />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
