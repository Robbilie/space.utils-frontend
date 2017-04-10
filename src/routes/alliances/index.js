
  import React from 'react';
  import Layout from '../../components/Layout';
  import Alliance from './Alliance';

  export default [{

    path: '/alliances/:id/',

    async action(act) {
      console.log('alli route', act);
      return {
        title: 'Alliance',
        component: <Layout><Alliance /></Layout>,
      };
    },

  }];
