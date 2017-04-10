
  import React from 'react';
  import Layout from '../../components/Layout';
  import NotFound from './NotFound';

  const title = 'Page Not Found';

  export default [{

    path: '*',

    action({ path }) {
      return {
        title,
        component: <Layout location={{ path }}><NotFound title={title} /></Layout>,
        status: 404,
      };
    },

  }];
