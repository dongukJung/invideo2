import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	          animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="homeScreen"
	          component={HomeScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="signupScreen"
	          component={SignupScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}