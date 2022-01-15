import { SortProps, SortEnum } from './Sort.props';
import cn from 'classnames';

import SortIcon from './sort.svg';
import Styles from './Sort.module.css';

export const Paragraph = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(Styles.sort, className)} {...props}>
      <span
        className={cn({ [Styles.active]: sort === SortEnum.Rating })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={Styles.sortIcon} />
        По Рейтингу
      </span>

      <span
        className={cn({ [Styles.active]: sort === SortEnum.Price })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={Styles.sortIcon} />
        По Цене
      </span>
    </div>
  );
};
