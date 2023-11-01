import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const PhoneIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={22}
            height={24}
            viewBox="0 0 22 24"
            fill="none"
            {...props}>
            <G clipPath="url(#clip0_1302_758)">
                <Path
                    d="M15.625 1.029l-8.65-.01c-.951 0-1.73.894-1.73 1.987v17.888c0 1.094.779 1.988 1.73 1.988h8.65c.952 0 1.73-.894 1.73-1.988V3.006c0-1.093-.778-1.977-1.73-1.977zm0 17.878h-8.65V4.994h8.65v13.913z"
                    fill={color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1302_758">
                    <Path
                        fill="#fff"
                        transform="translate(.92 .025)"
                        d="M0 0H20.7603V23.8509H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
};