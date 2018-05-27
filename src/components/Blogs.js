import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/blogActions';
import Asset from './asset';

class Blogs extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {

    return this.props.blogs.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.description}</p>
          <div className="image">
            <Asset assetId={post.fields.blogImage.sys.id} />
          </div>
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}
Blogs.propTypes = {
  blogs: PropTypes.node,
  fetchPosts: PropTypes.func
};
function mapStateToProps(state) {
  return { blogs: state.blogs.all };
}
export default connect(mapStateToProps, { fetchPosts })(Blogs);