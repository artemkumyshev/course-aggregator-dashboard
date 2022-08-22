import { required } from './rules/required';
import { maxLength } from './rules/maxLength';
import { minLength } from './rules/minLength';

export const passwordSchema = {
  required,
  minLength: minLength(2),
  maxLength: maxLength(15)
};
