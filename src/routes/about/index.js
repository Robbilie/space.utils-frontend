
  import React from 'react';
  import Page from '../../components/Page';

  export default [{

    path: '/about/',

    async action() {
      const data = await require.ensure([], require => require('./about.md'), 'about');

      return {
        title: data.title,
        chunk: 'about',
        component: <Page {...data} />,
      };
    },

  }];
