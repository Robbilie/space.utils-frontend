
  import React from 'react';
  import Layout from '../../components/Layout';
  import Killmail from './Killmail';
  import Killmails from './Killmails';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/killmails/:id/',

    async action({ store, path, params: { id } }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.killmails.KillmailHandler_get_by_id({ killmail_id: parseInt(id) });
      store.dispatch(set_loading(false));
      return {
        title: `Killmail - ${data.id}`,
        component: <Layout location={{ path }}><Killmail data={data} /></Layout>,
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
