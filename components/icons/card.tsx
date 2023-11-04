import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const CardIcon = (props: TProps) => {
    const { color = '#fff' } = props

    return (
        <Svg
            width={22}
            height={25}
            viewBox="0 0 22 25"
            fill="none"
            {...props}>
            <G clipPath="url(#clip0_1302_790)">
                <Path
                    d="M18.22 4.348H4.38c-.96 0-1.721.884-1.721 1.987L2.65 18.261c0 1.103.77 1.988 1.73 1.988h13.84c.96 0 1.73-.885 1.73-1.988V6.335c0-1.103-.77-1.987-1.73-1.987zm0 13.913H4.38v-5.963h13.84v5.963zm0-9.938H4.38V6.335h13.84v1.988z"
                    fill={color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1302_790">
                    <Path
                        fill="#fff"
                        transform="translate(.92 .373)"
                        d="M0 0H20.7603V23.8509H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
};