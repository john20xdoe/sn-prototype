import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Account from './screens/Account';
import Coach from './screens/Coach';

const screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  Coach: {
    screen: Coach,
    navigationOptions: {
      tabBarLabel: 'Coach',
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
          name='ios-person-outline'
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
