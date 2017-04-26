/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
          <link rel="search" type="application/opensearchdescription+xml" href="/xml/search.xml" title="search" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" type="text/css" href="/css/bg.css" />
          <link rel="stylesheet" type="text/css" href="/css/main.css" />
          <script src="/js/particleground.js" />
          <script type="text/javascript" src="/js/ccpwgl/glMatrix-0.9.5.min.js" />
          <script type="text/javascript" src="/js/ccpwgl/ccpwgl_int.js" />
          <script type="text/javascript" src="/js/ccpwgl/ccpwgl.js" />
          <script type="text/javascript" src="/js/ccpwgl/TestCamera2.js" />
          {styles.map(style =>
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )}
        </head>
        <body>
          <svg width="0" height="0" viewBox="0 0 1 1">
            <defs>
              <clipPath id="pone" clipPathUnits="objectBoundingBox">
                <polygon points="0 0, 1 0, 0.75 1, 0 1" />
              </clipPath>
              <clipPath id="ptwo" clipPathUnits="objectBoundingBox">
                <polygon points="0.2 0, 1 0, 0.8 1, 0 1" />
              </clipPath>
              <clipPath id="pthree" clipPathUnits="objectBoundingBox">
                <polygon points="0.25 0, 1 0, 1 1, 0 1" />
              </clipPath>
              <clipPath id="pfull" clipPathUnits="objectBoundingBox">
                <polygon points="0 0, 1 0, 1 1, 0 1" />
              </clipPath>
            </defs>
          </svg>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId &&
            <script
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${config.analytics.googleTrackingId}','auto');ga('send','pageview')` }}
            />
          }
          {config.analytics.googleTrackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
        </body>
      </html>
    );
  }
}

export default Html;
