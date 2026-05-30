import type { Product } from '../../types/content';

type ProductCardProps = {
  product: Product;
  className: string;
};

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article className={className}>
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
  );
}
