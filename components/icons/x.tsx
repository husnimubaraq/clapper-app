import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const XIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.472 3.53c.26.26.26.682 0 .942l-8 8a.667.667 0 01-.943-.943l8-8c.26-.26.682-.26.943 0z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.529 3.53c.26-.261.682-.261.943 0l8 8a.667.667 0 01-.943.942l-8-8a.667.667 0 010-.943z"
                fill={color}
            />
        </Svg>
    )
};