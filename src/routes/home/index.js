
  import React from 'react';
  import Home from './Home';

  export default [{

    path: '/',

    async action({ path }) {
      return {
        title: 'Home',
        component: <Home />,
        jsonld: {
          '@type': 'WebSite',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://utils.space/search/{search_term_string}/',
            'query-input': 'required name=search_term_string',
          },
        },
        location: { path },
      };
    },

  }];
