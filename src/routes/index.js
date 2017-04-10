
  /* eslint-disable global-require */

  // The top-level (parent) route
  export default {

    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [].concat(
      require('./home').default,
      require('./search').default,
      require('./killmails').default,
      require('./characters').default,
      require('./corporations').default,
      require('./alliances').default,
      require('./types').default,
      require('./systems').default,
      require('./about').default,

      // Wildcard routes, e.g. { path: '*', ... } (must go last)
      require('./notFound').default,
    ),

    async action({ next }) {
      // Execute each child route until one of them return the result
      const route = await next();

      // Provide default values for title, description etc.
      route.title = `Space Utils - ${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    },

  };
