import SectionHeading from './SectionHeading.jsx';
import { products } from '../data/siteContent.js';

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="section-intro">
        <SectionHeading eyebrow="Our Portfolio" light center>
          Premium <em>Supplement</em> Range
        </SectionHeading>
        <p className="intro-copy reveal reveal-delay-2">
          Every product crafted to the highest Korean standards, designed to deliver real results.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <article className={`product-card reveal reveal-delay-${Math.min(index, 3)}`} key={product.name}>
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
