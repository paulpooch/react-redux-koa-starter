'use strict';
// IMPORTS /////////////////////////////////////////////////////////////////////
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { exampleIncrementAction } from '../redux/actions/example';
////////////////////////////////////////////////////////////////////////////////
const selectPropsFromStore = (store) => {
  return {
    count: store.example.count,
    posts: store.example.posts,
  };
};

class HomePage extends React.Component {

  render() {
    const { count, posts } = this.props;
    return <div>
      <h1>HomePage</h1>
      <p>Count is { count }.</p>
      <p>{ posts.length } posts found.</p>
      <button onClick={ this.handleIncrementClick.bind(this) }>Increment Counter By Five</button>
    </div>
  }

  handleIncrementClick(e) {
    const byHowMany = 5;
    this.props.dispatch(exampleIncrementAction(byHowMany));
  }

}

// PROPS ///////////////////////////////////////////////////////////////////////
HomePage.propTypes = {};
HomePage.defaultProps = {};

// EXPORTS /////////////////////////////////////////////////////////////////////
export default connect(selectPropsFromStore)(Radium(HomePage));