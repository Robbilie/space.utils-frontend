
  import React from 'react';
  import Layout from '../../components/Layout';
  import Corporation from './Corporation';

  export default [{

    path: '/corporations/:id/',

    async action({ path }) {
      return {
        title: 'Corporation',
        component: <Layout location={{ path }}><Corporation /></Layout>,
      };
    },

  }];
