import type { ValidationSchema } from '../types';
import {
  BODY_MAX_LENGTH_ERROR_MESSAGE,
  FIELD_MIN_LENGTH_ERROR_MESSAGE,
  MAX_BODY_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_TEXT_LENGTH,
  TITLE_MAX_LENGTH_ERROR_MESSAGE,
} from '../constants';

export const validationSchema: ValidationSchema = {
  title: [
    {
      validator: (value: string) => value.trim().length > MIN_TEXT_LENGTH,
      message: FIELD_MIN_LENGTH_ERROR_MESSAGE,
    },
    {
      validator: (value: string) => value.length <= MAX_TITLE_LENGTH,
      message: TITLE_MAX_LENGTH_ERROR_MESSAGE,
    },
  ],
  body: [
    {
      validator: (value: string) => value.trim().length > MIN_TEXT_LENGTH,
      message: FIELD_MIN_LENGTH_ERROR_MESSAGE,
    },
    {
      validator: (value: string) => value.length <= MAX_BODY_LENGTH,
      message: BODY_MAX_LENGTH_ERROR_MESSAGE,
    },
  ],
};

export const validateField = (
  field: string,
  value: string,
  schema: ValidationSchema
): string | null => {
  const rules = schema[field];
  if (!rules) return null;

  for (let rule of rules) {
    if (!rule.validator(value)) {
      return rule.message;
    }
  }

  return null;
};
