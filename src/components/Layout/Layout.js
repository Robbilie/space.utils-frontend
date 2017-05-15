
  import React, { cloneElement } from 'react';
  import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
      //console.log('app', this);
      this.load_cbs = [];
      this.isLoading = false;
    }

    componentWillMount() {
      console.log('a will mount');
    }

    componentDidMount() {
      console.log('app did mount');
      if (typeof (window) !== 'undefined') {
        this.renderCanvas();
        window.addEventListener('resize', debounce(this.resizeHandler.bind(this), 500));
      }
    }

    renderCanvas () {
      console.log("render canvas");
      let d = document.createElement("div");
      d.style.position = "fixed";
      d.style.width = "202%";
      d.style.height = "202%";
      d.style.visibility = "hidden";
      d.style.zIndex = "-1000";
      document.body.appendChild(d);

      const pg = window.particleground(d, {
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
      pg.pause();
      document.getElementById("bgimg").style.background = `url(${d.children[0].toDataURL()}) 50% 50%`;
      pg.destroy();
      document.body.removeChild(d);
    }

    resizeHandler() {
      this.renderCanvas();
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
          <input id="isOpen" type="checkbox" style={{ display: "none" }} />
          <div id="particles-background" className="vertical-centered-box" />
          <div id="particles-foreground" className="vertical-centered-box">
            <div id="bgimg" />
          </div>
          <label id="sidebarButton" htmlFor="isOpen">
            <span />
            <span />
            <span />
            <span />
          </label>
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
