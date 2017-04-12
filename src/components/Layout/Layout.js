
  import React, { cloneElement } from 'react';
  import CSSTransitionGroup from 'react-addons-css-transition-group';

  import withStyles from 'isomorphic-style-loader/lib/withStyles';
  import s from './Layout.css';

  import connector from '../../utils/connector';
  import debounce from '../../utils/debounce';

  import SideBar from '../SideBar';
  import SearchBar from '../SearchBar';
  import Clock from '../Clock';
  import Loading from '../Loading';

  class Layout extends React.Component {

    constructor(props) {
      super(props);
      console.log('new app');
      console.log('app', this);
      this.load_cbs = [];
      this.isLoading = false;
    }

    componentWillMount() {
      console.log('a will mount');
    }

    componentDidMount() {
      console.log('app did mount');
      if (typeof (window) !== 'undefined') {
        this.background = window.particleground(document.getElementById('particles-background'), {
          dotColor: 'rgba(255, 255, 255, 0.5)',
          lineColor: 'rgba(255, 255, 255, 0.05)',
          minSpeedX: 0.075,
          maxSpeedX: 0.15,
          minSpeedY: 0.075,
          maxSpeedY: 0.15,
          density: 30000, // One particle every n pixels
          curvedLines: false,
          proximity: 20, // How close two dots need to be before they join
          parallaxMultiplier: 20, // Lower the number is more extreme parallax
          particleRadius: 2, // Dot size
          parallax: false,
        });
        this.background.pause();
        this.foreground = window.particleground(document.getElementById('particles-foreground'), {
          dotColor: 'rgba(255, 255, 255, 1)',
          lineColor: 'rgba(255, 255, 255, 0.05)',
          minSpeedX: 0.3,
          maxSpeedX: 0.6,
          minSpeedY: 0.3,
          maxSpeedY: 0.6,
          density: 50000, // One particle every n pixels
          curvedLines: false,
          proximity: 250, // How close two dots need to be before they join
          parallaxMultiplier: 10, // Lower the number is more extreme parallax
          particleRadius: 4, // Dot size
          parallax: false,
        });
        this.foreground.pause();
        window.addEventListener('resize', debounce(this.resizeHandler.bind(this), 250));
      }
    }

    resizeHandler() {
      if (this.background) {
        this.background.start();
        this.background.pause();
      }
      if (this.foreground) {
        this.foreground.start();
        this.foreground.pause();
      }
    }

    setLoading(isLoading) {
      console.log('set loading', isLoading);
      if (!isLoading) {
        this.load_cbs.forEach(cb => cb());
        this.load_cbs = [];
      }
      this.isLoading = isLoading;
      this.setState({ isLoading });
    }

    awaitLoading(load_cb) {
      console.log('await loading', this.props.layout.isLoading);
      if (this.props.layout.isLoading) { this.load_cbs.push(load_cb); } else { load_cb(); }
    }

    render() {
      return (
        <div className={`ui ${this.props.layout.isSearching ? 'searching' : 'not-searching'} ${this.props.layout.isLoading ? 'loading' : 'not-loading'} ${this.props.layout.isOpen ? 'open' : 'close'}`}>
          <div id="particles-background" className="vertical-centered-box" />
          <div id="particles-foreground" className="vertical-centered-box" />
          <div id="sidebarButton" onClick={() => this.props.toggle_sidebar()}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <SideBar />
          <div className="content">
            <CSSTransitionGroup
              component="div"
              className="pages"
              transitionName="example"
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {cloneElement(this.props.children, {
                key: this.props.location.path,
              })}
            </CSSTransitionGroup>
          </div>
          <div className="topbar">
            <SearchBar limit={20} categories={['alliance', 'character', 'corporation', 'inventorytype', 'solarsystem', 'faction']} />
            <Clock />
          </div>
          { this.props.layout.isLoading ? <Loading /> : null }
        </div>
      );
    }
  }

  export default connector(/*withStyles(s)*/(Layout));
