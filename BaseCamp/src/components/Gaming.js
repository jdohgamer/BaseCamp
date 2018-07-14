import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, Input } from '../common';

const bg = require('../assets/map.png');

class Gaming extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (

      <View>
        <Text style={{ fontSize: 30, paddingTop: 20 }}>
        Search for Game
        </Text>
        <Card style={{ height: '100%' }}>
          <CardSection>
            <Input
              label="Game Title"
              placeholder="Hot Red Ruby"
            />
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
        </Card>
      </View>

    );
  }
}
const styles = {
  stretch: {
    width: 400,
    height: 600
  }
};
export default Gaming;
