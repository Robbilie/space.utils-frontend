
  import React from 'react';
  import System from './System';

  export default [{

    path: '/systems/:id/',

    async action({ path }) {
      return {
        title: 'System',
        component: <System />,
        location: { path },
      };
    },

  }];
