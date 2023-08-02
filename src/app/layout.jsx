import '@/styles/globals.scss';

export const metadata = {
  title: 'Portfolio Erwann Rousseau',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  'http-equiv': 'x-ua-compatible',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
