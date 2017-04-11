
  import React from 'react';
  import Link from '../../components/Link';

  class Corporation extends React.Component {

    render() {
      return (
        <div className="page corporation-page two-col-page">
          <div className="left-col">
            <img src={`https://imageserver.eveonline.com/Corporation/${this.props.data.id}_256.png`} />
            <h2 className="mobile">
              <span>Corporation</span>
              <br	/>
              <b>{this.props.data.name}</b>
            </h2>
            <div className="info-list">
              <div>
                <div />
                <div>
                  <span>Ticker</span>
                  <br	/>
                  <b>{this.props.data.ticker}</b>
                </div>
              </div>
              <div>
                <div>
                  <img src={`https://imageserver.eveonline.com/Character/${this.props.data.ceo.id}_32.jpg`} />
                </div>
                <div>
                  <span>CEO</span>
                  <br	/>
                  <b>
                    <Link to={`/characters/${this.props.data.ceo.id}/`}>{this.props.data.ceo.name}</Link>
                  </b>
                </div>
              </div>
              {this.props.data.alliance ?
                <div>
                  <div>
                    <img src={`https://imageserver.eveonline.com/Alliance/${this.props.data.alliance.id}_32.png`} />
                  </div>
                  <div>
                    <span>Alliance</span>
                    <br	/>
                    <b>
                      <Link to={`/alliances/${this.props.data.alliance.id}/`}>{this.props.data.alliance.name}</Link>
                    </b>
                  </div>
                </div> :
                null
              }
            </div>
          </div>
          <div className="right-col">
            <h2 className="desktop">
              <span>Corporation</span>
              <br	/>
              <b>{this.props.data.name}</b>
            </h2>
          </div>
        </div>
      );
    }
  }

  export default Corporation;
