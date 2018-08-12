import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(){
    super()

    this.state = {
      VideoID: ''
    }
  }
  render() {
    console.log('credentials_homescreen', this.props.navigation.state.params.credentials);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{color:'purple', fontSize:30, fontWeight:'bold'}}>Hello {JSON.stringify(this.props.navigation.state.params.username)}</Text>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
      		  title="Log in!"
      		  onPress={() => this.props.navigation.navigate('Login')}
            color='red'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Open the Camera!"
            onPress={() => this.props.navigation.push('Preview')}
            color='orange'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Open the Video!"
            onPress={() => this.props.navigation.push('Video', {VideoID : this.state.VideoID})}
            color='yellow'
          />
        </View>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Type the Video ID here!"
          onChangeText={(text) => this.setState({VideoID:text})}
        />
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="OpenCV Camera Prac"
            onPress={() => this.props.navigation.push('CVCam')}
            color='green'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Opentok Stream Prac"
            onPress={() => this.props.navigation.navigate('Opentok', {credentials : this.props.navigation.state.params.credentials, username : this.props.navigation.state.params.username})}
            color='blue'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Poesnet Prac"
            onPress={() => this.props.navigation.push('Posenet')}
            color='purple'
          />
        </View>
      </View>
    );
  }
}