
  import React from 'react';
  import Layout from '../../components/Layout';
  import Corporation from './Corporation';

  export default [{

    path: '/corporations/:id/',

    async action() {
      return {
        title: 'Corporation',
        component: <Layout><Corporation /></Layout>,
      };
    },

  }];
