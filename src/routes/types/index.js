
  import React from 'react';
  import Layout from '../../components/Layout';
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
