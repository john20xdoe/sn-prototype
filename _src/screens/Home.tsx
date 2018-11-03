import React, { Component } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { OwnProps } from '../App';
import { AppBottomTab } from '../AppNavigator';
import { PageView } from '../components/Page';

export default class HomeScreen extends Component {
  constructor(props: OwnProps) {
    super(props);
  }

  public render() {
    return (
      <PageView>
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
        <View>{/* <AppBottomTab /> */}</View>
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
