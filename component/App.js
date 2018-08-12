import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import SelfPreviewScreen from './SelfPreview'
import VideoScreen from './VideoScreen'
import SignupScreen from './SignupScreen'
import CameraScreen from './CameraScreen'
import OpentokScreen from './OpentokScreen'
import PosenetScreen from './PosenetScreen'
//import './stylesheet';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Preview: SelfPreviewScreen,
    Video: VideoScreen,
    Signup: SignupScreen,
    CVCam: CameraScreen,
    Opentok: OpentokScreen,
    Posenet: PosenetScreen
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {header: null}
  }

);

export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}