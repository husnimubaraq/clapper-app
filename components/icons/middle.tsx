import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const MiddleIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={70}
            height={90}
            viewBox="0 0 62 90"
            fill="none"
            {...props}>
            <Rect x={1} y={1} width={26} height={19} rx={2} stroke={color} />
            <Path
                d="M62 85.224v-60c-5.5-1-6.5-5.5-6.5-5.5-6.5-24-40.5-28.5-49 0-.86 2.882-2.5 4.5-6.5 5.5v60h62z"
                fill="#fff"
            />
        </Svg>
    )
};