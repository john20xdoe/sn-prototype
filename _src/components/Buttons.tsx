import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import { Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import Colors from '../constants/Colors';
import { GlobalStyles } from '../constants/GlobalStyles';
import { HEADER } from '../constants/Layout';
export interface ButtonProps {
  onPress: (e: any) => void;
  tintColor?: string;
}
export const BackButton: React.SFC<ButtonProps> = ({ onPress, tintColor }) => (
  <Touchable onPress={onPress} style={styles.touchable}>
    <View style={styles.headerButton}>
      <Icon
        name='md-arrow-back'
        type='ionicon'
        size={HEADER.iconSize}
        color={tintColor}
      />
    </View>
  </Touchable>
);

export const AboutButton: React.SFC<ButtonProps> = ({ onPress, tintColor }) => (
  <Touchable onPress={onPress} style={styles.touchable}>
    <View style={styles.headerButton}>
      <Icon
        name='info-with-circle'
        type='entypo'
        size={HEADER.iconSize}
        color={tintColor}
      />
    </View>
  </Touchable>
);

export const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'row'
  },
  headerButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    paddingHorizontal: 16,
    alignSelf: 'center',
    borderColor: Colors.Primary,
    borderRadius: HEADER.iconSize
  },
  roundedButton: {
    alignSelf: 'center',
    marginBottom: 2,
    backgroundColor: Colors.Accent,
    borderRadius: 5,
    width: 120,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.flatten(GlobalStyles.subtleShadow)
  },
  roundedButtonText: {
    color: '#fff',
    paddingTop: 3
  }
});
