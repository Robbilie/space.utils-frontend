
  import React, { PropTypes } from 'react';

  class NotFound extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
    };

    render() {
      return (
        <div className="page">
          <h1>404 - not found</h1>
        </div>
      );
    }
  }

  export default NotFound;
