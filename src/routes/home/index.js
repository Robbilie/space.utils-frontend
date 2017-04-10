
  import React from 'react';
  import Layout from '../../components/Layout';
  import Home from './Home';

  export default [{

    path: '/',

    async action({ path }) {
      return {
        title: 'Home',
        component: <Layout location={{ path }}><Home /></Layout>,
      };
    },

  }];
