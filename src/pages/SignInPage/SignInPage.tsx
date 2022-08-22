import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Constants
import { ROUTES } from '@utils/routes/constants';

// Redux
import { useSigninUserMutation } from '@store/api/authApi';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { setUser } from '@store/state/authSlice';

// Schema
import { passwordSchema } from '@utils/validation/passwordSchema';
import { emailSchema } from '@utils/validation/emailSchema';

// Components
import Input from '@components/Ui/Input';
import Button from '@components/Ui/Button';

// Props
import { IAuthSignInValues } from './SignInPage.props';

// Styles
import styles from './SignInPage.module.scss';
import { login } from '@utils/services/auth/AuthProvider';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signInUser, { data, isLoading, isSuccess }] = useSigninUserMutation();
  const { register, handleSubmit, formState } = useForm<IAuthSignInValues>();

  const { errors } = formState;

  if (isSuccess) {
    dispatch(
      setUser({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        login: data.user.login,
        email: data.user.email,
        token: data.user.token
      })
    );
    navigate(ROUTES.HOME);
    login(data.user.token);
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((user) => signInUser({ user: { ...user } }))}
      >
        <Input
          type='text'
          {...register('email', emailSchema)}
          error={errors.email?.message}
          placeholder='Email'
        />
        <Input
          type='password'
          {...register('password', passwordSchema)}
          error={errors.password?.message}
          placeholder='Пароль'
        />

        <Button type='submit'>{isLoading ? '...' : 'Отправить'}</Button>
      </form>
    </div>
  );
};

export default SignInPage;
