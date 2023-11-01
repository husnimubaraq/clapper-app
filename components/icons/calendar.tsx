import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const CalendarIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            {...props}>
            <Path
                d="M19.164 1.719h-1.977V.687a.688.688 0 00-1.375 0V1.72H6.188V.687a.688.688 0 00-1.375 0V1.72H2.835A2.84 2.84 0 000 4.555v14.61A2.84 2.84 0 002.836 22h16.328A2.84 2.84 0 0022 19.164V4.554a2.84 2.84 0 00-2.836-2.835zM2.836 3.094h1.977v.687a.688.688 0 001.375 0v-.687h9.625v.687a.688.688 0 001.374 0v-.687h1.977c.806 0 1.461.655 1.461 1.46v1.633H1.375V4.556c0-.806.655-1.461 1.46-1.461zm16.328 17.531H2.836c-.806 0-1.461-.655-1.461-1.46V7.562h19.25v11.601c0 .806-.655 1.461-1.46 1.461z"
                fill="#848484"
            />
        </Svg>
    )
};