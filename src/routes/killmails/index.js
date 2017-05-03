
  import React from 'react';
  import Killmail from './Killmail';
  import Killmails from './Killmails';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/killmails/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.killmails.KillmailHandler_get_by_id({
        killmail_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Killmail - ${data.id}`,
        component: <Killmail data={data} />,
        location: { path },
      };
    },

  }, {

    path: '/killmails/',

    async action({ path, store, query }) {
      console.log(query);
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.killmails.KillmailHandler_filter({
        body: {
          filter: Object.assign(
            {},
            query.max_id ? { id: { $lt: parseInt(query.max_id, 10) } } : {},
          ),
          options: { sort: { id: -1 }, limit: 50 },
        },
      });
      store.dispatch(set_loading(false));
      return {
        title: 'Killmails',
        component: <Killmails data={data} />,
        location: { path },
      };
    },

  }];
