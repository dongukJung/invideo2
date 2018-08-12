import React, { Component } from 'react';
import { Alert,
        AppRegistry,
        Button,
        StyleSheet,
        View,
        Text,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class SelfPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'front',
      mirrorMode: false
    };
  }

  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirrorMode: true
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirrorMode: false
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={this.state.cameraType}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}>
              <TouchableHighlight
              title = "Turn"
                onPress={this.changeCameraType.bind(this)}>
                <View style = {{height:50,width:50,backgroundColor:"skyblue"}}></View>
              </TouchableHighlight>
          </RNCamera>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Turn Off"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})