import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { LayoutProps } from './Layout.props';
import { FunctionComponent } from 'react';

import Styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={Styles.wrapper}>
      <Header className={Styles.header} />
      <Sidebar className={Styles.sidebar} />
      <div className={Styles.body}>{children}</div>
      <Footer className={Styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
