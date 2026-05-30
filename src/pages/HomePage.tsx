import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  FeaturedProductSection,
  GinsengFeatureSection,
  HeroSection,
  LeadershipSection,
  ManufacturingSection,
  ProductsSection,
  TestimonialsSection,
  WhyChooseSection,
} from '../components/sections';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
