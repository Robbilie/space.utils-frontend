
  import React from 'react';
  import Corporation from './Corporation';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/corporations/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.Corporation.get_corporations_corporation_id({
        corporation_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Corporation - ${data.name}`,
        ogp: {
          title: `Corporation - ${data.name}`,
          description: `Ticker: ${data.ticker}${data.alliance_id ? ` | Alliance: ${data.alliance.name}` : ''}`,
          image: `https://imageserver.eveonline.com/Corporation/${data.id}_128.png`,
        },
        jsonld: {
          '@type': 'Organization',
          name: data.name,
          logo: `https://imageserver.eveonline.com/Corporation/${data.id}_128.png`,
        },
        component: <Corporation data={data} />,
        location: { path },
      };
    },

  }];
