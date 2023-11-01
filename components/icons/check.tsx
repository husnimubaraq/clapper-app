import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const CheckIcon = (props: TProps) => {
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
                d="M13.805 3.528c.26.26.26.683 0 .943L6.47 11.804a.667.667 0 01-.942 0L2.195 8.471a.667.667 0 11.943-.943L6 10.39l6.862-6.862c.26-.26.682-.26.943 0z"
                fill={color}
            />
        </Svg>
    )
};