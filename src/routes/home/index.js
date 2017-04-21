
  import React from 'react';
  import Home from './Home';

  export default [{

    path: '/',

    async action({ path }) {
      return {
        title: 'Home',
        component: <Home />,
        location: { path },
      };
    },

  }];
