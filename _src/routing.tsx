import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';

import Account from './screens/Account';
import Home from './screens/Home';

const screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='open-book' type='entypo' size={28} color={tintColor} />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='ios-information-circle'
          type='ionicon'
          size={28}
          color={tintColor}
        />
      )
    }
  }
});

export const createRootNavigator = () => {
  return StackNavigator({
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  });
};
