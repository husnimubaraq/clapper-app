import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const SearchIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
            <Circle cx={11} cy={11} r={8} />
            <Path d="M21 21L16.65 16.65" />
        </Svg>
    )
};