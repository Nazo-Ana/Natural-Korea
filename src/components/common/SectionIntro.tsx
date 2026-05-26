import type { ReactNode } from 'react';
import { cx } from '../../utils/classNames';
import SectionHeading from './SectionHeading';

type SectionIntroProps = {
  eyebrow: string;
  children: ReactNode;
  copy?: string;
  light?: boolean;
  darkCopy?: boolean;
};

export default function SectionIntro({ eyebrow, children, copy, light = false, darkCopy = false }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <SectionHeading eyebrow={eyebrow} light={light} center>
        {children}
      </SectionHeading>
      {copy ? <p className={cx('intro-copy reveal reveal-delay-2', darkCopy && 'dark')}>{copy}</p> : null}
    </div>
  );
}
