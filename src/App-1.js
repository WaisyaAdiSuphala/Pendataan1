import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Awal from './src/comp/awal';
import Page1 from './src/comp/page1';
import Page2 from './src/comp/page2';
import Inputbaru from './src/comp/inputbaru';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(

  {
    Awal: {
      screen: Awal,
    },
    Page1: {
      screen: Page1,
    },
    Page2: {
      screen: Page2,
    },
    Inputbaru: {
      screen: Inputbaru,
    },
  },
  {
    initialRouteName: 'Awal',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
