import React, { Component } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { OwnProps } from '../App';
import { PageView } from '../components/Page';

export default class HomeScreen extends Component {
  constructor(props: OwnProps) {
    super(props);
  }

  public render() {
    return (
      <PageView>
        <View>
          <Icon name='history' type='fontawesome' size={120} color={'tomato'} />
          <Text>Recently...</Text>
          <Touchable onPress={() => alert('Continue')}>
            <Text>Continue</Text>
          </Touchable>
          <Touchable onPress={() => alert('Start')}>
            <Text>Start</Text>
          </Touchable>
        </View>
      </PageView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
