import React, { Component } from "react";
import Counter from "./components/Counter";
import PropTypes from "prop-types";
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div id="st-container" className="st-container">
        <Header />
        <div className="st-pusher">
          <div className="st-content">
            <div className="st-content-inner">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;