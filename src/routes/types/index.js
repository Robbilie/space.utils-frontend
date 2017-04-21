
  import React from 'react';
  import Type from './Type';

  export default [{

    path: '/types/:id/',

    async action({ path }) {
      return {
        title: 'Type',
        component: <Type />,
        location: { path },
      };
    },

  }];
