import React from 'react';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import { BOTTOM_TABS } from './constants/Layout';
import AboutScreen from './screens/About';
import Account from './screens/Account';
import HomeScreen from './screens/Home';
import StepsScreen from './screens/Steps';
import Summary from './screens/Summary';

const ICON_SIZE = BOTTOM_TABS.iconSize;
export const AppBottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='ios-snow'
            type='ionicon'
            size={ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    Steps: {
      screen: StepsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='list' type='entypo' size={ICON_SIZE} color={tintColor} />
        )
      }
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='open-book'
            type='entypo'
            size={ICON_SIZE}
            color={tintColor}
          />
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
            size={ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='info-with-circle'
            type='entypo'
            size={ICON_SIZE}
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
      inactiveTintColor: 'gray',
      style: { height: BOTTOM_TABS.height }
    },
    initialRouteName: 'Home'
  }
);
