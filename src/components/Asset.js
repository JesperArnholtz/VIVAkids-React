import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchAsset } from '../actions/blogActions';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  renderAsset() {
    return this.props.assets.map((asset) => {
      if (asset.sys.id == this.props.assetId) {
        return (
          <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={`${asset.sys.id}`} width="400"/>
        );
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderAsset()}
      </div>
    );
  }
}
Asset.propTypes = {
    assets: PropTypes.node,
    assetId:PropTypes.string,
    fetchAsset: PropTypes.func
  };
function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(Asset)