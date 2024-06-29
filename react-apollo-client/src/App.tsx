import React from 'react';

import PostListContainer from './containers/PostListContainer';
import { APP_TITLE } from './constants';

import './App.scss';

const App = () => {
  return (
    <>
      <header>
        <h1>{APP_TITLE}</h1>
      </header>

      <main>
        <PostListContainer />
      </main>
    </>
  );
};

export default App;
