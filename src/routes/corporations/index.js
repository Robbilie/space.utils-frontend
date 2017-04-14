
  import React from 'react';
  import Corporation from './Corporation';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/corporations/:id/',

    async action({ store, params: { id } }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.corporations.CorporationHandler_get_by_id({ corporation_id: parseInt(id) });
      store.dispatch(set_loading(false));
      return {
        title: `Corporation - ${data.name}`,
        component: <Corporation data={data} />,
      };
    },

  }];
