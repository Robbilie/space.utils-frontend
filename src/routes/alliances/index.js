
  import React from 'react';
  import Layout from '../../components/Layout';
  import Alliance from './Alliance';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/alliances/:id/',

    async action({ store, path, params: { id } }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.alliances.AllianceHandler_get_by_id({ alliance_id: parseInt(id) });
      store.dispatch(set_loading(false));
      return {
        title: 'Alliance',
        component: <Layout location={{ path }}><Alliance data={data} /></Layout>,
      };
    },

  }];
