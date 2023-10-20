import '@/styles/globals.scss';

export const metadata = {
  metadataBase: new URL('https://erwannrousseau.com'),
  title: 'Erwann Rousseau | Développeur Web Full-Stack à Nantes',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  'http-equiv': 'x-ua-compatible',
  descripton: 'Erwann Rousseau Développeur web fullstack à Nantes, next.js react php',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    },
  ],
  icons: {
    icon: [
      { url: 'https://erwannrousseau.com/favicon.ico', type: 'image/x-icon' },
      new URL('/apple-touch-icon.png', 'https://erwannrousseau.com'),
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Erwann Rousseau | Développeur Web Full-Stack à Nantes',
    description: 'Erwann Rousseau Développeur web fullstack à Nantes, next.js react php',
    url: 'https://erwannrousseau.com',
    siteName: 'Erwann Rousseau | Développeur Web Full-Stack',
    images: '/photo_cv.png',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
