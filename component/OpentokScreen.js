import React, { Component } from 'react';
import { View, Button, Text, TouchableHighlight } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class OpentokScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publishAudio: false,
      cameraPosition: 'front'
    };

    this.publisherEventHandlers = {
      streamCreated: event => {
        console.log('Publisher stream created!', event);
      },
      streamDestroyed: event => {
        console.log('Publisher stream destroyed!', event);
      }
    };
  }

  changeCameraType() {
    if (this.state.cameraPosition === 'back') {
      this.setState({
        cameraPosition: 'front'
      });
    } else {
      this.setState({
        cameraPosition: 'back'
      });
    }
  }


  render() {
    console.log('credentials_opentokscreen', this.props.navigation.state.params.credentials);
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <OTSession
          apiKey={this.props.navigation.state.params.credentials.apiKey}
          sessionId={this.props.navigation.state.params.credentials.sessionId}
          token={this.props.navigation.state.params.credentials.token}>
          <OTPublisher
            properties = {this.state}
            eventHandlers = {this.publisherEventHandlers}
            style={{ width: '100%', height: '100%'}}
          />
        </OTSession>
        <TouchableHighlight
          title = "Turn"
          onPress = {this.changeCameraType.bind(this)}>
          <View style = {{height:50,width:50,backgroundColor:"skyblue"}}></View>
        </TouchableHighlight>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Home', {credentials : this.props.navigation.state.params.credentials, username : this.props.navigation.state.params.username})}
          color='gray'
        />
      </View>
    );
  }
}