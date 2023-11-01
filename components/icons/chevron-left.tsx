import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const ChevronLeftIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={7}
            height={13}
            viewBox="0 0 7 13"
            fill="none"
            {...props}>
            <Path
                d="M5.504 12.5a.859.859 0 01-.669-.317L.695 7.04a.857.857 0 010-1.088L4.981.809A.858.858 0 016.3 1.906L2.469 6.5l3.703 4.595a.858.858 0 01-.668 1.405z"
                fill={color}
            />
        </Svg>
    )
};