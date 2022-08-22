import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { passwordSchema } from '@utils/validation/passwordSchema';
import { nameSchema } from '@utils/validation/nameSchema';
import { emailSchema } from '@utils/validation/emailSchema';

import Title from '@components/Ui/Title';
import Input from '@components/Ui/Input';
import Button from '@components/Ui/Button';

import { IAuthSignUpValues } from './SignUpPage.props';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  const { register, handleSubmit, formState, setError } = useForm<IAuthSignUpValues>();

  const { isSubmitting, errors } = formState;

  return (
    <form className={styles.form} onSubmit={handleSubmit((user) => console.log(user))}>
      <div className={styles.form__group}>
        <Input
          type='text'
          {...register('firstName', nameSchema)}
          error={errors.firstName?.message}
          placeholder='Имя'
        />
      </div>
      <div className={styles.form__group}>
        <Input
          type='text'
          {...register('lastName', nameSchema)}
          error={errors.lastName?.message}
          placeholder='Фамилия'
        />
      </div>
      <div className={styles.form__group}>
        <Input
          type='text'
          {...register('login', nameSchema)}
          error={errors.login?.message}
          placeholder='Логин'
        />
      </div>
      <div className={styles.form__group}>
        <Input
          type='text'
          {...register('email', emailSchema)}
          error={errors.email?.message}
          placeholder='Email'
        />
      </div>
      <div className={styles.form__group}>
        <Input
          type='password'
          {...register('password', passwordSchema)}
          error={errors.password?.message}
          placeholder='Пароль'
        />
      </div>

      <Button type='submit'>Отправить</Button>
    </form>
  );
};

export default SignUpPage;
