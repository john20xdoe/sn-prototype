import React from 'react';

import { Icon } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { AboutButton } from './components/Buttons';
import Colors from './constants/Colors';
import { GlobalStyles } from './constants/GlobalStyles';
import { BOTTOM_TABS } from './constants/Layout';
import AboutScreen from './screens/About';
import Account from './screens/Account';
import HomeScreen from './screens/Home';
import StepsScreen from './screens/Steps';
import SummaryScreen from './screens/Summary';

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
      screen: SummaryScreen,
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
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: navigation.state.routeName.toUpperCase(),
      gesturesEnabled: false
    }),
    tabBarOptions: {
      activeTintColor: Colors.Primary,
      inactiveTintColor: Colors.Disabled,
      style: { height: BOTTOM_TABS.height }
    },
    initialRouteName: 'Home'
  }
);
// About: {
//   screen: AboutScreen,
//   navigationOptions: {
//     tabBarIcon: ({ tintColor }) => (
//       <Icon
//         name='info-with-circle'
//         type='entypo'
//         size={ICON_SIZE}
//         color={tintColor}
//       />
//     )
//   }
// }

export const RootStack = createStackNavigator(
  { Home: { screen: AppBottomTab }, About: { screen: AboutScreen } },
  {
    mode: 'modal',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Snowflake - ' + navigation.state.routeName,
      headerTintColor: '#fff',
      headerStyle: GlobalStyles.flatHeaderNavigation,
      headerTitleStyle: GlobalStyles.headerTitleStyle,
      headerRight: (
        <AboutButton
          onPress={() => navigation.navigate('About')}
          tintColor='gold'
        />
      )
    })
  }
);
