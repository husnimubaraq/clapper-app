import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const BackSpaceIcon = (props: TProps) => {
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
            <Path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
            <Path d="M18 9L12 15" />
            <Path d="M12 9L18 15" />
        </Svg>
    )
};