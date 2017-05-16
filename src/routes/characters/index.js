
  import React from 'react';
  import Character from './Character';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/characters/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      const client = await EASClient;
      const { body: data } = await client.apis.Character.get_characters_character_id({
        character_id: parseInt(id, 10),
      });
      store.dispatch(set_loading(false));
      return {
        title: `Character - ${data.name}`,
        ogp: {
          title: `Character - ${data.name}`,
          description: `Corporation: ${data.corporation.name}${data.alliance_id ? ` | Alliance: ${data.alliance.name}` : ''}`,
          image: `https://imageserver.eveonline.com/Character/${data.id}_256.jpg`,
        },
        component: <Character data={data} />,
        location: { path },
      };
    },

  }];
