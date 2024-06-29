import React from 'react';

import styles from './Post.module.scss';

interface EditableTextareaProps {
  value: string;
  error: string | null;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export const EditableTextarea: React.FC<EditableTextareaProps> = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <div className={styles.editableTextareaWrapper}>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className={styles.editableTextarea}
      autoFocus
    />
    {error && <div className={styles.editableError}>{error}</div>}
  </div>
);
