import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';


export default class SignupSection extends Component {
  render() {
    return (
      <View style = {styles.container}>
            <Text style={{color:"#CCCC00"}}>Dont have your account yet? Just</Text>
            <TouchableHighlight
              onPress={() => Actions.signupScreen()}
              style={{alignSelf:'center',justifyContent: 'center', margin:5}}>
              <Text style={{color:'orange', fontWeight:'bold'}}> Sign up </Text>
            </TouchableHighlight>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
