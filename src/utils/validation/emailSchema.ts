import { maxLength } from './rules/maxLength';
import { minLength } from './rules/minLength';
import { patterEmail } from './rules/patternEmail';
import { required } from './rules/required';

export const emailSchema = {
  required,
  minLength: minLength(2),
  maxLength: maxLength(35),
  pattern: patterEmail
};
