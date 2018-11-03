import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import { AppBottomTab } from '../AppNavigator';
import Colors from '../constants/Colors';
import { BackButton } from './Buttons';

const Page = (Comp: any) => ({ children, ...props }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton
          tintColor={Colors.Primary}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <Comp {...props}>{children}</Comp>
      {/* <View>
        <AppBottomTab />
      </View> */}
    </View>
  );
};

export const PageView = Page(View);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },
  header: {
    height: 19
  }
});
