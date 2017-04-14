
  import React from 'react';
  import Search from './Search';
  import { set_searching, set_search } from '../../actions/layout';

  export default [{

    path: '/search/:query/',

    async action({ store, params: { query } }) {
      store.dispatch(set_searching(true));
      store.dispatch(set_search(query));
      return {
        title: `Search - ${query}`,
        component: <Search query={query} />,
      };
    },

  }, {

    path: '/search/',

    async action() {
      return {
        title: 'Search',
        component: <Search query="" />,
      };
    },

  }];
