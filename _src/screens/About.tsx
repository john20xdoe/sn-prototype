import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OwnProps } from '../App';

export default class AboutScreen extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  public goHome = () => {
    this.props.navigation.navigate('Home');
  }

  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.container}>
          <Text>About</Text>
          <Text>Credits to </Text>
          <Text>Enter about text</Text>
        </View>
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
