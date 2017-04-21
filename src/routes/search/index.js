
  import React from 'react';
  import Search from './Search';
  import { set_searching, set_search } from '../../actions/layout';

  export default [{

    path: '/search/:query/',

    async action({ path, store, params: { query } }) {
      store.dispatch(set_searching(true));
      store.dispatch(set_search(query));
      return {
        title: `Search - ${query}`,
        component: <Search query={query} />,
        location: { path },
      };
    },

  }, {

    path: '/search/',

    async action({ path }) {
      return {
        title: 'Search',
        component: <Search query="" />,
        location: { path },
      };
    },

  }];
