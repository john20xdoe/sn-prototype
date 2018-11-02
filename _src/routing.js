import React, { Component } from "react";
import { Dimensions, Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Coach from "./screens/Coach";
import Exercises from "./screens/Exercises";
import AddExercise from "./screens/AddExercise";
import Account from "./screens/Account";

let screen = Dimensions.get("window");

export const Tabs = TabNavigator({
  Coach: {
    screen: Coach,
    navigationOptions: {
      tabBarLabel: "Coach",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  Exercises: {
    screen: Exercises,
    navigationOptions: {
      tabBarLabel: "Exercises",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  "Add Exercise": {
    screen: AddExercise,
    navigationOptions: {
      tabBarLabel: "Add Exercise",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: "Account",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-person-outline"
          type="ionicon"
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
