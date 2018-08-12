import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wallpaper from './Wallpaper';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';
import spinner from '../images/loading.gif';

const SIZE = 40;

export default class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.loginScreen();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <Wallpaper>
        <View style={styles.topcontainer}>
          <TouchableOpacity
              style={styles.widebutton}
              onPress={this._onPress}
              activeOpacity={1}>
              {this.state.isLoading ? (
                <Image source={spinner} style={styles.image} />
              ) : (
                <Text style={styles.text}>Camera On!</Text>
              )}
          </TouchableOpacity>
        </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity
            onPress={this._onPress}
            style={styles.button}
            activeOpacity={1}>
            <Image style={styles.image} source={arrowImg} />
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </View>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomcontainer: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
  widebutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: 60,
    width: 200,
    borderRadius: 30,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
