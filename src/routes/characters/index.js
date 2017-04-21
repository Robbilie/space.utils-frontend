
  import React from 'react';
  import Character from './Character';
  import { set_loading } from '../../actions/layout';
  import EASClient from '../../utils/EASClient';

  export default [{

    path: '/characters/:id/',

    async action({ path, store, params: { id } }) {
      store.dispatch(set_loading(true));
      let client = await EASClient;
      let { obj: data } = await client.characters.CharacterHandler_get_by_id({ character_id: parseInt(id) });
      store.dispatch(set_loading(false));
      return {
        title: `Character - ${data.name}`,
        component: <Character data={data} />,
        location: { path },
      };
    },

  }];
