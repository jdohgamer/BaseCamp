import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './components/Home';
import Hub from './components/Hub';
import ResetPin from './components/ResetPin';
import Dining from './components/Dining';
import Entertainment from './components/Entertainment';
import Gaming from './components/Gaming';
import Settings from './components/Settings';
import SpinToWin from './components/SpinToWin';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Hub: {
    screen: Hub,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  ResetPin: {
    screen: ResetPin,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Dining: {
    screen: Dining,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Entertainment: {
    screen: Entertainment,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Gaming: {
    screen: Gaming,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()}
      ${navigation.state.params.name.last.toUpperCase()}`,
    })
  }
});

export const Tabs = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Log In',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Hub: {
    screen: Hub,
    navigationOptions: {
      tabBarLabel: 'Hub',
      tabBarIcon: ({ tintColor }) => <Icon name="grid-on" size={35} color={tintColor} />,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
    },
  },

});

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Home: {
    screen: Home,
  },
  Hub: {
    screen: Hub,
  },
  ResetPin: {
    screen: ResetPin,
  },
  Dining: {
    screen: Dining,
  },
  Entertainment: {
    screen: Entertainment,
  },
  Gaming: {
    screen: Gaming,
  },
  Settings: {
    screen: Settings,
  },
  SpinToWin: {
    screen: SpinToWin,
  },
},
   {
  mode: 'modal',
  headerMode: 'none',
});
