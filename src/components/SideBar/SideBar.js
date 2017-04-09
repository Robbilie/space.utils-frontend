
  import React from 'react';
  import Link from '../Link';
  import ServerStatus from '../ServerStatus';

  class SideBar extends React.Component {

    render() {
      return (
        <div className="sidebar">
          <ServerStatus />
          <Link to="/" className="homebtn closesb">{''}</Link>
        </div>
      );
    }

  }

  export default SideBar;
