import { useSafeAreaInsets } from 'react-native-safe-area-context';

const propertySuffixMap: any = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Start',
  right: 'End',
  start: 'Start',
  end: 'End',
};

const edgeInsetMap: any = {
  start: 'left',
  end: 'right',
};

/**
 * A hook that can be used to create a safe-area-aware style object
  that can be passed directly to a View.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useSafeAreaInsetsStyle.md)
 */
export function useSafeAreaInsetsStyle(safeAreaEdges: any, property = 'padding') {
  const insets: any = useSafeAreaInsets();

  return safeAreaEdges.reduce(
    (acc: any, e: any) => ({
      ...acc,
      [`${property}${propertySuffixMap[e]}`]: insets[edgeInsetMap[e] ?? e],
    }),
    {},
  );
}