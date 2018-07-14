import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class ResetPin extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.navigation.navigate('Hub');
  }

  // onCreateUserButtonPress() {
  //   createUser();
  // }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Submit
        </Button>
      );
    }

  // renderCreateButton() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />;
  //   }
  //     return (
  //       <Button onPress={this.onButtonPress.bind(this)}>
  //       Create Passport Account
  //       </Button>
  //   );
  // }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
        </View>
      );
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#8b0000' }}>

         <Text
          style={styles.TextStyle}
         >
        Reset Your Pin
        </Text>
            <Card>
              <CardSection>
                <Input
                  label="DL #"
                  placeholder="23345444"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
              </CardSection>

              <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="#########"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
              </CardSection>
              {this.renderError()}
              <CardSection>
              {this.renderButton()}
              </CardSection>

            </Card>

        </View>

    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'red'
  },
  TextStyle: {
    fontSize: 40,
    paddingTop: 50,
    paddingBottom: 50,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Helvetica'
  }
};

// const mapStateToProps = ({ auth }) => {
//   const { email, password, error, loading } = auth;
//
//   return { email, password, error, loading };
// };

export default ResetPin;

// export default connect(mapStateToProps,
//   { emailChanged, passwordChanged, loginUser })(LoginForm);
