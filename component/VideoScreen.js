import React from 'react';
import { AppRegistry, Button, View, Text, WebView } from 'react-native';
import YouTube from 'react-native-youtube'

export default class VideoScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isplay:true
    }
  }
  render() {

    const { navigation } = this.props;
    const vid = navigation.getParam('VideoID', 'xbUEALSCGNA'); // default video :: weatherman - MKRAIN
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'purple', fontSize:30, fontWeight:'bold', marginBottom:40}}>Video Screen</Text>
        <View style={{ flex: 0.6, flexDirection:'row', alignItems: 'center', justifyContent: 'center', backgroundColor:'purple'}}>
          <YouTube
            apiKey="AIzaSyCKxJvHsYt-DMrLcbjYhASSMRLySmadmug"
            videoId={vid}  // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={false}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{width:'100%', height:'100%'}}
          />
          <View style = {{width:'100%', height:'100%', backgroundColor:'white', opacity:0.5, position: 'absolute'}}>
          </View>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>

  		    <Button
            title="Play"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}