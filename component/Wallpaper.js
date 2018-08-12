import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';

import bgSrc from './img/invideo.jpg';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <View style = {{height:1000, width:1000, backgroundColor: 'black', opacity:0.5, position:'absolute'}}></View>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null
  },
});
