import cn from 'classnames';
import { ButtonProps } from './Button.props';

import ArrowIcon from './arrow.svg';
import Styles from './Button.module.css';

export const Button = ({
  arrow = 'none',
  appearance,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(Styles.button, className, {
        [Styles.primary]: appearance === 'primary',
        [Styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(Styles.arrow, {
            [Styles.down]: arrow === 'down',
            [Styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
