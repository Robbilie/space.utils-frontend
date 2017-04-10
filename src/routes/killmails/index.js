
  import React from 'react';
  import Layout from '../../components/Layout';
  import Killmail from './Killmail';
  import Killmails from './Killmails';

  export default [{

    path: '/killmails/:id/',

    async action({ path }) {
      return {
        title: 'Killmail',
        component: <Layout location={{ path }}><Killmail /></Layout>,
      };
    },

  }, {

    path: '/killmails/',

    async action({ path }) {
      return {
        title: 'Killmails',
        component: <Layout location={{ path }}><Killmails /></Layout>,
      };
    },

  }];
