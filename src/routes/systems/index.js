
  import React from 'react';
  import System from './System';

  export default [{

    path: '/systems/:id/',

    async action() {
      return {
        title: 'System',
        component: <System />,
      };
    },

  }];
