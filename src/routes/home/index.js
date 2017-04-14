
  import React from 'react';
  import Home from './Home';

  export default [{

    path: '/',

    async action() {
      return {
        title: 'Home',
        component: <Home />,
      };
    },

  }];
