import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Summary extends Component {
  public render() {
    return (
      // Display the compiled notes as read-only narrative
      <View style={styles.container}>
        <Text style={styles.title}>Summary</Text>
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
