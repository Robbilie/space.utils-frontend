
  import React from 'react';
  import Type from './Type';

  export default [{

    path: '/types/:id/',

    async action() {
      return {
        title: 'Type',
        component: <Type />,
      };
    },

  }];
