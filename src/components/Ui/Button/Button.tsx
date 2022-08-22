import React from 'react';
import cn from 'classnames';

import { IButtonProps } from './Button.props';
import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({
  appearance = 'primary',
  children,
  className,
  ...props
}) => (
  <button className={cn(styles.button, styles[`button_${appearance}`])} {...props}>
    {children}
  </button>
);

export default Button;
