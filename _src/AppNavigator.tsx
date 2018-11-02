import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import Account from './screens/Account';
import Home from './screens/Home';
import Summary from './screens/Summary';

const screen = Dimensions.get('window');

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-snow' type='ionicon' size={28} color={tintColor} />
        )
      }
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='open-book' type='entypo' size={28} color={tintColor} />
        )
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='account-circle'
            type='materialcommunityicon'
            size={28}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: 'Snowflake - ' + navigation.state.routeName.toUpperCase(),
      tabBarLabel: navigation.state.routeName.toUpperCase(),
      gesturesEnabled: false
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

// const createRootNavigator = () => {
//   return StackNavigator({
//     Tabs: {
//       screen: Tabs,
//       navigationOptions: {
//         gesturesEnabled: false
//       },
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray'
//       }
//     }
//   });
// };

// export default createRootNavigator;
