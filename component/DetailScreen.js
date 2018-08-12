import React from 'react';
import { Button, View, Text } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const mname = navigation.getParam('name', 'NoName');
    const mage = navigation.getParam('age', 0);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
          <Text>myname: {JSON.stringify(mname)}</Text>
          <Text>myage: {JSON.stringify(mage)}</Text>
          <Button
            title="Back to Home"
           	onPress={() => this.props.navigation.navigate('Home')}
        	/>
        	<Button
            title="Go to more Login"
            onPress={() => this.props.navigation.push('Login')}
  		    />
  		    <Button
            title="Go just back"
            onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}