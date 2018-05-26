import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link, IndexLink } from 'react-router';
import { fetchMainLinks } from '../actions/navigationActions';
import { connect } from "react-redux";


class Header extends Component {
  componentWillMount() {
    this.props.fetchMainLinks();
  }
  renderLinks() {
    // console.table(this.props)
    return this.props.links.map((link, index) => {
      return (
        <span key={link.sys.id}>
          {" | "}
          <Link to={link.fields.link} activeClassName="active">{link.fields.link}</Link>
        </span>
      );
    });
  }
  render() {
    return (
      <div>
        <button className="push-button" data-effect="st-effect-3">Push</button>
        <button data-effect="st-effect-11">Scale &amp; rotate pusher</button>
        <nav className="st-menu st-effect-11" id="menu-11">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {this.renderLinks()}
        </nav>
      </div>

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