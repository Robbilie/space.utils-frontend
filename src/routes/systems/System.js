
  import React from 'react';
  import Link from '../../components/Link';

  class System extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        id: 0,
        name: '',
        ticker: '',
        executor_corporation: {
          id: 0,
          name: '',
        },
      };
    }

    render() {
      return (
        <div className="page alliance-page two-col-page">
          <div className="left-col">
            <img style={{ width: '256px' }} src={`https://imageserver.eveonline.com/Alliance/${this.state.id}_128.png`} />
            <h2 className="mobile">
              <span>Alliance</span>
              <br />
              <b>{this.state.name}</b>
            </h2>
            <div className="info-list">
              <div>
                <div />
                <div>
                  <span>Ticker</span>
                  <br />
                  <b>{this.state.ticker}</b>
                </div>
              </div>
              <div>
                <div>
                  <img src={`https://imageserver.eveonline.com/Corporation/${this.state.executor_corporation.id}_32.png`} />
                </div>
                <div>
                  <span>Executor</span>
                  <br />
                  <b>
                    <Link to={`/corporations/${this.state.executor_corporation.id}/`}>{this.state.executor_corporation.name}</Link>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <h2 className="desktop">
              <span>Alliance</span>
              <br />
              <b>{this.state.name}</b>
            </h2>
          </div>
        </div>
      );
    }
  }

  export default System;
