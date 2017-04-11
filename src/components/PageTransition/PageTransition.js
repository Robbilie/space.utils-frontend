
  import React, { createElement } from 'react';
  import ReactDOM from 'react-dom';
  import CSSTransitionGroup from 'react-addons-css-transition-group';
  import TransitionGroup from 'react-addons-transition-group';

  export class DummyTransitionComponent extends React.Component {

    render() {
      return (<div className="pages">{this.props.children}</div>);
    }

  }

  export class PageTransition extends CSSTransitionGroup {

    constructor(props) {
      super(props);
      const awaitLoading = this.props.awaitLoading;

      class PageTransitionChild extends this._wrapChild(null).type.prototype.constructor {

        constructor(...args) {
          super(...args);

          const _componentWillAppear = this.componentWillAppear;
          this.componentWillAppear = function (...args) {
            ReactDOM.findDOMNode(this).classList.add(`${this.props.name}-enter`);
            awaitLoading(() => {
              ReactDOM.findDOMNode(this).classList.remove(`${this.props.name}-enter`);
              _componentWillAppear(...(console.log('will appear') || args));
            });
          };

          const _componentWillEnter = this.componentWillEnter;
          this.componentWillEnter = function (...args) {
            ReactDOM.findDOMNode(this).classList.add(`${this.props.name}-enter`);
            awaitLoading(() => _componentWillEnter(...(console.log('will enter') || args)));
          };

          const _componentWillLeave = this.componentWillLeave;
          this.componentWillLeave = function (...args) {
            ReactDOM.findDOMNode(this).classList.add(`${this.props.name}-leave`);
            awaitLoading(() => _componentWillLeave(...(console.log('will leave') || args)));
          };
        }

      }

      this.childClass = PageTransitionChild;
    }

    _customWrapChild(child) {
      // We need to provide this childFactory so that
      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
      // leave while it is leaving.
      return createElement(
        this.childClass,
        {
          name: this.props.transitionName,
          appear: this.props.transitionAppear,
          enter: this.props.transitionEnter,
          leave: this.props.transitionLeave,
          appearTimeout: this.props.transitionAppearTimeout,
          enterTimeout: this.props.transitionEnterTimeout,
          leaveTimeout: this.props.transitionLeaveTimeout,
        },
        child,
      );
    }

    render() {
      return createElement(
        TransitionGroup,
        Object.assign({}, this.props, { childFactory: this._customWrapChild.bind(this) }),
      );
    }

  }
