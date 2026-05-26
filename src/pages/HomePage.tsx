import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import AboutSection from '../sections/AboutSection';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';
import FeaturedProductSection from '../sections/FeaturedProductSection';
import GinsengFeatureSection from '../sections/GinsengFeatureSection';
import HeroSection from '../sections/HeroSection';
import LeadershipSection from '../sections/LeadershipSection';
import ManufacturingSection from '../sections/ManufacturingSection';
import ProductsSection from '../sections/ProductsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import WhyChooseSection from '../sections/WhyChooseSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CertificationsSection />
        <AboutSection />
        <FeaturedProductSection />
        <ProductsSection />
        <GinsengFeatureSection />
        <WhyChooseSection />
        <ManufacturingSection />
        <LeadershipSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
