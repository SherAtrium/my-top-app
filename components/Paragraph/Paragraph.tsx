import { ParagraphProps } from './Paragraph.props';
import Styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
  size = 'm',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(Styles.p, className, {
        [Styles.s]: size === 's',
        [Styles.m]: size === 'm',
        [Styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
