import { Platform, Dimensions } from 'react-native';

function useDevice() {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;

  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  const isTablet = aspectRatio < 1.6;
  const isSmallDevice = width < 375;

  return {
    isIOS,
    isAndroid,
    isTablet,
    isSmallDevice,
  };
}

export default useDevice;