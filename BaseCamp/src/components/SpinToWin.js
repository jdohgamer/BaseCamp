import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View, Text } from 'react-native';
import { Button } from '../common';

class SpinToWin extends Component {

  constructor() {
  super();

  this.RotateValueHolder = new Animated.Value(0);
}

   componentDidMount() {
     this.StartImageRotateFunction();
     }

  onSpinButtonPressed() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
  this.RotateValueHolder.setValue(0);

  Animated.timing(
    this.RotateValueHolder,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }
  ).start(() => this.StartImageRotateFunction());
 }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>

      <Text
        style={{ paddingBottom: 20,
                 paddingTop: 60,
                 fontSize: 60,
                 alignSelf: 'center',
                 justifyContent: 'center' }}
      >
      Spin to Win
      </Text>

       <Animated.Image
        style={{
          width: 250,
          height: 230,
          transform: [{ rotate: RotateData }] }}
          source={{ uri: 'https://imgur.com/MStwE7G.jpg' }}
       />

       <Text style={{ paddingTop: 30 }} />
       <Button>
         Spin!
       </Button>
       <Text style={{ paddingTop: 240 }} />

      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default SpinToWin;
