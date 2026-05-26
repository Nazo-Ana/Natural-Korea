import SectionIntro from '../components/common/SectionIntro';
import { products } from '../constants/siteContent';
import { revealDelayClass } from '../utils/reveal';

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
          <article className={`product-card reveal ${revealDelayClass(index)}`} key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.alt} />
            </div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p>{product.subtitle}</p>
              <ul>
                {product.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span>{product.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
