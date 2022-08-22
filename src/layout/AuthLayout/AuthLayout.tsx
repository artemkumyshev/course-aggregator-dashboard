import cn from 'classnames';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import BackgroundImage from '@assets/bg_1.svg';
import Logo from '@components/Logo';
import { ROUTES } from '@utils/routes/constants';

import styles from './AuthLayout.module.scss';
import Title from '@components/Ui/Title';

interface IAuthLayoutProps {
  title: string;
}

const MENU = [
  { to: ROUTES.SIGN_IN, title: 'Авторизация' },
  { to: ROUTES.SIGN_UP, title: 'Регистрация' }
];

const AuthLayout: React.FC<IAuthLayoutProps> = ({ title }) => (
  <div className={styles.layout}>
    <div className='container'>
      <div className={styles.layout__wrapper}>
        <header className={styles.layout__header}>
          <Logo className={styles.layout__logo} />
          <div className={styles.layout__menu}>
            {MENU.map(({ to, title }, i) => (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  cn(styles['layout__menu-link'], isActive && styles['layout__menu-link_active'])
                }
                to={to}
              >
                {title}
              </NavLink>
            ))}
          </div>
        </header>
        <div className={styles.layout__media}>
          <img src={BackgroundImage} alt='auth page ' />
        </div>
        <div className={styles.layout__main}>
          <Title className={styles.layout__title}>{title}</Title>
          <Outlet />
        </div>
        <footer className={styles.layout__footer}>layout__footer</footer>
      </div>
    </div>
  </div>
);

export default AuthLayout;
