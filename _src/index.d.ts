declare module "react-native-platform-touchable" {
  import { Component } from "react";
  import {
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps
  } from "react-native";

  type TouchableProps =
    | {
        fallback?: any;
      }
    | TouchableWithoutFeedbackProps
    | TouchableHighlightProps
    | TouchableNativeFeedbackProps
    | TouchableOpacityProps;

  export default class Touchable extends Component<TouchableProps, any> {}
}
declare module "*.png";
declare module "*.json";
