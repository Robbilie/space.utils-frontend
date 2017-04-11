
  import React from 'react';
  import Layout from '../../components/Layout';
  import Alliance from './Alliance';
  import { set_loading } from '../../actions/layout';

  export default [{

    path: '/alliances/:id/',

    async action(act) {
      console.log('alli route', act);
      const { store, path } = act;
      store.dispatch(set_loading(true));
      const props = await new Promise(resolve => setTimeout(() =>resolve({
        id: 498125261,
        name: 'Test Alliance Please Ignore',
        ticker: 'TEST',
        executor_corporation: {
          id: 1234,
          name: 'Upvote',
        },
      }), 5000));
      store.dispatch(set_loading(false));
      return {
        title: 'Alliance',
        component: <Layout location={{ path }}><Alliance {...props} /></Layout>,
      };
    },

  }];
