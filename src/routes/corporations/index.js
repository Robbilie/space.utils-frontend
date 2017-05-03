
  import React from 'react';
  import Corporation from './Corporation';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/corporations/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.corporations.CorporationHandler_get_by_id({
        corporation_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Corporation - ${data.name}`,
        component: <Corporation data={data} />,
        location: { path },
      };
    },

  }];
