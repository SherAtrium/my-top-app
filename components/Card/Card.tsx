import { CardProps } from './Card.props';
import Styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(Styles.card, className, {
        [Styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
