import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import FormSignup from './FormSignup';
import Wallpaper from './Wallpaper';
import ButtonSubmitSignup from './ButtonSubmitSignup';
import SignupSection from './SignupSection';

import {View, Text, StyleSheet} from 'react-native';

export default class SignupScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <View style={{flex:0.5, flexDirection:'row', alignItems:'flex-end', justifyContent:'center'}}>
          <Text style={styles.text}> Join Us! </Text>
        </View>
        <View style={{flex:0.5, flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
          <Text style={styles.smalltext}> To adjust your posture better! </Text>
        </View>
        <FormSignup />
        <ButtonSubmitSignup />
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex:1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    backgroundColor: 'transparent',
    textAlign:'center'
  },
  smalltext: {
    flex:1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
    textAlign:'center'
  }
});