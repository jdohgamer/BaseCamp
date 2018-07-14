import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { CardSection, Card, Button } from '../common';

const bg = require('../assets/bgTemp.png');

class Dining extends Component {

  render() {
    return (

      <ScrollView>
        <Text style={{ justifyContent: 'center', fontSize: 30, paddingTop: 20 }}>
        World Class Entertainment
        </Text>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #1
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #2
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #3
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #4
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #5
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Show #6
            </Text>
          </CardSection>
          <CardSection>
            <Image
              style={styles.stretch}
              source={bg}
            />
          </CardSection>
          <CardSection>
            <Button>
            Buy Tickets
            </Button>
          </CardSection>
        </Card>


      </ScrollView>

    );
  }
}
const styles = {
  stretch: {
    width: 400,
    height: 200
  }
};
export default Dining;
