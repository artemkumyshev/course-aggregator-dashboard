import cn from 'classnames';
import React, { DetailedHTMLProps, LinkHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@utils/routes/constants';

import styles from './Logo.module.scss';

interface ILogoProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {}

const Logo: React.FC<ILogoProps> = ({ className }) => (
  <Link className={cn(styles.logo, className)} to={ROUTES.HOME}>
    <span className={cn(styles.logo__part, styles.logo__part_bg)}>Агреготор</span>
    <span className={styles.logo__part}>курсов</span>
  </Link>
);

export default Logo;
