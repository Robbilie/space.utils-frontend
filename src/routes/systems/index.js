
  import React from 'react';
  import Layout from '../../components/Layout';
  import System from './System';

  export default [{

    path: '/systems/:id/',

    async action({ path }) {
      return {
        title: 'System',
        component: <Layout location={{ path }}><System /></Layout>,
      };
    },

  }];
