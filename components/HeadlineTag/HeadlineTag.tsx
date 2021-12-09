import { HeadlineTagProps } from './HeadlineTag.props';

import Styles from './HeadlineTag.module.css';

export const HeadlineTag = ({
  children,
  tag,
}: HeadlineTagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={Styles.h1}>{children}</h1>;

    case 'h2':
      return <h2 className={Styles.h2}>{children}</h2>;

    case 'h3':
      return <h3 className={Styles.h3}>{children}</h3>;

    default:
      return <></>;
  }
};
