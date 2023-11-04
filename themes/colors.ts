export const palette = {
  // Initial Text
  // neutral100: '#FFFFFF',
  neutral200: '#F4F2F1',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#1E1E1E', // Primary Text Color
  neutral900: '#000000',

  primary100: '#FC0A7B', // Main Primary
  primary200: '#E8C1B4',
  primary300: '#DDA28E',
  primary400: '#D28468',
  primary500: '#C76542',
  primary600: '#A54F31',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',

  accent100: '#FFEED4',
  accent200: '#FFE1B2',
  accent300: '#FDD495',
  accent400: '#FBC878',
  accent500: '#FFBB50',

  angry100: '#F2D6CD',
  angry500: '#C03403',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',

  // Figma Based Color
  primary: '#1B4C60B2',
  primary80: '#1B4C60A6',
  secondary: '#215096',
  neutral100: '#1E1E1E',
  neutral60: '#C4C4C4D9',
  neutral80: '#737373',
  neutral40: '#E4E4E4',
  neutral30: '#EFEFEF',
  neutral20: '#F4F4E6',
  neutral0: '#FFFFFF',
  surfacePrimary: '#F5F8FF',
  surfaceDanger: '#FFF0F0',
  surfaceWarning: '#FEFAEF',
  surfaceSuccess: '#F0FFFD',
  borderDanger: '#FCC3C1',
  borderPrimary: '#AAC3FC',
  borderWarning: '#FDE5AA',
  borderSuccess: '#ABDFD8',
  blackOverlay: 'rgba(255, 255, 255, 0.1)',
  mainWarning: '#FAB000',
  mainDanger: '#F54A45',
  mainSuccess: '#03A08B',

  // loading color
  highlightColor: '#fdfcfc',
  boneColor: '#e5e5e5',

  unfilledColor: 'rgba(255, 255, 255, 0.1)',
};

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The default text color in many components.
   */
  text: palette.neutral100,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral80,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral0,
  /**
   * The default border color.
   */
  border: palette.neutral40,
  /**
   * The main tinting color.
   */
  tint: palette.neutral80,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
};