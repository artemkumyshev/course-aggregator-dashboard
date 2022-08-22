import { minLength } from './rules/minLength';
import { required } from './rules/required';

export const nameSchema = {
  required,
  minLength: minLength(2)
};
