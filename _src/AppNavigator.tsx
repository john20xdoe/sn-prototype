import React from 'react';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { AboutButton, styles as ButtonStyles } from './components/Buttons';
import Colors from './constants/Colors';
import { GlobalStyles } from './constants/GlobalStyles';
import { BOTTOM_TABS, HEADER } from './constants/Layout';
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
            name='history'
            type='fontawesome'
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

export const RootStack = createStackNavigator(
  {
    Home: { screen: AppBottomTab },
    About: { screen: AboutScreen, navigationOptions: { headerRight: null } }
  },
  {
    mode: 'modal',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Snowflake Coach',
      headerTintColor: '#fff',
      headerStyle: GlobalStyles.flatHeaderNavigation,
      headerTitleStyle: GlobalStyles.headerTitleStyle,
      headerLeft:
        // <BackButton
        //   tintColor={Colors.Primary}
        //   onPress={() => navigation.goBack(null)}
        // />
        // <View style={[ButtonStyles.headerButton]}>
        //   <Icon
        //     name='ios-snow'
        //     type='ionicon'
        //     size={HEADER.iconSize}
        //     color={Colors.Primary}
        //   />
        // </View>
        null,
      headerRight: (
        <AboutButton
          onPress={() => navigation.navigate('About')}
          tintColor={Colors.Primary}
        />
      )
    })
  }
);
