
  import React from 'react';
  import Layout from '../../components/Layout';
  import Page from '../../components/Page';

  export default [{

    path: '/about/',

    async action({ path }) {
      const data = await require.ensure([], require => require('./about.md'), 'about');

      return {
        title: data.title,
        chunk: 'about',
        component: <Layout location={{ path }}><Page {...data} /></Layout>,
      };
    },

  }];
