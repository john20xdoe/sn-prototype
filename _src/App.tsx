import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";

import { RootStack } from "./AppNavigator";
import Colors from "./constants/Colors";
// import {RootNavigator} from './AppNavigator';
export interface OwnProps {
  navigation?: any;
}
interface Props extends OwnProps {
  skipLoadingScreen: boolean;
}
interface OwnState {
  isLoadingComplete: boolean;
}
export default class App extends Component<Props, OwnState> {
  public state = {
    isLoadingComplete: false
  };

  public componentDidMount() {
    // TODO add spllash screen?
  }

  public componentDidCatch(error: any) {
    alert("Error:" + error);
    // TODO add splash screen
  }

  public render() {
    return (
      <View style={styles.container}>
        {/* <AppBottomTab /> */}
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  }
});
