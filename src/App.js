import React, { Component } from "react";
import Counter from "./components/Counter";
import PropTypes from "prop-types";
import Header from './components/Header';

class App extends Component {

  triggerNav(event){ 
		event.stopPropagation();
		let container = document.querySelector('.st-container');
		container.classList.contains('st-menu-open') ? 
		container.classList.remove('st-menu-open', 'st-effect-3') : 
		container.classList.add('st-menu-open', 'st-effect-3');
	}
	
	closeNav(){ 
		let container = document.querySelector('.st-container');
		container.classList.contains('st-menu-open') ? container.classList.remove('st-menu-open', 'st-effect-3') : '';
  }

  render() {
    return (
      <div id="st-container" className="st-container">
        
        <div className="st-pusher">
					<Header />
          <div className="st-content" onClick={this.closeNav}>
            <div id="st-trigger-effects" className="column">
              <button className="push-button" data-effect="st-effect-3">Push</button>
              <button onClick={this.triggerNav} data-effect="st-effect-11">Scale &amp; rotate pusher</button>
            </div>
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