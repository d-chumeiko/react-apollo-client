import React from 'react';

import { POSTS_LOADING_TITLE } from '../../constants';
import styles from './Loading.module.scss';

export const Loading: React.FC = () => (
  <div className={styles.loading}>{POSTS_LOADING_TITLE}</div>
);
