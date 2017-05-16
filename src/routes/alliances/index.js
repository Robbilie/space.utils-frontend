
  import React from 'react';
  import Alliance from './Alliance';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/alliances/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.Alliance.get_alliances_alliance_id({
        alliance_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Alliance - ${data.name}`,
        ogp: {
          title: `Alliance - ${data.name}`,
          description: `Ticker: ${data.ticker}${data.executor_corporation_id ? ` | Executor: ${data.executor_corporation.name}` : ''}`,
          image: `https://imageserver.eveonline.com/Alliance/${data.id}_128.png`,
        },
        jsonld: {
          '@type': 'Organization',
          name: data.name,
          logo: `https://imageserver.eveonline.com/Alliance/${data.id}_128.png`,
        },
        component: <Alliance data={data} />,
        location: { path },
      };
    },

  }];
