
  import React from 'react';
  import Link from '../../components/Link';

  class Home extends React.Component {

    render() {
      return (
        <div className="welcome page">
          <div className="welcome-vp">
            <img src="/img/1x2.png" />
            <img src="/img/1x2.png" className="mobo" />
            <img src="/img/1x2.png" className="mobo" />
            <div className="welcome-conti">
              <Link id="search" to="/search/#search" style={{ clipPath: 'url(#pone)' }}>
                <h2>SEARCH</h2>
                <img src="/img/1x2.png" />
              </Link>
              <Link id="killboard" to="/killmails/#killboard" style={{ clipPath: 'url(#ptwo)' }}>
                <h2>KILLBOARD</h2>
                <img src="/img/1x2.png" />
              </Link>
              <a id="service" href="https://service.eneticum.de/" target="_blank" style={{ clipPath: 'url(#pthree)' }}>
                <h2>SERVICE</h2>
                <img src="/img/1x2.png" />
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Home;
