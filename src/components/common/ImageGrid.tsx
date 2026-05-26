import type { ImageAsset } from '../../types/content';
import { cx } from '../../utils/classNames';

type ImageGridProps = {
  images: ImageAsset[];
  className?: string;
  mainWide?: boolean;
  badge?: string;
};

export default function ImageGrid({ images, className, mainWide = false, badge }: ImageGridProps) {
  const [mainImage, ...smallImages] = images;

  if (!mainImage) {
    return null;
  }

  return (
    <div className={cx('image-grid', className)}>
      <div className={cx('image-main', mainWide && 'wide')}>
        <img src={mainImage.src} alt={mainImage.alt} />
        {badge ? <div className="image-badge">{badge}</div> : null}
      </div>
      {smallImages.map((image) => (
        <div className="image-small" key={image.alt}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
