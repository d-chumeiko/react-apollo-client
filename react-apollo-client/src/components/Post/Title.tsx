import React from 'react';

import styles from './Post.module.scss';

interface TitleProps {
  title: string;
  onClick: () => void;
}

export const Title: React.FC<TitleProps> = ({ title, onClick }) => (
  <h2 className={styles.postTitle} onClick={onClick}>
    {title}
  </h2>
);
