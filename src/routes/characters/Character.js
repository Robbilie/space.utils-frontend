
  import React from 'react';
  import Link from '../../components/Link';

  class Character extends React.Component {

    render() {
      return (
        <div className="page character-page two-col-page">
          <div className="left-col">
            <img src={`https://imageserver.eveonline.com/Character/${this.props.data.id}_256.jpg`} />
            <h2 className="mobile">
              <span>Character</span>
              <br	/>
              <b>{this.props.data.name}</b>
            </h2>
            <div className="info-list">
              <div>
                <div>
                  <img src={`https://imageserver.eveonline.com/Corporation/${this.props.data.corporation.id}_32.png`} />
                </div>
                <div>
                  <span>Corporation</span>
                  <br />
                  <b>
                    <Link to={`/corporations/${this.props.data.corporation.id}/`}>{this.props.data.corporation.name}</Link>
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
              <span>Character</span>
              <br	/>
              <b>{this.props.data.name}</b>
            </h2>
          </div>
        </div>
      );
    }
  }

  export default Character;
