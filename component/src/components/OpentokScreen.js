import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class OpentokScreen extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '46162982';
    this.sessionId = '1_MX40NjE2Mjk4Mn5-MTUzMzY3MjQwNzAyOH4vZlFtS01XVzM1RGk1Mis4ajYwd2dITGN-UH4';
    this.token = 'T1==cGFydG5lcl9pZD00NjE2Mjk4MiZzaWc9NzEzMDM2ODRmM2EyZWNiNmMyZDA2YWU0OGI1NDQyODQxODc2NTI1YjpzZXNzaW9uX2lkPTFfTVg0ME5qRTJNams0TW41LU1UVXpNelkzTWpRd056QXlPSDR2WmxGdFMwMVhWek0xUkdrMU1pczRhall3ZDJkSVRHTi1VSDQmY3JlYXRlX3RpbWU9MTUzMzY3NDg3NyZub25jZT0wLjY4Nzk5MzQxNzcxMjE0NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTMzNzYxMjc3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: '100%', height: '100%'}} />
        </OTSession>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTSubscriber style={{ width: '100%', height: '100%' }} />
        </OTSession>
       <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
          color='gray'
        />
      </View>
    );
  }
}