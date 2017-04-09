
import React from 'react';

import ESIClient from '../../utils/ESIClient';

class ServerStatus extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      status: true,
      online: 0
    };
  }

  componentDidMount () {
    this.updateUserCounter();
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  async updateUserCounter () {
    let client = await ESIClient;
    try {
      let { obj } = await client.Status.get_status();
      this.setState({
        status: !obj.vip,
        online: obj.players
      });
      this.timeout = setTimeout(() => this.updateUserCounter(), 1000 * 60 * 5);
    } catch (e) {
      this.setState({
        status: false,
        online: 0
      });
      this.timeout = setTimeout(() => this.updateUserCounter(), 1000 * 60 * 2);
    }
  }

  render () {
    return (
      <div className={`usercount ${this.state.status ? "online" : "offline"}`}>
        <span>TQ</span>
        {" "}
        {this.state.online.toLocaleString()}
      </div>
    );
  }

}

export default ServerStatus;
