import { AppLoading, Asset } from 'expo';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BottomNavigation from './AppNavigator';
export interface Props {
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
    SplashScreen.hide();
  }

  public render() {
    return (
      <View style={styles.container}>
        <BottomNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
