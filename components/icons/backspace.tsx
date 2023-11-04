import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const BackspaceIcon = (props: TProps) => {
    const { color = '#fff' } = props

    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}>
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={24}
            >
                <Path fill={color} d="M0 0H24V24H0z" />
            </Mask>
            <G mask="url(#a)">
                <Path
                    d="M10.245 18L4.01 12l6.234-6 1.454 1.4-3.74 3.6h14.752v2H7.96l3.74 3.6-1.454 1.4z"
                    fill="#fff"
                />
            </G>
        </Svg>
    )
};