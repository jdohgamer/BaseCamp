import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.containerStyle, props.styles]}>
    {props.children}
    </View>
  );


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#faebd7',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
