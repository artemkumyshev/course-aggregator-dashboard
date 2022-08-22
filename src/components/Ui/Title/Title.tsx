import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title: React.FC<ITitleProps> = ({ level = 1, children, className, ...props }) => {
  const Tag: HeadingTag = `h${level}`;
  return (
    <Tag className={cn(styles.heading, styles[`heading_${level}`], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
