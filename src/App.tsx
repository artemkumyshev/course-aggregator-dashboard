import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@utils/routes';

import './App.scss';
import { useAuth, authFetch, login, logout } from '@utils/services/auth/AuthProvider';

const App = () => {
  const [isAuth] = useAuth();

  const routing = useRoutes(routes(isAuth));

  console.log(isAuth);

  return <div>{routing}</div>;
};

export default App;
