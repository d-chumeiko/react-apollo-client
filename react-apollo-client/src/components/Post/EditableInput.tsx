import React from 'react';

import styles from './Post.module.scss';

interface EditableInputProps {
  value: string;
  error: string | null;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export const EditableInput: React.FC<EditableInputProps> = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <div className={styles.editableInputWrapper}>
    <input
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className={styles.editableInput}
      autoFocus
    />
    {error && <div className={styles.editableError}>{error}</div>}
  </div>
);
