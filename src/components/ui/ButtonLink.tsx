import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/classNames';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function ButtonLink({ children, className, variant = 'primary', ...props }: ButtonLinkProps) {
  return (
    <a className={cx('btn', variant, className)} {...props}>
      {children}
    </a>
  );
}
