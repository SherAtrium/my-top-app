import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';

import RateIcon from './rate.svg';
import Styles from './HhData.module.css';

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={Styles.hh}>
      <Card className={Styles.count}>
        <div className={Styles.title}>Всего вакансии</div>
        <div className={Styles.countValue}>{count}</div>
      </Card>

      <Card className={Styles.salary}>
        <div>
          <div className={Styles.title}>Начальный</div>
          <div className={Styles.salaryValue}>{juniorSalary}</div>
          <div className={Styles.rate}>
            <RateIcon className={Styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={Styles.title}>Средний</div>
          <div className={Styles.salaryValue}>{middleSalary}</div>
          <div className={Styles.rate}>
            <RateIcon className={Styles.filled} />
            <RateIcon className={Styles.filled} />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={Styles.title}>Профессионал</div>
          <div className={Styles.salaryValue}>{seniorSalary}</div>
          <div className={Styles.rate}>
            <RateIcon className={Styles.filled} />
            <RateIcon className={Styles.filled} />
            <RateIcon className={Styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
