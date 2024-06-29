export type ValidationRule = {
  validator: (value: string) => boolean;
  message: string;
};

export type ValidationSchema = {
  [key: string]: ValidationRule[];
};
