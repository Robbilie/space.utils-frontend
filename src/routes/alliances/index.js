
  import React from 'react';
  import Layout from '../../components/Layout';
  import Alliance from './Alliance';

  export default [{

    path: '/alliances/:id/',

    async action(act) {
      console.log('alli route', act);
      const { path } = act;
      const props = await Promise.resolve({
        id: 498125261,
        name: 'Test Alliance Please Ignore',
        ticker: 'TEST',
        executor_corporation: {
          id: 1234,
          name: 'Upvote',
        },
      });
      return {
        title: 'Alliance',
        component: <Layout location={{ path }}><Alliance {...props} /></Layout>,
      };
    },

  }];
