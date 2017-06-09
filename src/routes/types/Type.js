
  import React from 'react';
  import Link from '../../components/Link';
  import Tabs from '../../components/Tabs';

  class Type extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        id: 0,
        name: '',
        description: '',
      };
    }

    render() {
      return (
        <div className="page alliance-page two-col-page">
          <div className="left-col">
            <img style={{ width: '256px' }} src={`https://imageserver.eveonline.com/Type/${this.state.id}_64.png`} />
            <h2 className="mobile">
              <span>Type</span>
              <br />
              <b>{this.state.name}</b>
            </h2>
            <div className="info-list">

            </div>
          </div>
          <div className="right-col">
            <h2 className="desktop">
              <span>Type</span>
              <br />
              <b>{this.state.name}</b>
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
