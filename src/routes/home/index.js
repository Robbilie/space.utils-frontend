
  import React from 'react';
  import Layout from '../../components/Layout';
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
