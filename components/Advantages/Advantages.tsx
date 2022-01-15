import { AdvantagesProps } from './Advantages.props';

import CheckIcon from './check.svg';
import Styles from './Advantages.module.css';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={Styles.advantage}>
          <CheckIcon />
          <div className={Styles.title}>{a.title}</div>
          <hr className={Styles.vLine} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
