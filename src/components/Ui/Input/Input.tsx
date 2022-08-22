import React from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

interface IInputProps extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean;
  error?: string;
}

const Input: React.FC<IInputProps> = React.forwardRef(
  ({ id, placeholder, error, ...props }, inputRef) => (
    <label className={styles.field} htmlFor={id}>
      <span className={cn(styles.label, { [styles.label_error]: !!error })}>{placeholder}</span>
      <input
        className={cn(styles.input, { [styles.input_error]: !!error })}
        id={id}
        ref={inputRef}
        {...props}
        autoComplete={false}
      />
      <span className={styles.error}>{error}</span>
    </label>
  )
);

export default Input;
