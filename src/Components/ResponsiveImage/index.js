import React from 'react';
import {
  View,
  Image,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class ResponsiveImage extends React.Component {
  state={
    imageLoaded:false,
    thumbnailOpacity: new Animated.Value(1)
  }

  imageLoaded = () => {
    Animated.timing(
      this.state.thumbnailOpacity,
      {
        toValue:0,
        duration:500
      }
    ).start(() => this.setState({imageLoaded:true}))
  }

  render() {
    const {thumbnailURL, previewURL} = this.props;
    return (
      <View 
        style={styles.imageContainer}
      >
        {
          this.state.imageLoaded
          ? null 
          :
          <Animated.Image
            style={[styles.blurImage, {position:'absolute', opacity:this.state.thumbnailOpacity}]}
            source={{uri: thumbnailURL}}
            blurRadius={15}
          />
        }
        <View style={styles.imageHolder}>
            <Image 
            onLoad={this.imageLoaded}
            style={styles.image}
            source={{uri: previewURL}}
            resizeMode={'cover'}
            />
        </View>
      </View>
    );
  }
}

ResponsiveImage.propTypes = {
  thumbnailURL: PropTypes.string,
  previewURL: PropTypes.string
}

ResponsiveImage.defaultProps = {
  thumbnailURL: 'https://groww.in/resources/logo-groww270.png',
  previewURL: 'https://groww.in/resources/logo-groww270.png'
}