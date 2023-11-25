import {Dimensions, Platform} from 'react-native';

const IOS = Platform.OS === 'ios';
export default {
  Height: IOS
    ? Dimensions.get('screen').height
    : Dimensions.get('window').height,
  Width: IOS ? Dimensions.get('screen').width : Dimensions.get('window').width,
};
