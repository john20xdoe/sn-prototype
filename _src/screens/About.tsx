import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { Props } from '../App';

export default class AboutScreen extends Component {
  constructor(props: Props) {
    super(props);
  }

  public goHome = () => {
    this.props.navigation.navigate('Home');
  }

  public render() {
    return (
      <View style={styles.container}>
        <Icon
          name='info-with-circle'
          type='entypo'
          size={120}
          color={'tomato'}
        />

        <Text>About</Text>
        <Text>Credits to </Text>
        <Text>Enter about text</Text>
        <Touchable style={styles.roundedButton} onPress={() => this.goHome()}>
          <Text>Start</Text>
        </Touchable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  roundedButton: {
    alignSelf: 'center',
    marginBottom: 2,
    backgroundColor: 'tomato',
    borderRadius: 28,
    width: 235,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
