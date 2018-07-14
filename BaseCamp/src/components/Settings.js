import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { StackNavigator } from 'react-native-navigation';
import { } from '../common';

class Settings extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <Text
          style={styles.TextStyle}
        >
        Settings Coming Soon!
        </Text>
      </View>
);
}
}

const styles = {
  TextStyle: {
    fontSize: 30,
    paddingBottom: 125,
    paddingTop: 125,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  }
};

export default Settings;
