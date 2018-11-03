import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { PageView } from '../components/Page';
import Colors from '../constants/Colors';
import { PAGES } from '../constants/Layout';

export default class Summary extends Component {
  public render() {
    // Display the compiled notes as read-only narrative
    return (
      <PageView>
        <View>
          <Icon
            name='open-book'
            type='entypo'
            size={PAGES.iconSize}
            color={Colors.Primary}
          />
          <Text>Recently...</Text>
        </View>
      </PageView>
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
