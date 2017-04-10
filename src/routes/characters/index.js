
  import React from 'react';
  import Layout from '../../components/Layout';
  import Character from './Character';

  export default [{

    path: '/characters/:id/',

    async action({ path }) {
      return {
        title: 'Character',
        component: <Layout location={{ path }}><Character /></Layout>,
      };
    },

  }];
