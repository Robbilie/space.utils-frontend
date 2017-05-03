
import React from 'react';

import ESIClient from '../../utils/ESIClient';

class ServerStatus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true,
      online: 0,
    };
  }

  componentDidMount() {
    this.updateUserCounter();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  async updateUserCounter() {
    const client = await ESIClient;
    try {
      const { body: status } = await client.apis.Status.get_status();
      this.setState({
        status: !status.vip,
        online: status.players,
      });
      this.timeout = setTimeout(() => this.updateUserCounter(), 1000 * 60 * 5);
    } catch (e) {
      this.setState({
        status: false,
        online: 0,
      });
      this.timeout = setTimeout(() => this.updateUserCounter(), 1000 * 60 * 2);
    }
  }

  render() {
    return (
      <div className={`usercount ${this.state.status ? 'online' : 'offline'}`}>
        <span>TQ</span>
        {' '}
        {this.state.online.toLocaleString()}
      </div>
    );
  }

}

export default ServerStatus;
