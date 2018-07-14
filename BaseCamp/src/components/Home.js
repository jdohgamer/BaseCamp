import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';
//import { StackNavigator } from 'react-native-navigation';
import { Card, CardSection, Input, Button, Spinner } from '../common';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 300;
const bg = require('../assets/logoHome.png');

const images = [
    'https://imgur.com/rhDBXZw.jpg',
    'https://imgur.com/I2nksNB.jpg',
    'https://imgur.com/OJMuLQx.jpg'
];

class Home extends Component {
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
      Enter A World of Winning
      </Button>
    );
  }

  renderCreateButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Create Passport Account
        </Button>
    );
  }

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

  renderAd(image, index) {
       return (
           <View key={index}>
               <Image
                  resizeMode='contain'
                  style={{ alignSelf: 'center',
                  width: BannerWidth,
                  height: BannerHeight }} source={{ uri: image }}
               />
           </View>
       );
   }


  render() {
    return (
      <View style={{ paddingTop: 30, flex: 1, backgroundColor: '#000000' }}>
        <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={2000}
              loop
              index={0}
              pageSize={BannerWidth}
            >
              {images.map((image, index) => this.renderAd(image, index))}
            </Carousel>
          </View>
        <Text style={styles.TextStyle} / >


        <Card>
          <CardSection>
            <Input
              label="Players Club #"
              placeholder="Y167345444"
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
          <CardSection>
          {this.renderCreateButton()}
          </CardSection>

        </Card>
        <Text style={styles.TextStyle} />
        <Image
           style={{ alignSelf: 'center',
           width: 120,
           height: 120 }} source={bg}
        />

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
    fontSize: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#ffffff'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  TextBottomStyle: {
    fontSize: 80,
    paddingTop: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#ffffff'
  }
};

// const mapStateToProps = ({ auth }) => {
//   const { email, password, error, loading } = auth;
//
//   return { email, password, error, loading };
// };

export default Home;

// export default connect(mapStateToProps,
//   { emailChanged, passwordChanged, loginUser })(LoginForm);
