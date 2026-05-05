import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Certifications from './components/Certifications.jsx';
import About from './components/About.jsx';
import FeaturedProduct from './components/FeaturedProduct.jsx';
import Products from './components/Products.jsx';
import GinsengFeature from './components/GinsengFeature.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Manufacturing from './components/Manufacturing.jsx';
import Leadership from './components/Leadership.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Certifications />
        <About />
        <FeaturedProduct />
        <Products />
        <GinsengFeature />
        <WhyChoose />
        <Manufacturing />
        <Leadership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
