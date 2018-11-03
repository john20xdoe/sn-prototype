import React from "react";
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import Touchable from "react-native-platform-touchable";
import { AppBottomTab } from "../AppNavigator";
import Colors from "../constants/Colors";
import { PAGES } from "../constants/Layout";
import { BackButton } from "./Buttons";

const Page = (Comp: any) => ({ children, ...props }: any) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>

      </View> */}
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
  header: {
    height: PAGES.headerHeight
  },
  content: {
    backgroundColor: Colors.BackgroundGray,
    flex: 1
  }
});
