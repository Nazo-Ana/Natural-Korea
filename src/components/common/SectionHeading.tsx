import type { ReactNode } from 'react';
import { cx } from '../../utils/classNames';

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, children, light = false, center = false }: SectionHeadingProps) {
  return (
    <div className={cx('section-heading', center && 'center')}>
      {eyebrow ? <p className={cx('section-label reveal', light && 'light')}>{eyebrow}</p> : null}
      <h2 className={cx('section-title reveal reveal-delay-1', light && 'light')}>{children}</h2>
    </div>
  );
}
