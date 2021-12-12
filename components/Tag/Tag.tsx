import { TagProps } from './Tag.props';
import Styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  href,
  children,
  className,
  size = 's',
  color = 'ghost',
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(Styles.tag, className, {
        [Styles.s]: size === 's',
        [Styles.m]: size === 'm',
        [Styles.red]: color === 'red',
        [Styles.gray]: color === 'gray',
        [Styles.ghost]: color === 'ghost',
        [Styles.green]: color === 'green',
        [Styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
