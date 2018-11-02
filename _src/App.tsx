import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation from './AppNavigator';
export interface Props {}
export default class App extends Component<Props> {
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
