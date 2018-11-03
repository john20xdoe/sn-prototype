import { Platform } from 'react-native';
import Colors from './Colors';

export default {
  flexWrapper: {
    flex: 1
  },
  flatHeaderNavigation: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: Colors.Background
  },
  headerTitleStyle: {
    fontSize: 19,
    color: 'rgb(1, 99, 72)',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1
  },
  elevationShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 3
  },
  mediumShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 3
  },
  subtleShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1, // subtle shadow w/o bleed
    shadowOpacity: 1,
    elevation: 1
  },
  borderShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1
  },
  prefix: {
    marginRight: -8,
    marginBottom: Platform.OS === 'ios' ? -2 : 0
  },
  prefixText: {
    color: 'lightgray'
  }
};
