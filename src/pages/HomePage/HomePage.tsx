import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { defaultState } from '@store/state/authSlice';
import { useAppSelector } from '@store/hook';

import Button from '@components/Ui/Button';

import styles from './HomePage.module.scss';
import { ROUTES } from '@utils/routes/constants';
import { logout } from '@utils/services/auth/AuthProvider';

const HomePage = () => {
  const { firstName, lastName, login } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = () => {
    localStorage.removeItem('token');
    dispatch(defaultState());
    navigate(ROUTES.HOME);
    logout();
  };

  return (
    <div>
      <div>User: {`${firstName} ${lastName} (${login})`}</div>
      <Button onClick={signout}>Выйти</Button>
    </div>
  );
};

export default HomePage;
