
  import React from 'react';
  import Link from '../../components/Link';
  import Tabs from '../../components/Tabs';

  class Alliance extends React.Component {

    render() {
      return (
        <div className="page alliance-page two-col-page">
          <div className="left-col">
            <img style={{ width: '256px' }} src={`https://imageserver.eveonline.com/Alliance/${this.props.data.id}_128.png`} />
            <h2 className="mobile">
              <span>Alliance</span>
              <br />
              <b>{this.props.data.name}</b>
            </h2>
            <div className="info-list">
              <div>
                <div />
                <div>
                  <span>Ticker</span>
                  <br />
                  <b>{this.props.data.ticker}</b>
                </div>
              </div>
              <div>
                <div>
                  <img src={`https://imageserver.eveonline.com/Corporation/${this.props.data.executor_corporation.id}_32.png`} />
                </div>
                <div>
                  <span>Executor</span>
                  <br />
                  <b>
                    <Link to={`/corporations/${this.props.data.executor_corporation.id}/`}>{this.props.data.executor_corporation.name}</Link>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <h2 className="desktop">
              <span>Alliance</span>
              <br />
              <b>{this.props.data.name}</b>
            </h2>
            <Tabs id={this.props.data.id}>
              <div title="One"><div className="tab-box"></div></div>
              <div title="Two"><div className="tab-box"></div></div>
              <div title="Three"><div className="tab-box"></div></div>
            </Tabs>
          </div>
        </div>
      );
    }
  }

  export default Alliance;
