import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

import Styles from './Sidebar.module.css';
import Logotype from '../logotype.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, Styles.sidebar)}>
      <Logotype className={Styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
