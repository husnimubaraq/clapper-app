import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

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
            <Path
                d="M10.5 16h-9C.673 16 0 15.327 0 14.5v-7C0 6.673.673 6 1.5 6h9c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5zm-9-9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-9z"
                fill={color}
            />
            <Path
                d="M9.5 7a.5.5 0 01-.5-.5V4c0-1.654-1.346-3-3-3S3 2.346 3 4v2.5a.5.5 0 01-1 0V4c0-2.206 1.794-4 4-4s4 1.794 4 4v2.5a.5.5 0 01-.5.5zM6 11.333A1.335 1.335 0 014.667 10c0-.735.598-1.333 1.333-1.333S7.333 9.265 7.333 10 6.735 11.333 6 11.333zm0-1.666a.334.334 0 10.001.667A.334.334 0 006 9.667z"
                fill={color}
            />
            <Path
                d="M6 13.333a.5.5 0 01-.5-.5V11a.5.5 0 011 0v1.833a.5.5 0 01-.5.5z"
                fill={color}
            />
        </Svg>
    )
};