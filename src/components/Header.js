import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link, IndexLink } from 'react-router';
import { fetchMainLinks } from '../actions/navigationActions';
import { connect } from "react-redux";


class Header extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchMainLinks();
  }
  renderLinks() {
    return this.props.links.map((link, index) => {
      return (
        <Link key={link.sys.id} to={link.fields.link} onClick={this.closeNav} activeClassName="active">{link.fields.link}</Link>
      );
    });
  }

  closeNav(){ 
		let container = document.querySelector('.st-container');
		container.classList.contains('st-menu-open') ? container.classList.remove('st-menu-open', 'st-effect-3') : '';
  }

  render() {
    return (
      < nav className="st-menu st-effect-3" id="menu-3" >
        <IndexLink to="/" onClick={this.closeNav} activeClassName="active">Home</IndexLink>
        {this.renderLinks()}
      </nav >
    );
  }
};

Header.propTypes = {
  links: PropTypes.node,
  fetchMainLinks: PropTypes.func
};

function mapStateToProps(state) {
  return { links: state.links.all };
}
export default connect(mapStateToProps, { fetchMainLinks })(Header);