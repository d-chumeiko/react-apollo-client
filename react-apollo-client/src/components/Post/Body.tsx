import React from 'react';

import styles from './Post.module.scss';

interface BodyProps {
  body: string;
  onClick: () => void;
}

export const Body: React.FC<BodyProps> = ({ body, onClick }) => (
  <p className={styles.postBody} onClick={onClick}>
    {body}
  </p>
);
