import { HhDataProps } from './HhData.props';
import cn from 'classnames';

import Styles from './hhData.module.css';
import { Card } from '../Card/Card';

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={Styles.hh}>
      <Card className={Styles.count}>
        <div className={Styles.title}>Всего вакансии</div>
        <div className={Styles.countValue}>{count}</div>
      </Card>

      <Card className={Styles.count}>
        <div className={Styles.title}>Всего вакансии</div>
        <div className={Styles.countValue}>{count}</div>
      </Card>
    </div>
  );
};
