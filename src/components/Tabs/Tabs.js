
  import React from 'react';

  class Layout extends React.Component {

    render() {
      return (
        <div className="tab-area">
          <style>{`

            #tab-containers-${this.props.id} {
              width: ${this.props.children.length*100}%;
            }

            ${this.props.children.map((_, i) => `

              #tab-${i+1}-tog-${this.props.id}:checked ~ .tab-containers #tab-${i+1}-conti-${this.props.id} {
                transform: translateZ(0px);
                opacity: 1;
              }

              #tab-${i+1}-tog-${this.props.id}:checked ~ .tab-containers {
                left: ${-100 * i}%;
              }

            `).join('\n\n')}

          `}</style>
          {this.props.children.map((tab, i) => <input key={`tab-${i+1}-tog-${this.props.id}`} type="radio" id={`tab-${i+1}-tog-${this.props.id}`} className="tab-tog" name={`tabs-${this.props.id}`} defaultChecked={i === 0} />)}
          <div className="tab-buttons">
            {this.props.children.map(({ props: { title } }, i) => <label key={`tab-${i+1}-for-${this.props.id}`} htmlFor={`tab-${i+1}-tog-${this.props.id}`} className="tab-button">{title}</label>)}
          </div>
          <div id={`tab-containers-${this.props.id}`} className="tab-containers">
            {this.props.children.map(({ props: { children } }, i) => <div key={`tab-${i+1}-conti-${this.props.id}`} id={`tab-${i+1}-conti-${this.props.id}`} className="tab-container">{children}</div>)}
          </div>
        </div>
      );
    }

  }

  export default Layout;
