
  import React from 'react';
  import Link from '../../components/Link';
  import Tabs from '../../components/Tabs';

  class Type extends React.Component {

    render() {
      return (
        <div className="page type-page two-col-page">
          <div className="left-col">
            <img style={{ width: '256px' }} src={`https://imageserver.eveonline.com/Type/${this.props.data.id}_64.png`} />
            <h2 className="mobile">
              <span>Type</span>
              <br />
              <b>{this.props.data.name}</b>
            </h2>
            <div className="info-list">

            </div>
          </div>
          <div className="right-col">
            <h2 className="desktop">
              <span>Type</span>
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

  export default Type;
