import React, { Component } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { Props } from '../App';
import AppNavigatorBottom from '../AppNavigatorBottom';

export default class HomeScreen extends Component {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon name='ios-snow' type='ionicon' size={120} color={'tomato'} />
          <Text>Recently...</Text>
          <Touchable onPress={() => alert('Continue')}>
            <Text>Continue</Text>
          </Touchable>
          <Touchable onPress={() => alert('Start')}>
            <Text>Start</Text>
          </Touchable>
        </View>
        <View>
          <AppNavigatorBottom />
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
