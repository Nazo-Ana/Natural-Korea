import { ProductCard } from '../cards';
import { SectionIntro } from '../shared';
import { products } from '../../data/siteContent';
import { revealDelayClass } from '../../utils/reveal';

export default function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <SectionIntro
        eyebrow="Our Portfolio"
        light
        copy="Every product crafted to the highest Korean standards, designed to deliver real results."
      >
        Premium <em>Supplement</em> Range
      </SectionIntro>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard className={`product-card reveal ${revealDelayClass(index)}`} key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
