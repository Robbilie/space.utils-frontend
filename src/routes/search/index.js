
  import React from 'react';
  import Layout from '../../components/Layout';
  import Search from './Search';
  import { set_searching, set_search } from '../../actions/layout';

  export default [{

    path: '/search/:query/',

    async action({ store, path, params: { query } }) {
      store.dispatch(set_searching(true));
      store.dispatch(set_search(query));
      return {
        title: `Search - ${query}`,
        component: <Layout location={{ path }}><Search query={query} /></Layout>,
      };
    },

  }, {

    path: '/search/',

    async action({ path }) {
      return {
        title: 'Search',
        component: <Layout location={{ path }}><Search query="" /></Layout>,
      };
    },

  }];
