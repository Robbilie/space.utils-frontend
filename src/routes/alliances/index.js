
  import React from 'react';
  import Alliance from './Alliance';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/alliances/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.alliances.AllianceHandler_get_by_id({
        alliance_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Alliance - ${data.name}`,
        component: <Alliance data={data} />,
        location: { path },
      };
    },

  }];
