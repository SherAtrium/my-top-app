import { InputProps } from './Input.props';
import cn from 'classnames';

import Styles from './Input.module.css';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(className, Styles.input)} {...props} />;
};
