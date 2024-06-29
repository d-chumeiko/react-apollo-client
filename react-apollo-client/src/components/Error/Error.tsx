import React from 'react';

import styles from './Error.module.scss';

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.error}>{message}</div>
);
