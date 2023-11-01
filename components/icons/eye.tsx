import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const EyeIcon = (props: TProps) => {
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
            {...props}
        >
            <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <Circle cx={12} cy={12} r={3} />
        </Svg>
    )
};