export default function sitemap() {
  return [
    {
      url: 'https://erwannrousseau.com',
      lastModified: new Date(),
      changeFrequency: 'montly',
      priority: 1,
    },
    {
      url: 'https://erwannrousseau.com/legal/conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://erwannrousseau.com/legal/confidentialite',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
