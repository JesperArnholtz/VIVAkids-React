import React, { Component } from "react";
import Counter from "./components/Counter";
import PropTypes from "prop-types";
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Counter.propTypes = {
  children: PropTypes.array
};

export default App;