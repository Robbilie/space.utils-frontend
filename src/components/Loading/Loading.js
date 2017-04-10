
import React from 'react';

class Loading extends React.Component {

  render() {
    return (
      <div className="loader">
        <div className="loader-circle" />
        <div className="loader-line-mask">
          <div className="loader-line" />
        </div>
      </div>
    );
  }

}

export default Loading;

