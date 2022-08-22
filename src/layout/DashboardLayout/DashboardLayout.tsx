import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './DashboardLayout.module.scss';

const DashboardLayout: React.FC = () => (
  <div className={styles.layout}>
    <div className='container'>
      <div className={styles.layout__wrapper}>
        <header className={styles.layout__header}>dashboard__header</header>
        <div className={styles.layout__main}>
          <Outlet />
        </div>
        <footer className={styles.layout__footer}>dashboard__footer</footer>
      </div>
    </div>
  </div>
);

export default DashboardLayout;
