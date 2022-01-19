import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

import Styles from './Textarea.module.css';

export const Textarea = ({
  className,
  ...props
}: TextareaProps): JSX.Element => {
  return <textarea className={cn(className, Styles.textarea)} {...props} />;
};
