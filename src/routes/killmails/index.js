
  import React from 'react';
  import Layout from '../../components/Layout';
  import Killmail from './Killmail';
  import Killmails from './Killmails';

  export default [{

    path: '/killmails/:id/',

    async action() {
      return {
        title: 'Killmail',
        component: <Layout><Killmail /></Layout>,
      };
    },

  }, {

    path: '/killmails/',

    async action() {
      return {
        title: 'Killmails',
        component: <Layout><Killmails /></Layout>,
      };
    },

  }];
