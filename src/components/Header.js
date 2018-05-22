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
      <nav className="navbar navbar-default">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {this.renderLinks()}
      </nav>
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