import React from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../constants/Colors';
import { PAGES } from '../constants/Layout';
import { BackButton } from './Buttons';

const Page = (Comp: any) => ({ children, ...props }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Comp {...props}>{children}</Comp>
      </View>
    </View>
  );
};

export const PageView = Page(ScrollView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingTop: 5
  },
  content: {
    // backgroundColor: Colors.BackgroundGray,
    flex: 1
  }
});
