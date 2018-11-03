import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { OwnProps } from '../App';
import { PageView } from '../components/Page';
import { PAGES } from '../constants/Layout';

export default class AboutScreen extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  public goHome = () => {
    this.props.navigation.navigate('Home');
  }

  public render() {
    return (
      <PageView>
        <View style={styles.container}>
          <Icon
            name='info'
            type='entypo'
            size={PAGES.iconSize}
            color={'tomato'}
          />

          <Text>About</Text>
          <Text>Credits to </Text>
          <Text>Enter about text</Text>
          <Touchable style={styles.roundedButton} onPress={() => this.goHome()}>
            <Text>Start Now</Text>
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
  },
  roundedButton: {
    alignSelf: 'center',
    marginBottom: 2,
    backgroundColor: 'gold',
    borderRadius: 5,
    width: 135,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
