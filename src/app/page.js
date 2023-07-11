import '@/styles/globals.scss';

import { Home, About, Skills, Work, Contact } from '@/sections';
import { Navbar, Footer } from '@/components';

export default function Index() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
