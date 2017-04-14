
  import React from 'react';
  import Layout from '../../components/Layout';
  import Killmail from './Killmail';
  import Killmails from './Killmails';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/killmails/:id/',

    async action({ store, params: { id } }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.killmails.KillmailHandler_get_by_id({ killmail_id: parseInt(id) });
      store.dispatch(set_loading(false));
      return {
        title: `Killmail - ${data.id}`,
        component: <Killmail data={data} />,
      };
    },

  }, {

    path: '/killmails/',

    async action({ store }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.killmails.KillmailHandler_filter({
        body: {
          filter: Object.assign({}, this.lowKillID ? { id: { $lt: this.id } } : {}),
          options: { "sort": { "id": -1 }, "limit": 50 }
        }
      });
      store.dispatch(set_loading(false));
      return {
        title: 'Killmails',
        component: <Killmails data={data} />,
      };
    },

  }];
