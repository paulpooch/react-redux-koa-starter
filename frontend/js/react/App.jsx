'use strict';
// IMPORTS /////////////////////////////////////////////////////////////////////
import Radium from 'radium';
import React from 'react';
////////////////////////////////////////////////////////////////////////////////
class App extends React.Component {

  render() {
    return <div>
      { /* RouteHandler */ }
      { this.props.children }
    </div>
  }

}

// PROPS ///////////////////////////////////////////////////////////////////////
App.propTypes = {};
App.defaultProps = {};

// EXPORTS /////////////////////////////////////////////////////////////////////
export default Radium(App);