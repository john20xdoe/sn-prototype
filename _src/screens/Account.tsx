import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Account extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
