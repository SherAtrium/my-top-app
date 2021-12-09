import cn from 'classnames';
import { ButtonProps } from './Button.props';

import Styles from './Button.module.css';

export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(Styles.button, {
        [Styles.primary]: appearance === 'primary',
        [Styles.ghost]: appearance === 'ghost',
      })}
    >
      {children}
    </button>
  );
};
