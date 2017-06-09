
  import React from 'react';
  import Type from './Type';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/types/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.Type.get_types_type_id({
        type_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Type - ${data.name}`,
        ogp: {
          title: `Type - ${data.name}`,
          description: `${data.description}`,
          image: `https://imageserver.eveonline.com/Type/${data.id}_64.png`,
        },
        jsonld: {
          '@type': 'Product',
          name: data.name,
          logo: `https://imageserver.eveonline.com/Type/${data.id}_64.png`,
        },
        component: <Type data={data} />,
        location: { path },
      };
    },

  }];
