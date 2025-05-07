import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
import Team from '@/components/sections/Team';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VVAI - Inovação e Tecnologia para o Futuro',
  description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.',
  keywords: 'VVAI, tecnologia, inovação, desenvolvimento, software, equipe',
  authors: [{ name: 'VVAI Team' }],
  openGraph: {
    title: 'VVAI - Inovação e Tecnologia para o Futuro',
    description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Team />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}
