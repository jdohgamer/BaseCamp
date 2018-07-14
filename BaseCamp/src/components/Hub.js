import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { } from '../common';


//const bg = require('./assets/bgW.png');
const gamingbg = require('../assets/Gaming.png');
const entbg = require('../assets/ent.png');
const advbg = require('../assets/StW.png');
const logobg = require('../assets/logo.jpg');
const pcbg = require('../assets/PC.jpg');
const diningbg = require('../assets/Dining.png');

const showAccountAlert = () => {
  Alert.alert(
'Player Account',
'Current Points: 777',
[
  { text: 'More Info', onPress: () => console.log('Ask me later pressed') },
  { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel ' },
  { text: 'Ok', onPress: () => console.log('OK Pressed') },
],
{ cancelable: false }
);
};

// const showAlert = () => {
//   Alert.alert(
// 'Take a Cruise',
// 'Vroom Vroom',
// [
//   { text: 'More Info', onPress: () => console.log('Ask me later pressed') },
//   { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel ' },
//   { text: 'OK', onPress: () => console.log('OK Pressed') },
// ],
// { cancelable: false }
// );
// };

class Hub extends Component {


  onButtonPress() {
    this.props.navigation.navigate('ResetPin');
  }

  onDiningButtonPressed() {
    this.props.navigation.navigate('Dining');
  }

  onEntButtonPressed() {
    this.props.navigation.navigate('Entertainment');
  }

  onGamingButtonPressed() {
    this.props.navigation.navigate('Gaming');
  }

  onSpinToWinButtonPressed() {
    this.props.navigation.navigate('SpinToWin');
  }

  render() {
    return (
      <View
        style={styles.viewStyle}
      >

        <TouchableOpacity
          onPress={this.onGamingButtonPressed.bind(this)}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={gamingbg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onDiningButtonPressed.bind(this)}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={diningbg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onEntButtonPressed.bind(this)}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={entbg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onButtonPress.bind(this)}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={pcbg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showAccountAlert}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={logobg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onSpinToWinButtonPressed.bind(this)}
          style={styles.childStyle}
        >
          <ImageBackground

            resizeMode={'stretch'}
            style={{ flex: 1 }}
            source={advbg}
          />

        </TouchableOpacity>

      </View>
    );
  }
}

const space = 5;
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: space,
    marginTop: 0,
    backgroundColor: 'gray'
  },
  childStyle: {
    width: '50%',
    height: '33%',
    backgroundColor: 'black',
    borderWidth: 2.5,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: 'red',
    marginBottom: space
  }
  });

//AppRegistry.registerComponent('WS', () => App);

export default Hub;
