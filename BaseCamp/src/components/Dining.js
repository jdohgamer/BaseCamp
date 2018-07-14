import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { CardSection, Card, Button } from '../common';

const bg = require('../assets/bgTemp.png');

class Dining extends Component {

  render() {
    return (

      <ScrollView>
        <Text style={{ alignSelf: 'center', fontSize: 30, paddingTop: 20 }}>
        World Class Dining Experience
        </Text>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>

        <Card style={{ height: 300 }}>
          <CardSection>
            <Text>
              Restaurant #5
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
            Call or Reserve
            </Button>
          </CardSection>
        </Card>


      </ScrollView>

    );
  }
}
const styles = {
  stretch: {
    flex: 1
  }
};
export default Dining;
