import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchMusic } from '../actions/musicActions';
import Asset from './asset';

class Music extends Component {
    UNSAFE_componentWillMount() {
      this.props.fetchMusic();
    }
    renderMusic() {
      
      return this.props.music.map((mus, index) => {
        return (
          <article key={mus.sys.id}>
            <h1>{mus.fields.headline}</h1>
            <p>{mus.fields.text}</p>
            {/* <div className="image">
            <Asset assetId={post.fields.blogImage.sys.id} />
          </div> */}
          </article>
        );
      });
    }
    render() {
      return (
        <div>
          <h2>Musik HARDCODET</h2>
          {this.renderMusic()}
        </div>
      );
    }
  }
  Music.propTypes = {
    music: PropTypes.node,
    fetchMusic: PropTypes.func
  };
  function mapStateToProps(state) {
    return { music: state.music.all };
  }
  export default connect(mapStateToProps, { fetchMusic })(Music);