
import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: this.dateToStr(new Date()),
    };
  }

  componentDidMount() {
    const d = new Date();
    this.setState({ time: this.dateToStr(d) });
    this.timeout = setTimeout(() =>
      this.updateTime() || (this.interval = setInterval(() => this.updateTime(), 1000 * 60)),
      (60 - d.getSeconds()) * 1000,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({ time: this.dateToStr(new Date()) });
  }

  dateToStr(d) {
    return `${(d.getUTCHours() < 10 ? '0' : '') + d.getUTCHours()}:${d.getUTCMinutes() < 10 ? '0' : ''}${d.getUTCMinutes()}`;
  }

  render() {
    return (
      <div id="clock">
        {this.state.time}
      </div>
    );
  }

}

export default Clock;
