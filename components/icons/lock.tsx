import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const LockIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={12}
            height={16}
            viewBox="0 0 12 16"
            fill="none"
            {...props}>
            <G clipPath="url(#clip0_1302_771)">
                <Path
                    d="M16.22 8.304h-.865V6.317c0-2.743-1.937-4.97-4.325-4.97-2.387 0-4.325 2.227-4.325 4.97v1.987H5.84c-.951 0-1.73.895-1.73 1.988v9.938c0 1.093.779 1.987 1.73 1.987h10.38c.952 0 1.73-.894 1.73-1.987v-9.938c0-1.093-.778-1.988-1.73-1.988zM8.435 6.317c0-1.65 1.16-2.982 2.595-2.982 1.436 0 2.595 1.332 2.595 2.982v1.987h-5.19V6.317zM16.22 20.23H5.84v-9.938h10.38v9.938zm-5.19-2.982c.952 0 1.73-.894 1.73-1.987s-.778-1.988-1.73-1.988c-.951 0-1.73.895-1.73 1.988s.779 1.987 1.73 1.987z"
                    fill={color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1302_771">
                    <Path
                        fill="#fff"
                        transform="translate(.65 .354)"
                        d="M0 0H20.7603V23.8509H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
};